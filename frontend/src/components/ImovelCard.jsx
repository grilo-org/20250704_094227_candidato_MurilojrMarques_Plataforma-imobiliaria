import React from 'react';
import api from '../services/api';
import ImovelForm from './ImovelForm'; 

const ImovelCard = ({ imovel, style, onDeleteSuccess, onUpdateSuccess }) => {
  const [hoveredButton, setHoveredButton] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleDelete = async () => {
  const confirmDelete = window.confirm('Tem certeza que deseja excluir este imóvel? Esta ação não pode ser desfeita.');
  if (!confirmDelete) return;

  try {
    await api.deleteImovel(imovel.id);
    if (onDeleteSuccess) onDeleteSuccess(imovel.id);
  } catch (error) {
    console.error('Erro ao excluir imóvel:', error);
    alert('Ocorreu um erro ao excluir o imóvel.');
  }
};

  const handleUpdateSuccess = (updatedImovel) => {
    setIsEditing(false);
    if (onUpdateSuccess) onUpdateSuccess(updatedImovel);
  };

  const styles = {
    card: {
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: '380px',
      transition: 'box-shadow 0.3s ease',
      ...style,
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '8px',
      color: '#222',
    },
    endereco: {
      color: '#666',
      marginBottom: '12px',
      fontSize: '14px',
    },
    chip: {
      display: 'inline-block',
      padding: '4px 12px',
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
      margin: '8px 0',
      gap: '12px',
      flexWrap: 'wrap',
    },
    detailItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      color: '#555',
    },
    detailIcon: {
      marginRight: '6px',
      color: '#1976d2',
      fontSize: '14px',
    },
    descricao: {
      margin: '12px 0',
      fontSize: '14px',
      color: '#444',
      flexGrow: 1,
      lineHeight: '1.5',
    },
    corretor: {
      fontSize: '13px',
      color: '#777',
      marginBottom: '12px',
    },
    buttonsContainer: {
      display: 'flex',
      gap: '10px',
      marginTop: 'auto',
    },
    button: {
      padding: '8px 16px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #1976d2',
      backgroundColor: '#fff',
      color: '#1976d2',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonDelete: {
      border: '1px solid #d32f2f',
      color: '#d32f2f',
    },
    valor: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2e7d32',
    },
    divider: {
      height: '1px',
      backgroundColor: '#f0f0f0',
      margin: '12px 0',
    },
    sectionTitle: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#333',
      margin: '8px 0 4px 0',
    }
  };

  if (isEditing) {
    return (
      <div style={{ ...styles.card, padding: '20px' }}>
        <ImovelForm 
          imovel={imovel} 
          onSubmitSuccess={handleUpdateSuccess}
          onCancel={() => setIsEditing(false)}
        />
      </div>
    );
  }

  return (
    <div style={styles.card}>
      <div style={styles.title}>{imovel.titulo}</div>
      <div style={styles.endereco}>{imovel.endereco}</div>

      <div style={styles.divider} />

      <div style={styles.row}>
        <span style={styles.chip}>
          {imovel.finalidade.toLowerCase() === 'venda' ? 'Venda' : 'Locação'}
        </span>
        <div style={styles.valor}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(imovel.valor)}
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.detailItem}>
          <span style={styles.detailIcon}>•</span>
          {imovel.quartos} {imovel.quartos === 1 ? 'Quarto' : 'Quartos'}
        </div>
        <div style={styles.detailItem}>
          <span style={styles.detailIcon}>•</span>
          {imovel.banheiros} {imovel.banheiros === 1 ? 'Banheiro' : 'Banheiros'}
        </div>
        {imovel.garagem && (
          <div style={styles.detailItem}>
            <span style={styles.detailIcon}>•</span>
            Garagem
          </div>
        )}
      </div>

      <div style={styles.sectionTitle}>Descrição</div>
      <div style={styles.descricao}>
        {imovel.descricao || 'Nenhuma descrição fornecida.'}
      </div>

      <div style={styles.corretor}>Responsável: {imovel.corretor}</div>

      <div style={styles.buttonsContainer}>
        <button
          style={{
            ...styles.button,
            ...(hoveredButton === 'edit' && {
              backgroundColor: '#1976d2',
              color: '#fff'
            }),
          }}
          onMouseEnter={() => setHoveredButton('edit')}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => setIsEditing(true)}
          type="button"
        >
          Editar
        </button>

        <button
          style={{
            ...styles.button,
            ...styles.buttonDelete,
            ...(hoveredButton === 'delete' && {
              backgroundColor: '#d32f2f',
              color: '#fff'
            }),
          }}
          onClick={handleDelete}
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