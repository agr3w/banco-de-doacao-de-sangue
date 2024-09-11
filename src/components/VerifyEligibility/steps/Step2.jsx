import React from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import styles from './steps.module.css';

const Step2 = ({ formData, handleInputChange, handleNextStep, handlePreviousStep }) => {
  return (
    <div className={styles.step}>
      <h3>Condições de Saúde e Medicamentos</h3>
      <FormControl fullWidth margin="normal">
        <InputLabel>Condições Médicas</InputLabel>
        <Select
          name="medicalConditions"
          value={formData.medicalConditions}
          onChange={handleInputChange}
        >
          <MenuItem value="no">Nenhuma</MenuItem>
          <MenuItem value="yes">Sim</MenuItem>
        </Select>
        {formData.medicalConditions === 'yes' && (
          <TextField
            fullWidth
            label="Detalhes das Condições Médicas"
            name="medicalDetails"
            value={formData.medicalDetails}
            onChange={handleInputChange}
            margin="normal"
          />
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Medicamentos Recentemente Tomados</InputLabel>
        <Select
          name="medications"
          value={formData.medications}
          onChange={handleInputChange}
        >
          <MenuItem value="no">Nenhum</MenuItem>
          <MenuItem value="yes">Sim</MenuItem>
        </Select>
        {formData.medications === 'yes' && (
          <TextField
            fullWidth
            label="Detalhes dos Medicamentos"
            name="medicationDetails"
            value={formData.medicationDetails}
            onChange={handleInputChange}
            margin="normal"
          />
        )}
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Alergias</InputLabel>
        <Select
          name="allergies"
          value={formData.allergies}
          onChange={handleInputChange}
        >
          <MenuItem value="no">Nenhuma</MenuItem>
          <MenuItem value="yes">Sim</MenuItem>
        </Select>
        {formData.allergies === 'yes' && (
          <TextField
            fullWidth
            label="Detalhes das Alergias"
            name="allergyDetails"
            value={formData.allergyDetails}
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

export default Step2;
