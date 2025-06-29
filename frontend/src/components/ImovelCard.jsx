import React from 'react';

const ImovelCard = ({ imovel, onEdit, onDelete }) => {
  const styles = {
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '8px',
    },
    endereco: {
      color: '#666',
      marginBottom: '12px',
    },
    chip: {
      display: 'inline-block',
      padding: '4px 10px',
      borderRadius: '16px',
      fontSize: '12px',
      fontWeight: '600',
      color: '#fff',
      backgroundColor: imovel.finalidade.toLowerCase() === 'venda' ? '#1976d2' : '#9c27b0',
      userSelect: 'none',
    },
    row: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '8px',
      marginBottom: '12px',
      gap: '12px',
      flexWrap: 'wrap',
    },
    iconText: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      color: '#333',
    },
    iconEmoji: {
      marginRight: '4px',
      fontSize: '16px',
      userSelect: 'none',
    },
    descricao: {
      marginBottom: '12px',
      fontSize: '14px',
      color: '#444',
    },
    corretor: {
      fontSize: '12px',
      color: '#999',
      marginBottom: '12px',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '8px',
    },
    button: {
      padding: '6px 12px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #1976d2',
      backgroundColor: '#fff',
      color: '#1976d2',
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'background-color 0.3s',
    },
    buttonDelete: {
      border: '1px solid #d32f2f',
      color: '#d32f2f',
    },
    buttonHover: {
      backgroundColor: '#1976d2',
      color: '#fff',
    },
  };

  // Para simular hover inline, vamos usar estado local:
  const [hoveredButton, setHoveredButton] = React.useState(null);

  return (
    <div style={styles.card}>
      <div style={styles.title}>{imovel.titulo}</div>
      <div style={styles.endereco}>{imovel.endereco}</div>

      <div style={styles.row}>
        <span style={styles.chip}>
          {imovel.finalidade.toLowerCase() === 'venda' ? 'Venda' : 'Locação'}
        </span>

        <div style={styles.iconText}>
          <span style={styles.iconEmoji}>💰</span>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(imovel.valor)}
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.iconText}>
          <span style={styles.iconEmoji}>🛏️</span>
          {imovel.quartos}
        </div>
        <div style={styles.iconText}>
          <span style={styles.iconEmoji}>🛁</span>
          {imovel.banheiros}
        </div>
        {imovel.garagem && (
          <div style={styles.iconText}>
            <span style={styles.iconEmoji}>🚗</span>
            Garagem
          </div>
        )}
      </div>

      <div style={styles.descricao}>{imovel.descricao}</div>

      <div style={styles.corretor}>Corretor: {imovel.corretor}</div>

      <div style={styles.buttonsContainer}>
        <button
          style={{
            ...styles.button,
            ...(hoveredButton === 'edit' ? styles.buttonHover : {}),
          }}
          onClick={() => onEdit && onEdit(imovel)}
          onMouseEnter={() => setHoveredButton('edit')}
          onMouseLeave={() => setHoveredButton(null)}
          type="button"
        >
          Editar
        </button>

        <button
          style={{
            ...styles.button,
            ...styles.buttonDelete,
            ...(hoveredButton === 'delete' ? { backgroundColor: '#d32f2f', color: '#fff' } : {}),
          }}
          onClick={() => onDelete && onDelete(imovel.id)}
          onMouseEnter={() => setHoveredButton('delete')}
          onMouseLeave={() => setHoveredButton(null)}
          type="button"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ImovelCard;
