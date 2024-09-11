import React from 'react';
import styles from './verifyEligibility.module.css'
import Header from 'components/common/header';
import Footer from 'components/common/footer';
import EligibilityForm from 'components/VerifyEligibility/EligibilityForm';


const VerifyEligibility = () => {
  return (
    <div className={styles.eligibilityContainer}>
      <Header />
      <h2 className={styles.pageTitle}>Verifique sua Elegibilidade para Doação de Sangue</h2>
      <EligibilityForm />
      <Footer />
    </div>
  );
};

export default VerifyEligibility;
