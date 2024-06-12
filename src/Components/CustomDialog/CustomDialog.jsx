import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './CustomDialog.module.css';
import { EditUser, DisplayUsers } from '@/actions/user';
import { useRouter } from 'next/navigation';

const CustomizeDialog = ({ onClose, user }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  //Lấy thông tin user từ props và gán vào các state
  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setAddress(user.address);
  }, [user]);

  //Hàm xử lý sự kiện khi user cập nhật thông tin xong
  const handleSubmit = async (e) => {
    e.preventDefault();
    //Gọi hàm chỉnh sửa thông tin User
    const result = await EditUser({ firstName, lastName, email, address });
    //Nếu kết quả trả về thành công thì hiển thị thông báo và đóng dialog
    if (result.status === 200) {
      setMessage(result.message);
      console.log(message);
      onClose();
    } else {
      setError(result.error);
      console.error('An error occurred:', error);
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.dialogOverlay}>
      <div className={styles.dialogContent}>
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <p>First Name:</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Last Name:</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            <p>Email:</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly
            />
          </label>
          <label>
            <p>Address:</p>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
          <button type="submit" className={styles.submitBtn}>
            Save
          </button>
        </form>
        <button onClick={onClose} className={styles.closeBtn}>
          X
        </button>
      </div>
    </div>,
    document.body
  );
};

export default CustomizeDialog;
