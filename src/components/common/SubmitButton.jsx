import React from 'react';
import { Button } from '@mui/material';
import styles from './SubmitButton.module.css';

const SubmitButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onClick}
      className={styles.submitButton}
    >
      Enviar Formulário
    </Button>
  );
};

export default SubmitButton;
