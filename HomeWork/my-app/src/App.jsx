import logo from './logo.svg';
import './App.css';
import 'regenerator-runtime/runtime';
import axios from 'axios';

const SPOTIFY_TESTING_URL = "https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5";

const getSpotifySearch = async () => {
  try {
    const response = await axios.get(`${SPOTIFY_TESTING_URL}`,{
      headers: {
        'Authorization': process.env.REACT_APP_OAUTH_TOKEN,
        'Accept': "application/json",
        'Content-Type': "application/json"
      }
    })
    const sampleResult = response.data.artists.items[0].id;
    console.log(`Here's an example axios GET: ${sampleResult}`);
  } catch(errors){
    console.error(errors);
  }
}

getSpotifySearch();

console.log(process.env.REACT_APP_CLIENT_ID);
console.log(process.env.REACT_APP_OAUTH_TOKEN);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
