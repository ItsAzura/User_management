'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/Components/Card/Card';
import { DisplayUsers } from '@/actions/user';
import styles from './UserList.module.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await DisplayUsers();
      if (result.data) {
        setUsers(result.data);
      } else {
        console.error('An error occurred:', result.error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.UserList}>
      {users.map((user) => (
        <Card key={user._id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
