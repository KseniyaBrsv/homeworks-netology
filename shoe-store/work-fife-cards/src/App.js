import './App.css';
import {Cards} from "./components/Cards";

function App() {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column'>
      <Cards image={'https://via.placeholder.com/300.png'}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
          the card's content.</p>
        <a href="https://getbootstrap.com/docs/4.3/components/card/" className="btn btn-primary">Go somewhere</a>
      </Cards>

      <Cards>
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="https://getbootstrap.com/docs/4.3/components/card/" className="btn btn-primary">Go somewhere</a>
      </Cards>
    </div>
  );
}

export default App;
