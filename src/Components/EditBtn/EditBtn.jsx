'use client';
import React, { useState } from 'react';
import styles from './Edit.module.css';
import CustomizeDialog from '@/Components/CustomDialog/CustomDialog';

const EditBtn = ({ user }) => {
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <button className={styles.btn} onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1l1-4Z" />
          </g>
        </svg>
      </button>
      {showDialog && (
        <CustomizeDialog
          onClose={handleClose}
          user={user} //Gửi thông tin user vào CustomizeDialog
        />
      )}
    </div>
  );
};

export default EditBtn;
