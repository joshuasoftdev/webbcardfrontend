import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  // state for profile
  const [profile, setProfile] = useState(null);
  const [useName, setName] = useState("");
  // useEffect to fetch profile from server
  useEffect(() => {
    fetchProfiles();
  }, []);

  // fetch profile function
  const fetchProfiles = async () => {
    // fetch profile from server
    const response = await axios.get("http://localhost:3000/profile");
    // set profile state
    console.log(response.data.profile);
    setProfile(response.data.profile);
  };

  return (
    // display profile
    <div className="App">
      <div>
        <h1>Webbcard</h1>
        <p></p>
        <h2>Frontend</h2>
        {profile &&
          profile.map((profile) => (
            <div key={profile.id}>
              <h2>{axios.profile.body}</h2>
              <p>{profile.personalwebsite}</p>
              <p>{profile.facebook}</p>
              <p>{profile.phone}</p>
              <p>{profile.twitter}</p>
              <p>{profile.instagram}</p>
            </div>
          ))}
      </div>
      <div>
        <h2>name</h2>
        <form>
          <input type="text" name="name" value={useName.name} />
          <textarea name="personalwebsite" value={setName.name} />
          <button type="submit" onSubmit={axios.post.profile}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
