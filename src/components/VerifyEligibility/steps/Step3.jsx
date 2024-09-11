import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import styles from './steps.module.css';

const Step3 = ({ formData, handleInputChange, handleNextStep, handlePreviousStep }) => {
  return (
    <div className={styles.step}>
      <h3>Viagens e Exposições</h3>
      <FormControl fullWidth margin="normal">
        <InputLabel>Viagens Recentes</InputLabel>
        <Select
          name="recentTravel"
          value={formData.recentTravel}
          onChange={handleInputChange}
        >
          <MenuItem value="no">Nenhuma</MenuItem>
          <MenuItem value="yes">Sim</MenuItem>
        </Select>
        {formData.recentTravel === 'yes' && (
          <TextField
            fullWidth
            label="Detalhes das Viagens"
            name="travelDetails"
            value={formData.travelDetails}
            onChange={handleInputChange}
            margin="normal"
          />
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Exposições a Doenças</InputLabel>
        <Select
          name="diseaseExposure"
          value={formData.diseaseExposure}
          onChange={handleInputChange}
        >
          <MenuItem value="no">Nenhuma</MenuItem>
          <MenuItem value="yes">Sim</MenuItem>
        </Select>
        {formData.diseaseExposure === 'yes' && (
          <TextField
            fullWidth
            label="Detalhes das Exposições"
            name="exposureDetails"
            value={formData.exposureDetails}
            onChange={handleInputChange}
            margin="normal"
          />
        )}
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

export default Step3;
