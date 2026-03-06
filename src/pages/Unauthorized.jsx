import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>401 - Unauthorized</h1>
      <p>You must log in to view this page.</p>

      <Link to="/login">
        <button style={{ marginTop: "15px" }}>Go to Login</button>
      </Link>
    </div>
  );
}

export default Unauthorized;