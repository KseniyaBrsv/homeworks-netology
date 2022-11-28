import './App.css';
import {Stars} from "./components/Stars/Stars";

function App() {
  const count = Math.floor(Math.random() * 8);
  return (
    <>
      {count < 1 || 5 < count || Number.isNaN(count) ? null :
        <Stars count={count} />
      }
    </>
  );
}

export default App;
