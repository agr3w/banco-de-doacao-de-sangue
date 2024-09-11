import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import ProgressBar from "components/common/ProgressBar";
import styles from './EligibilityForm.module.css';
import { useState } from "react";

const EligibilityForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      birthDate: '',
      gender: '',
      medicalConditions: 'no',
      medications: 'no',
      allergies: 'no',
      hasDonatedBefore: 'no',
      lastDonation: '',
      drugUse: 'no',
      smokingAlcohol: 'no',
      riskAreas: 'no',
      tattoosPiercings: 'no',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleNextStep = () => {
      if (currentStep < 5) {
        setCurrentStep(currentStep + 1);
      }
    };
  
    const handlePreviousStep = () => {
      if (currentStep > 1) {
        setCurrentStep(currentStep - 1);
      }
    };
  
    const handleSubmit = () => {
      alert('Formulário Enviado!');
      // Aqui você pode adicionar lógica para enviar os dados para um servidor ou processar as informações.
    };
  
    return (
      <div className={styles.formContainer}>
        <ProgressBar currentStep={currentStep} totalSteps={5} />
  
        {currentStep === 1 && (
          <div className={styles.step}>
            <h3>Informações Básicas</h3>
            <TextField
              fullWidth
              label="Nome Completo"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Data de Nascimento"
              name="birthDate"
              type="date"
              value={formData.birthDate}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Sexo</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <MenuItem value="">Selecione</MenuItem>
                <MenuItem value="male">Masculino</MenuItem>
                <MenuItem value="female">Feminino</MenuItem>
                <MenuItem value="other">Outro</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handleNextStep}>Próximo</Button>
          </div>
        )}
  
        {currentStep === 2 && (
          <div className={styles.step}>
            <h3>Perguntas sobre Saúde</h3>
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
            </FormControl>
            <Button variant="contained" color="primary" onClick={handlePreviousStep}>Anterior</Button>
            <Button variant="contained" color="primary" onClick={handleNextStep}>Próximo</Button>
          </div>
        )}
  
        {currentStep === 3 && (
          <div className={styles.step}>
            <h3>Perguntas sobre Histórico de Doação</h3>
            <FormControl fullWidth margin="normal">
              <InputLabel>Já Doou Sangue Antes?</InputLabel>
              <Select
                name="hasDonatedBefore"
                value={formData.hasDonatedBefore}
                onChange={handleInputChange}
              >
                <MenuItem value="no">Não</MenuItem>
                <MenuItem value="yes">Sim</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Quando Foi sua Última Doação?"
              name="lastDonation"
              type="date"
              value={formData.lastDonation}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handlePreviousStep}>Anterior</Button>
            <Button variant="contained" color="primary" onClick={handleNextStep}>Próximo</Button>
          </div>
        )}
  
        {currentStep === 4 && (
          <div className={styles.step}>
            <h3>Perguntas sobre Hábitos e Estilo de Vida</h3>
            <FormControl fullWidth margin="normal">
              <InputLabel>Você Usa Drogas Recreativas?</InputLabel>
              <Select
                name="drugUse"
                value={formData.drugUse}
                onChange={handleInputChange}
              >
                <MenuItem value="no">Não</MenuItem>
                <MenuItem value="yes">Sim</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Você Fuma ou Consome Álcool Regularmente?</InputLabel>
              <Select
                name="smokingAlcohol"
                value={formData.smokingAlcohol}
                onChange={handleInputChange}
              >
                <MenuItem value="no">Não</MenuItem>
                <MenuItem value="yes">Sim</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handlePreviousStep}>Anterior</Button>
            <Button variant="contained" color="primary" onClick={handleNextStep}>Próximo</Button>
          </div>
        )}
  
        {currentStep === 5 && (
          <div className={styles.step}>
            <h3>Questões Específicas</h3>
            <FormControl fullWidth margin="normal">
              <InputLabel>Você Esteve em Áreas de Risco para Doenças Infecciosas Recentemente?</InputLabel>
              <Select
                name="riskAreas"
                value={formData.riskAreas}
                onChange={handleInputChange}
              >
                <MenuItem value="no">Não</MenuItem>
                <MenuItem value="yes">Sim</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>Você Fez uma Tatuagem ou Piercing nos Últimos 6 Meses?</InputLabel>
              <Select
                name="tattoosPiercings"
                value={formData.tattoosPiercings}
                onChange={handleInputChange}
              >
                <MenuItem value="no">Não</MenuItem>
                <MenuItem value="yes">Sim</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" color="primary" onClick={handlePreviousStep}>Anterior</Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Enviar</Button>
          </div>
        )}
      </div>
    );
  };
  
  export default EligibilityForm;