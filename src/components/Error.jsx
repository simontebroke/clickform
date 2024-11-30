import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <h1>ERROR</h1>
      <h2>404 - Page not found</h2>
      <Link to="/">Back to home</Link>
    </>
  );
}

export default Error;
