import React from "react";

function List({ contacts }) {
  return (
    <div>
      Contects List
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
