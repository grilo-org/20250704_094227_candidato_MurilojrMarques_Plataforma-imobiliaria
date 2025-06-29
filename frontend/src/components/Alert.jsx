import { useEffect } from 'react';

const Alert = ({ open, message, severity = 'info', onClose }) => {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(onClose, 6000);
      return () => clearTimeout(timer);
    }
  }, [open, onClose]);

  if (!open) return null;

  const severityColors = {
    success: '#4caf50',
    error: '#f44336',
    warning: '#ff9800',
    info: '#2196f3',
  };

  const styles = {
    container: {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: severityColors[severity] || severityColors.info,
      color: '#fff',
      padding: '12px 20px',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 9999,
      maxWidth: '90%',
      minWidth: '300px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    closeBtn: {
      marginLeft: '12px',
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      {message}
      <button style={styles.closeBtn} onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default Alert;
