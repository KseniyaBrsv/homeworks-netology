import {etsy} from './assets/etsy';
import './App.css';
import {Listing} from "./components/Listing";

function App() {
  return (
      <div className='wrapper'>
        <Listing items={etsy} />
      </div>
  );
}

export default App;
