import React from 'react';
import { TextField, Button } from '@mui/material';
import styles from './steps.module.css';

const Step1 = ({ formData, handleInputChange, handleNextStep }) => {
  return (
    <div className={styles.step}>
      <h3>Informações Básicas</h3>
      <TextField
        label="Nome Completo"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Data de Nascimento"
        name="dob"
        type="date"
        value={formData.dob}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Número do Documento"
        name="documentNumber"
        value={formData.documentNumber}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleNextStep}>
        Próximo
      </Button>
    </div>
  );
};

export default Step1;
