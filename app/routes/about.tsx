import { useState } from "react";

export default function About() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>About</h1>
      {loading && <p>Loading...</p>}
      <button onClick={() => setLoading(true)}>Submit</button>
      <a href="/">Home</a>
    </div>
  );
}
