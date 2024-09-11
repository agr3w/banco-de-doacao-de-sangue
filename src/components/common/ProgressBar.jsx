import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <Box className={styles.progressContainer}>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Passo {currentStep} de {totalSteps}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: 'var(--progress-background)',
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'var(--progress-bar)',
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
