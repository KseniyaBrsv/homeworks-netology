import {Steps} from "./components/Steps";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container className='p-3'>
      <h1 className='header text-center'>Учёт тренировок</h1>
      <Steps />
    </Container>
  );
}

export default App;
