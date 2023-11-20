import { useEffect , useState } from "react";

const PuppyBowlApi = () => {
const url = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`

const [puppyArray, setPuppyArray] = useState([]);

    useEffect(() => {
 const fetchPups = async() => {

    try {
    const response = await fetch(url);
    const result = await response.json();
    const pupData = result.data;
    setPuppyArray(pupData);
    }
    catch(error) {
    console.log(`error fetching!`, error)
    }

 }

 fetchPups();
 console.log(puppyArray);

 }, []);

    return (
    <h2>Puppy Roster</h2>
        {puppyArray.map()}
    )
}






export default PuppyBowlApi;