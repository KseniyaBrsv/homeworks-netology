import './App.css';
import {Container} from 'react-bootstrap';
import {ClocksDashboard} from './components/ClockDashboard';

function App() {
  return (
    <Container className='App mt-3'>
      <ClocksDashboard />
    </Container>
  );
}

export default App;
