// src/components/UserInfo.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateName, updateEmail } from '../redux/actions';

const UserInfo = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const newName = event.target.value;
    dispatch(updateName(newName));
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    dispatch(updateEmail(newEmail));
  };

  return (
    <div>
      <h2>User Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter new name"
          value={user.name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter new email"
          value={user.email}
          onChange={handleEmailChange}
        />
      </div>
      <p>Current Values in store:</p>
      <div>
        <p>Name - {user.name}</p>
        <p>Email - {user.email}</p>
      </div>
    </div>
  );
};

export default UserInfo;

