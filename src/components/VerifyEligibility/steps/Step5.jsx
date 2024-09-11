import React from 'react';
import { Button } from '@mui/material';
import styles from './steps.module.css';

const Step5 = ({ formData, handlePreviousStep, handleSubmit }) => {
  return (
    <div className={styles.step}>
      <h3>Revisão Final</h3>
      <div className={styles.reviewContainer}>
        <p><strong>Nome:</strong> {formData.name}</p>
        <p><strong>Data de Nascimento:</strong> {formData.dob}</p>
        <p><strong>Condições Médicas:</strong> {formData.medicalConditions === 'yes' ? formData.medicalDetails : 'Nenhuma'}</p>
        <p><strong>Medicamentos Recentemente Tomados:</strong> {formData.medications === 'yes' ? formData.medicationDetails : 'Nenhum'}</p>
        <p><strong>Alergias:</strong> {formData.allergies === 'yes' ? formData.allergyDetails : 'Nenhuma'}</p>
        <p><strong>Viagens Recentes:</strong> {formData.recentTravel === 'yes' ? formData.travelDetails : 'Nenhuma'}</p>
        <p><strong>Exposições a Doenças:</strong> {formData.diseaseExposure === 'yes' ? formData.exposureDetails : 'Nenhuma'}</p>
        <p><strong>Questões Adicionais:</strong> {formData.additionalQuestions || 'Nenhuma'}</p>
      </div>
      <Button variant="contained" color="primary" onClick={handlePreviousStep}>
        Anterior
      </Button>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Enviar
      </Button>
    </div>
  );
};

export default Step5;
