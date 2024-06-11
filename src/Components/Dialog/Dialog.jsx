import React, { useState } from 'react';
import styles from './Dialog.module.css';
import { AddUser } from '@/actions/user';

const CustomDialog = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  //Hàm xử lý khi submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await AddUser({ firstName, lastName, email, address });
      if (result.error) {
        console.error('An error occurred:', result.error);
      } else {
        console.log('User added successfully:', result.message);
        onClose();
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogContent}>
        <h2>Add User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <p>First Name:</p>
            <input
              type="text"
              value={firstName} //lấy giá trị từ state
              onChange={(e) => setFirstName(e.target.value)} //lấy giá trị từ input và set vào state
              required
            />
          </label>
          <label>
            <p>Last Name:</p>
            <input
              type="text"
              value={lastName} //lấy giá trị từ state
              onChange={(e) => setLastName(e.target.value)} //lấy giá trị từ input và set vào state
              required
            />
          </label>
          <label>
            <p>Email:</p>
            <input
              type="email"
              value={email} //lấy giá trị từ state
              onChange={(e) => setEmail(e.target.value)} //lấy giá trị từ input và set vào state
              required
            />
          </label>
          <label>
            <p>Address:</p>
            <input
              type="text"
              value={address} //lấy giá trị từ state
              onChange={(e) => setAddress(e.target.value)} //lấy giá trị từ input và set vào state
              required
            />
          </label>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
        <button onClick={onClose} className={styles.closeBtn}>
          X
        </button>
      </div>
    </div>
  );
};

export default CustomDialog;
