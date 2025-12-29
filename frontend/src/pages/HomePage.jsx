import { useState } from 'react';
import Navbar from '../components/Navbar';
import RatelimitedUI from '../components/RatelimitedUI';
import { useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchNotes = async () => {
      try {
        const res = await axios.post("http://localhost:5001/api/notes");
        
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />

      {isRateLimited && <RatelimitedUI />}
    </div>
  );
};

export default HomePage;