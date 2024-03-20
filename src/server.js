const express = require('express');
const { Client } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt=require('bcrypt');
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const db = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'TicketHive',
  password: 'Guru@2003',
  port: 5433,
});

db.connect();
app.get('/getevents', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM concerts');
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/searchevents', async (req, res) => {
    try {
        console.log(req.query.prompt);
      const result = await db.query('SELECT * FROM concerts where concert_name ILIKE $1',["%"+req.query.prompt+"%"]);
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.get('/getdetails', async (req, res) => {
    try {
        console.log(req.query.id);
      const result = await db.query('SELECT * FROM concerts where concert_id=$1',[req.query.id]);
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error.stack);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  app.post('/signin', async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
      await db.query(query, [name, email, hashedPassword]);
      
      console.log(req.body);
      res.status(201).send(email);
    } catch (error) {
      console.error('Error registering user here:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = 'Select password from users where email ilike $1';
      const pass=await db.query(query, [email]);
      console.log(pass.rows[0].password);
      if(hashedPassword===pass.rows[0].password){
        res.status(201).send('User login');
      }
      else{
        res.status(201).send('Check password');
      }
  
      
    } catch (error) {
      console.error('Error registering user here:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.post('/bookevent', async (req, res) => {
    try {
      const { id, email, name, persons, clas } = req.body;
      await db.query('SELECT insert_ticket($1, $2, $3, $4, $5)', [email, id, name, persons, clas]);
      res.status(201).send(email);
    } catch (error) {
      console.error('Error booking ticket:', error);
      res.status(500).json({ error: 'An error occurred while booking the ticket.' });
    }
  });
  
  
  app.get("/account", async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ error: 'Email parameter is missing' });
        }

        const result = await db.query('SELECT * FROM tickets WHERE email ILIKE $1', [email]);
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get("/getName",async(req,res)=>{
  try {
    const { email } = req.query;

    if (!email) {
        return res.status(400).json({ error: 'Email parameter is missing' });
    }

    const result = await db.query('SELECT name FROM users WHERE email ILIKE $1', [email]);
    res.json(result.rows);
} catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
}
});
app.get('/getconcertdetails', async (req, res) => {
  try {
      const { concert_id } = req.query;
      const result = await db.query('SELECT * FROM concerts WHERE concert_id=$1', [concert_id]);
      res.json(result.rows);
  } catch (error) {
      console.error("Error fetching concert details:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});
app.post('/addevent', async (req, res) => {
  try {
    const { name, place, time, date, about, image, artimg, artnam, speimg, spenam, ins } = req.body;
    
    const artistsImagesJSON = JSON.stringify(artimg);
    const artistsNamesJSON = JSON.stringify(artnam);
    const specialGuestsImagesJSON = JSON.stringify(speimg);
    const specialGuestsNamesJSON = JSON.stringify(spenam);
    const instructionsJSON = JSON.stringify(ins);

    const query = `
      INSERT INTO concerts 
      (concert_name, concert_date, concert_time, concert_place, concert_image, about_concert, artists_images, artists_names, special_guests_images, special_guests_names, instructions) 
      VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `;
    
    await db.query(query, [name, date, time, place, image, about, artistsImagesJSON, artistsNamesJSON, specialGuestsImagesJSON, specialGuestsNamesJSON, instructionsJSON]);
    
    res.status(201).send('Concert added successfully');
  } catch (error) {
    console.error('Error adding concert:', error);
    res.status(500).json({ error: 'An error occurred while adding the concert.' });
  }
});



  app.listen(port,()=>{console.log("Listening server "+port) });