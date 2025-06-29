import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../services/api';

const ImovelDetails = () => {
  const { id } = useParams();
  const [imovel, setImovel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImovel = async () => {
      try {
        const response = await api.getImovel(id);
        setImovel(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar imóvel:', error);
        setLoading(false);
      }
    };

    fetchImovel();
  }, [id]);

  const styles = {
    card: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '24px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    chip: {
      display: 'inline-block',
      padding: '6px 12px',
      borderRadius: '16px',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: imovel?.finalidade === 'Venda' ? '#1976d2' : '#9c27b0',
      marginBottom: '20px',
    },
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '16px',
    },
    column: {
      flex: '1 1 30%',
      minWidth: '200px',
    },
    text: {
      fontSize: '16px',
      color: '#444',
    },
    subtitle: {
      fontSize: '18px',
      marginTop: '20px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '12px',
      marginTop: '32px',
    },
    buttonPrimary: {
      padding: '10px 16px',
      backgroundColor: '#1976d2',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    buttonSecondary: {
      padding: '10px 16px',
      backgroundColor: '#fff',
      color: '#1976d2',
      border: '1px solid #1976d2',
      borderRadius: '4px',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    loadingText: {
      textAlign: 'center',
      marginTop: '40px',
      fontSize: '18px',
    },
  };

  if (loading) return <div style={styles.loadingText}>Carregando...</div>;
  if (!imovel) return <div style={styles.loadingText}>Imóvel não encontrado</div>;

  return (
    <div style={styles.card}>
      <div style={styles.title}>{imovel.titulo}</div>
      <div style={styles.chip}>{imovel.finalidade}</div>

      <div style={styles.row}>
        <div style={styles.column}>
          <strong style={styles.text}>
            Valor: R$ {imovel.valor.toLocaleString('pt-BR')}
          </strong>
        </div>
        <div style={styles.column}>
          <strong style={styles.text}>Corretor: {imovel.corretor}</strong>
        </div>
      </div>

      <div style={{ ...styles.text, marginBottom: '20px' }}>
        {imovel.descricao}
      </div>

      <div style={styles.row}>
        <div style={styles.column}>Quartos: {imovel.quartos}</div>
        <div style={styles.column}>Banheiros: {imovel.banheiros}</div>
        <div style={styles.column}>Garagem: {imovel.garagem ? 'Sim' : 'Não'}</div>
      </div>

      <div style={styles.subtitle}>Endereço: {imovel.endereco}</div>

      <div style={styles.buttonGroup}>
        <Link to={`/imoveis/${id}/editar`} style={styles.buttonPrimary}>
          Editar
        </Link>
        <Link to="/" style={styles.buttonSecondary}>
          Voltar
        </Link>
      </div>
    </div>
  );
};

export default ImovelDetails;
