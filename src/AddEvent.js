import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useParams, useNavigate } from 'react-router-dom';
function AddEvent() {
  const [concertName, setConcertName] = useState("");
  const [concertDate, setConcertDate] = useState("");
  const [concertTime, setConcertTime] = useState("");
  const [concertPlace, setConcertPlace] = useState("");
  const [concertImageUrl, setConcertImageUrl] = useState("");
  const [aboutConcert, setAboutConcert] = useState("");
  const [artistImages, setArtistImages] = useState([]);
  const [artistNames, setArtistNames] = useState([]);
  const [specialGuestImages, setSpecialGuestImages] = useState([]);
  const [specialGuestNames, setSpecialGuestNames] = useState([]);
  const [instructions, setInstructions] = useState([]);
const nav=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/addevent', { name:concertName,place:concertPlace,time:concertTime,date:concertDate,about:aboutConcert,image:concertImageUrl,artimg:artistImages,artnam:artistNames,speimg:specialGuestImages,spenam:specialGuestNames,ins: instructions});
        alert("Event Added Successfully");
       nav("/event");
   } catch {
       console.log("Error booking events:");
   }
    setConcertName("");
    setConcertDate("");
    setConcertTime("");
    setConcertPlace("");
    setConcertImageUrl("");
    setAboutConcert("");
    setArtistImages([]);
    setArtistNames([]);
    setSpecialGuestImages([]);
    setSpecialGuestNames([]);
    setInstructions([]);
  };

  return (
    <div>
      <Header/>
    <div className="container mt-5">
      <h2>Add New Concert</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="concertName">
          <Form.Label>Concert Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter concert name"
            value={concertName}
            onChange={(e) => setConcertName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="concertDate">
          <Form.Label>Concert Date</Form.Label>
          <Form.Control
            type="date"
            value={concertDate}
            onChange={(e) => setConcertDate(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="concertTime">
          <Form.Label>Concert Time</Form.Label>
          <Form.Control
            type="time"
            value={concertTime}
            onChange={(e) => setConcertTime(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="concertPlace">
          <Form.Label>Concert Place</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter concert place"
            value={concertPlace}
            onChange={(e) => setConcertPlace(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="concertImageUrl">
          <Form.Label>Concert Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter concert image URL"
            value={concertImageUrl}
            onChange={(e) => setConcertImageUrl(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="aboutConcert">
          <Form.Label>About Concert</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter information about the concert"
            value={aboutConcert}
            onChange={(e) => setAboutConcert(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="artistImages">
          <Form.Label>Artist Images URL (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter artist images URLs separated by commas"
            value={artistImages}
            onChange={(e) => setArtistImages(e.target.value.split(","))}
          />
        </Form.Group>

        <Form.Group controlId="artistNames">
          <Form.Label>Artist Names (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter artist names separated by commas"
            value={artistNames}
            onChange={(e) => setArtistNames(e.target.value.split(","))}
          />
        </Form.Group>

        <Form.Group controlId="specialGuestImages">
          <Form.Label>Special Guest Images URL (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter special guest images URLs separated by commas"
            value={specialGuestImages}
            onChange={(e) =>
              setSpecialGuestImages(e.target.value.split(","))
            }
          />
        </Form.Group>

        <Form.Group controlId="specialGuestNames">
          <Form.Label>Special Guest Names (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter special guest names separated by commas"
            value={specialGuestNames}
            onChange={(e) =>
              setSpecialGuestNames(e.target.value.split(","))
            }
          />
        </Form.Group>
        <Form.Group controlId="instructions">
          <Form.Label>Instructions (comma-separated)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter instructions separated by commas"
            value={instructions}
            onChange={(e) =>
              setInstructions(e.target.value.split(","))
            }
          />
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    
    </div>
  );
}

export default AddEvent;
