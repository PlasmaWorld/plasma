import React from 'react';
import styles from './modalNavbar.module.css'; // Assume you have this CSS file for styling

interface ModalProps {
    onClose: () => void; // Assuming onClose is a function that takes no arguments and returns void
    children: React.ReactNode; // For children, React.ReactNode covers anything that is a valid React child
  }
  
  const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
      <div className={styles.modalBackdrop} onClick={onClose}>
        <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
          <button className={styles.closeButton} onClick={onClose}>X</button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
