import useJsonFetch from '../hooks/useJsonFetch';

const Result = ({url}) => {
  const [data, loading, error] = useJsonFetch(url, []);

  return (
    <>
      Data: {data.status}
      <br />
      Loading: {loading ? "true" : "false"}
      <br />
      Error: {error != null ? "true" : "false"}
      <br />
    </>
  );
}

export default Result;
