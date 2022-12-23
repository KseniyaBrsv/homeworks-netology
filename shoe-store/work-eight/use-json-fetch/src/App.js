import Result from "./components/Result";

function App() {
  return (
    <div>
      <Result url="http://localhost:7070/data" />
      <Result url="http://localhost:7070/error" />
      <Result url="http://localhost:7070/loading" />
    </div>
  );
}

export default App;
