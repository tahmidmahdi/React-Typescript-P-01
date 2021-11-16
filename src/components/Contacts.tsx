import React, {useState} from 'react';
import Contact from './Contact';
interface IContact {
  name: string;
  email?: string;
}
const Contacts = () => {
  const [contact, setContact] = useState<IContact>({} as IContact);
  const [contactList, setContactList] = useState<IContact[]>([]);
  console.log(contact);

  const onClick = () => {
    setContactList([...contactList, contact]);
    setContact({
      name: '',
      email: '',
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact({...contact, [e.target.name]: e.target.value});

  const handleRemove = (email: string) => {
    const newContactList = contactList.filter((c) => c.email !== email);
    setContactList(newContactList);
  };
  console.log(contactList);
  return (
    <div>
      <h1> Contact list</h1>
      <div className="form">
        <input
          value={contact.name}
          name="name"
          placeholder="Contract Name"
          type="text"
          onChange={onChange}
        />
        <input
          value={contact.email}
          name="email"
          placeholder="Contract Email"
          type="text"
          onChange={onChange}
        />
        <button onClick={onClick}>Add</button>
      </div>
      {contactList.map((con) => (
        <Contact
          name={con.name}
          email={con.email}
          key={con.name}
          handleRemove={handleRemove}
        />
      ))}
    </div>
  );
};

export default Contacts;
