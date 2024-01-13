import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    // fetch profile from server
    const response = await axios.get("http://localhost:3000/profile");
    // set profile state
    console.log(response.data.profile);
    setProfile(response.data.profile);
  };
  return <div className="App">fwerf</div>;
}

export default App;
