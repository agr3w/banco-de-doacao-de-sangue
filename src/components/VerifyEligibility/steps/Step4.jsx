import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import styles from './steps.module.css';

const Step4 = ({ formData, handleInputChange, handleNextStep, handlePreviousStep }) => {
  return (
    <div className={styles.step}>
      <h3>Perguntas sobre Drogas e Viagens</h3>
      <FormControl fullWidth margin="normal">
        <InputLabel>Uso de Drogas</InputLabel>
        <Select
          name="drugUse"
          value={formData.drugUse}
          onChange={handleInputChange}
        >
          <MenuItem value="no">Nenhum</MenuItem>
          <MenuItem value="yes">Sim</MenuItem>
        </Select>
        {formData.drugUse === 'yes' && (
          <TextField
            fullWidth
            label="Detalhes sobre Uso de Drogas"
            name="drugDetails"
            value={formData.drugDetails}
            onChange={handleInputChange}
            margin="normal"
          />
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <TextField
          fullWidth
          label="Questões Adicionais"
          name="additionalQuestions"
          value={formData.additionalQuestions}
          onChange={handleInputChange}
          margin="normal"
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={handlePreviousStep}>
        Anterior
      </Button>
      <Button variant="contained" color="primary" onClick={handleNextStep}>
        Próximo
      </Button>
    </div>
  );
};

export default Step4;
