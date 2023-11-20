import { useEffect, useState } from 'react';
import './App.css';
import puppyBowlApi from './components/puppyApi';

function App() {
 const [allPuppyPlayers, setAllPuppyPlayers] = useState([]);

  useEffect(() => {
 const fetchPupApi = async () => {
  try {
    const response = await fetch(puppyBowlApi`/2310-FSA-ET-WEB-FT-SF/players`);
    const puppyPlayers = await response.json();
    console.log(response);
    setAllPuppyPlayers(puppyPlayers);
  }
  catch (error) {
    console.log(`Error Fetching API!`, error);
   }
};

 fetchPupApi();
  }, []);

  return (
    <>
    <puppyBowlApi/>
    
      <div>

      </div>
    </>
  )
  }

export default App;
