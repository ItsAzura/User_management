import React from 'react';
import styles from './Card.module.css';

const Card = ({ user }) => {
  return (
    <div className={styles.card}>
      <h1>
        {user.firstName} ({user.lastName})
      </h1>{' '}
      {/* Display the user's first name and last name */}
      <p>{user.address}</p> {/* Display the user's address */}
      <p>{user.email}</p>
    </div>
  );
};

export default Card;
