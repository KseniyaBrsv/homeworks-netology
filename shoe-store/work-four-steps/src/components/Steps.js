import {useState} from "react";
import {Col, Form, Button, Table} from 'react-bootstrap';
import { uniqueId, find } from 'lodash';
import cancel from '../image/cancel.svg'

export const Steps = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const sortByDate = (arr) =>
    arr.sort((a, b) => new Date(b.date) - new Date(a.date));

  const removeDataItem = (data, id) => data.filter((item) => item.id !== id);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (find(data, {date: date})) {
      find(data, {date: date}).distance += +distance;
    } else {
      setData(
        sortByDate([...data, {id: uniqueId(), date, distance: +distance}])
      );
    }
    setDate('');
    setDistance('');
  }

  const onRemoveHandler = (id) => (e) => {
    e.preventDefault();
    setData(removeDataItem(data, id));
  };

  return (
    <>
      <Form className='row justify-content-center' onSubmit={handleSubmit}>
        <Form.Group className='mb-3 col-xs-12 col-md-5' controlId='formDate'>
          <Form.Label>Дата (ДД.ММ.ГГ)</Form.Label>
          <Form.Control
              type='date'
              value={date}
              onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group
            className='mb-3 col-xs-12 col-md-5'
            controlId='formDistance'
        >
          <Form.Label>Пройдено км</Form.Label>
          <Form.Control
              type='number'
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
          />
        </Form.Group>
        <Col className='mb-3 col-xs-12 col-md-2 align-self-end'>
          <Button variant='primary' type='submit'>
            ОК
          </Button>
        </Col>
      </Form>

      {data.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>Дата (ДД.ММ.ГГ)</th>
              <th>Пройдено км</th>
              <th>Действия</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item) => {
              return (
                <tr key={uniqueId('item_')}>
                  <td>{item.date}</td>
                  <td>{item.distance}</td>
                  <td>
                    <button style={{border: 'none', backgroundColor: '#fff'}}
                            onClick={onRemoveHandler(item.id)}>
                      <img src={cancel} alt='' style={{width: 25}}/>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  )
}
