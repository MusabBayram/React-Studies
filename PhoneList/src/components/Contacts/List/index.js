import { useState } from "react";
import ".././styles.css";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  console.log("filter", filtered);

  return (
    <div>
      <h1>Contacts</h1>
      <br />
      <input
        placeholder="Filter Contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
