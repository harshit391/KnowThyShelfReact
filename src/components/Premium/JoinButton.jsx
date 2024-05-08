import { Link } from "react-router-dom";

export function JoinButton() {
  return <div className="join-us main-buttons">
      <Link to="/authentication">
        <button type="button">Join Us</button>
      </Link>
      <Link to="/" style={{textDecoration: 'none'}}>
        <button type="button" style={{marginTop: 0}}>
          &lt; Go Back
        </button>
      </Link>
    </div>;
}
  