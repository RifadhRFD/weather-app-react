
import './App.css';

const api = {
  key: "dc75625ce33317bad2a1130af7d7b949",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search ..." />
        </div>
      </main>
    </div>
  );
}

export default App;
