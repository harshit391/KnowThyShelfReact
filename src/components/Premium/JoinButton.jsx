
export function JoinButton() {
  return <div className="join-us main-buttons">
      <a href="./authentication">
        <button type="button">Join Us</button>
      </a>
      <a href="./" style={{
      textDecoration: 'none'
    }}>
        <button type="button" style={{
        marginTop: 0
      }}>
          &lt; Go Back
        </button>
      </a>
    </div>;
}
  