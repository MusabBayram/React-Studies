import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Mehmet",
      phone_number: 123123,
    },
    {
      fullname: "Ahmet",
      phone_number: 42564257,
    },
    {
      fullname: "Burcu",
      phone_number: 41256,
    },
    {
      fullname: "Merve",
      phone_number: 567845,
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
