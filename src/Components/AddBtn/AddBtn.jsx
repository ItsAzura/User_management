'use client';
import React, { useState } from 'react';
import styles from './AddBtn.module.css';
import CustomDialog from '@/Components/Dialog/Dialog';
const AddBtn = () => {
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
        Add
      </button>
      {/* hiện thị 1 dialog khi click vào nút Add */}
      {showDialog && <CustomDialog onClose={handleClose} />}
    </div>
  );
};

export default AddBtn;
