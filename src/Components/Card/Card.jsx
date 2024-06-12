import React from 'react';
import styles from './Card.module.css';
import EditBtn from '@/Components/EditBtn/EditBtn';
import DeleteBtn from '@/Components/DeleteBtn/DeleteBtn';

const Card = ({ user }) => {
  return (
    <div className={styles.card}>
      <h1>
        {user.firstName} ({user.lastName})
      </h1>
      <p>{user.address}</p>
      <p>{user.email}</p>
      <div className={styles.groupBtn}>
        <EditBtn
          user={user} //Gửi thông tin user vào EditBtn
        />
        <DeleteBtn />
      </div>
    </div>
  );
};

export default Card;
