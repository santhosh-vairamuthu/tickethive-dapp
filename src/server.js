const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = 5001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: '<YOUR MYSQL USERNAME>',
  password: '<YOUR MYSQL PASSWORD>',
  database: '<YOUR MYSQL DATABASE>',
});

const dbPromise = require('mysql2/promise');
const db2 = dbPromise.createPool({
  host: 'localhost',
  user: '<YOUR MYSQL USERNAME>',
  password: '<YOUR MYSQL PASSWORD>',
  database: '<YOUR MYSQL DATABASE>',
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', db.threadId);
});

app.get('/getevents', (req, res) => {
  db.query('SELECT * FROM concerts', (err, result) => {
    if (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});

app.get('/searchevents', (req, res) => {
  const prompt = `%${req.query.prompt}%`;
  db.query('SELECT * FROM concerts WHERE concert_name LIKE ?', [prompt], (err, result) => {
    if (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});

app.get('/getdetails', (req, res) => {
  const id = req.query.id;
  db.query('SELECT * FROM concerts WHERE concert_id = ?', [id], (err, result) => {
    if (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});

app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, password], (err, result) => {
      if (err) {
        console.error('Error registering user:', err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.status(201).send(email);
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email)
    const query = 'SELECT password FROM users WHERE email = ?';
    db.query(query, [email], async (err, result) => {
      if (err) {
        console.error('Error logging in user:', err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
      if (result.length === 0) {
        res.status(401).send('User not found');
        return;
      }
      const dbPassword = result[0].password;
      if(email && dbPassword === password){
        res.status(200).send(email);
      }else{
        res.status(401).send("Error in login");
      }
      
    });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/bookevent', async (req, res) => {
  const { email, id, name, persons, clas } = req.body;

  try {
    const [seatCheckResult] = await db2.query('SELECT ?? AS availableSeats FROM concerts WHERE concert_id = ?', [clas, id]);

    if (!seatCheckResult || seatCheckResult.availableSeats < persons) {
      res.status(400).json({ error: 'Insufficient seats available.' });
      return;
    }

    const updateQuery = `UPDATE concerts SET ${clas} = ${clas} - ? WHERE concert_id = ?`;

    await db2.execute(updateQuery, [persons, id]);

    await db2.execute('INSERT INTO tickets (email, concert_id, name, persons, class, seat) VALUES (?, ?, ?, ?, ?, ?)', [email, id, name, persons, clas, persons]);

    res.status(201).send(email);
  } catch (error) {
    console.error('Error booking ticket:', error.stack);
    res.status(500).json({ error: 'An error occurred while booking the ticket.' });
  }
});





app.get("/account", (req, res) => {
  const email = req.query.email;
  if (!email) {
    res.status(400).json({ error: 'Email parameter is missing' });
    return;
  }
  db.query('SELECT * FROM tickets WHERE email = ?', [email], (err, result) => {
    if (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});

app.get("/getName", (req, res) => {
  const email = req.query.email;
  if (!email) {
    res.status(400).json({ error: 'Email parameter is missing' });
    return;
  }
  db.query('SELECT name FROM users WHERE email = ?', [email], (err, result) => {
    if (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(result);
  });
});

app.get('/getconcertdetails', (req, res) => {
  const concert_id = req.query.concert_id;
  db.query('SELECT * FROM concerts WHERE concert_id = ?', [concert_id], (err, result) => {
    if (err) {
      console.error("Error fetching concert details:", err.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(result);
  });
});

app.post('/addevent', (req, res) => {
  const { name, place, time, date, about, image, artimg, artnam, speimg, spenam, ins , c1, c2} = req.body;
  const artistsImagesJSON = JSON.stringify(artimg);
  const artistsNamesJSON = JSON.stringify(artnam);
  const specialGuestsImagesJSON = JSON.stringify(speimg);
  const specialGuestsNamesJSON = JSON.stringify(spenam);
  const instructionsJSON = JSON.stringify(ins);

  const query = `
    INSERT INTO concerts 
    (concert_name, concert_date, concert_time, concert_place, concert_image, about_concert, artists_images, artists_names, special_guests_images, special_guests_names, instructions, c1, c2) 
    VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.query(query, [name, date, time, place, image, about, artistsImagesJSON, artistsNamesJSON, specialGuestsImagesJSON, specialGuestsNamesJSON, instructionsJSON, c1, c2],
    (err, result) => {
      if (err) {
        console.error('Error adding concert:', err.stack);
        res.status(500).json({ error: 'An error occurred while adding the concert.' });
        return;
      }
      res.status(201).send('Concert added successfully');
    });
});

app.post('/checkAvailability', (req, res) => {
  const { eventID, selectedClass, requestedSeats } = req.body;
  
  // Query the database to get the number of available seats for the specified event and class
  const query = `
    SELECT ${selectedClass} AS availableSeats
    FROM concerts
    WHERE concert_id = ?
  `;
  
  db.query(query, [eventID], (err, result) => {
    if (err) {
      console.error('Error checking seat availability:', err.stack);
      res.status(500).json({ error: 'An error occurred while checking seat availability.' });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ error: 'Event not found.' });
      return;
    }

    const availableSeats = result[0].availableSeats;
    if (availableSeats >= requestedSeats) {
      // Sufficient seats available
      res.status(200).json({ available: true });
    } else {
      // Insufficient seats available
      res.status(200).json({ available: false });
    }
  });
});


app.listen(port, () => {
  console.log('Server listening on port', port);
});
