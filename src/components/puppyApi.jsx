import { useEffect , useState } from "react";

const PuppyBowlApi = () => {
const url = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`

const [puppyArray, setPuppyArray] = useState([]);

    useEffect(() => {
 const fetchPups = async() => {
    try {
    const response = await fetch(url);
    const result = await response.json();
    const pupData = result.data.players;
    console.log(pupData);
    setPuppyArray(pupData);
    console.log(setPuppyArray);

    }
    catch(error) {
    console.log(`error fetching!`, error)
    }
 }
 fetchPups();
 console.log(puppyArray);

 }, []);

    return (
        <div>
      <h2>Puppy Roster</h2>
      <ul>
        {puppyArray.map((puppy) => (
          <li key={puppy.id}>{puppy.name}</li>
        ))}
      </ul>
    </div>
  );
}






export default PuppyBowlApi;