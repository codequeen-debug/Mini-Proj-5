import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>

      <Link to="/">
        <button style={{ marginTop: "15px" }}>Go Home</button>
      </Link>
    </div>
  );
}

export default NotFound;