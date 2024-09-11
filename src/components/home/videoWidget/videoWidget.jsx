import React from 'react';
import styles from './videoWidget.module.css';

const VideoWidget = () => {
  return (
    <div className={styles.videoContainer}>
      <h2 className={styles.title}>Como Funciona o Site?</h2>
      <iframe
        className={styles.video}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/seu-video-url"
        title="Vídeo Explicativo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoWidget;
