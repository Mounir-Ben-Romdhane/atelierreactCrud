import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../service/api';

function Event(props) {
  const [liked, setLiked] = useState(false);

  const handleDelete = async () => {
    try {
        await deleteEvent(props.id);
        window.location.reload();

        // Optionally, you can add some logic here after successful deletion
    } catch (error) {
        console.error('Error deleting event:', error);
    }
};

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/public/images/${props.img}`} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Prix : {props.price}
          </Card.Text>
          <Card.Text>
            Nb tickets : {props.nbTickets}
          </Card.Text>
          <Card.Text>
            Nb participants : {props.nbParticipants}
          </Card.Text>
          <Button variant="primary" onClick={toggleLike}>
            {liked ? 'Dislike' : 'Like'}
          </Button>
          <Button variant="primary" as={Link} to={`/update-event/${props.id}`}>Update</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Event;
