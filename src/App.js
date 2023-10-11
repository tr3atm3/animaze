import { useState } from "react";
import "./App.css";

const animeList = [
  { id: 1, name: "Fullmetal Alchemist", rating: 8.72 },
  { id: 2, name: "Death Note", rating: 8.86 },
  { id: 3, name: "Cowboy Bebop", rating: 8.93 },
  { id: 4, name: "Spirited Away", rating: 8.96 },
  { id: 5, name: "Princess Mononoke", rating: 8.93 },
  { id: 6, name: " Melancholy of Haruhi Suzumiya", rating: 8.56 },
  { id: 7, name: "Elfen Lied ", rating: 8.29 },
  { id: 8, name: "Neon Genesis Evangelion", rating: 8.32 },
  { id: 9, name: "Lelouch of the Rebellion", rating: 8.85 },
  { id: 10, name: "Bleach", rating: 7.94 },
];

function App() {
  const [list, setList] = useState(animeList);
  const [watched, setWatchedList] = useState([]);

  return (
    <div className="appContainer">
      <List list={list} setList={setList} setWatchedList={setWatchedList} />
      <Watched watched={watched} />
    </div>
  );
}

export default App;

function List({ list, setList, setWatchedList }) {
  return (
    <div className="list">
      <h2>List (rating)</h2>
      <ul>
        {list.map((item) => (
          <ListItem
            anime={item}
            key={item.id}
            setList={setList}
            setWatchedList={setWatchedList}
          />
        ))}
      </ul>
    </div>
  );
}

function ListItem({ anime, setList, setWatchedList }) {
  return (
    <li className="listItem">
      <p className="name">{anime.name}</p>
      <p className="rating">{anime.rating}</p>
      <button
        onClick={() => {
          setList((list) => list.filter((item) => item.id !== anime.id));
          setWatchedList((cur) => [...cur, anime]);
        }}
      >
        ✔
      </button>
    </li>
  );
}

function Watched({ watched }) {
  return (
    <div className="list">
      <h2>Watched</h2>
      <ul>
        {watched.map((item) => (
          <WatchItem anime={item} />
        ))}
      </ul>
    </div>
  );
}

function WatchItem({ anime }) {
  return (
    <li>
      <p>{anime.name}</p>
    </li>
  );
}
