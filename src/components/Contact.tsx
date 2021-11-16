import React from 'react';

interface IContact {
  name: string;
  email?: string;
  handleRemove: (email: string) => void;
}
const Contact = ({
  name,
  email = 'N/A',
  handleRemove,
}: IContact): JSX.Element => {
  return (
    <div className="card">
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <button onClick={() => handleRemove(email)}>Remove</button>
    </div>
  );
};

export default Contact;
