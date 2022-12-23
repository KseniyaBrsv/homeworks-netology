import useJsonFetch from './hooks/useJsonFetch';

function App() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data", []);
  const [data1, loading1, error1] = useJsonFetch("http://localhost:7070/error", []);
  const [data2, loading2, error2] = useJsonFetch("http://localhost:7070/loading", []);

  return (
    <>
      Data: {data.status}
      <br />
      Loading: {loading2 ? "true" : "false"}
      <br />
      Error: {error1 != null ? "true" : "false"}
    </>
  );
}

export default App;
