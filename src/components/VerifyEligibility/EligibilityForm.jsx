import ProgressBar from "components/common/ProgressBar";
import styles from './EligibilityForm.module.css';
import { useState } from "react";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

const EligibilityForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      name: '',
      birthDate: '',
      gender: '',
      medicalConditions: 'no',
      medicalDetails: '',
      medications: 'no',
      medicationDetails: '',
      allergies: 'no',
      allergyDetails: '',
      hasDonatedBefore: 'no',
      lastDonation: '',
      drugUse: 'no',
      smokingAlcohol: 'no',
      riskAreas: 'no',
      tattoosPiercings: 'no',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleNextStep = () => {
      setStep((prev) => prev + 1);
    };
  
    const handlePreviousStep = () => {
      setStep((prev) => prev - 1);
    };
  
    const handleSubmit = () => {
      // Aqui você pode adicionar lógica para enviar os dados do formulário
      alert('Formulário enviado com sucesso!');
    };
  
    return (
      <div className={styles.formContainer}>
        <ProgressBar currentStep={step} totalSteps={5} />
        {step === 1 && <Step1 formData={formData} handleInputChange={handleInputChange} handleNextStep={handleNextStep} />}
        {step === 2 && <Step2 formData={formData} handleInputChange={handleInputChange} handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
        {step === 3 && <Step3 formData={formData} handleInputChange={handleInputChange} handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
        {step === 4 && <Step4 formData={formData} handleInputChange={handleInputChange} handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />}
        {step === 5 && <Step5 formData={formData} handleInputChange={handleInputChange} handlePreviousStep={handlePreviousStep} handleSubmit={handleSubmit} />}
      </div>
    );
  };
  
  export default EligibilityForm;