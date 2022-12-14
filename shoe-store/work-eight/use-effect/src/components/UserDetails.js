import React, {useState, useEffect} from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import Loader from './Loader';

const UserDetails = ({id}) => {
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return undefined;
    }

    fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : !userDetails ? (
        <></>
      ) : (
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={userDetails.avatar} />
            <Card.Body>
              <Card.Title>{userDetails.name}</Card.Title>
            </Card.Body>
            <ListGroup className='list-group-flush'>
              <ListGroupItem>{userDetails.details.city}</ListGroupItem>
              <ListGroupItem>{userDetails.details.company}</ListGroupItem>
              <ListGroupItem>{userDetails.details.position}</ListGroupItem>
            </ListGroup>
          </Card>
        </>
      )}
    </>
  );
};

export default UserDetails;
