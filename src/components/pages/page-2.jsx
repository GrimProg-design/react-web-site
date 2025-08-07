import { useState } from "react";
import "../../styles/page2.css";

export default function Page2() {
  const data = ["Alex", "Afina", "Georgia", "Egor", "Ilia"];
  const [filteredNames, setFilteredNames] = useState(data);

  function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    const filtered = data.filter((name) =>
      name.toLowerCase().includes(value)
    );
    setFilteredNames(filtered);
  }

  return (
    <>
      <h3>Search from data</h3>
      <i>
        (Right now it's just a JS array, but soon it will be connected to
        Node.js!)
      </i>
      <br /> <br />
      <div>
        <label htmlFor="searcher">Enter any name:</label>
        <input type="text" id="searcher" onChange={handleSearch} />
        <ul>
          {filteredNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
