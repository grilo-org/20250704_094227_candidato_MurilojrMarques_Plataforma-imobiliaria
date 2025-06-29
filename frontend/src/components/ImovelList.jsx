import { useState, useEffect } from 'react';
import api from '../services/api';
import ImovelCard from './ImovelCard';

const ImovelList = () => {
  const [imoveisOriginais, setImoveisOriginais] = useState([]); 
  const [imoveis, setImoveis] = useState([]);                  
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    finalidade: '',
    valorMin: '',
    valorMax: '',
  });

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const response = await api.getImoveis();
        setImoveisOriginais(response.data);
        setImoveis(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar imóveis:', error);
        setLoading(false);
      }
    };

    fetchImoveis();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const { finalidade, valorMin, valorMax } = filters;

    const filteredImoveis = imoveisOriginais.filter((imovel) => {
      const matchesFinalidade = !finalidade || imovel.finalidade === finalidade;
      const matchesValorMin = !valorMin || imovel.valor >= parseFloat(valorMin);
      const matchesValorMax = !valorMax || imovel.valor <= parseFloat(valorMax);
      return matchesFinalidade && matchesValorMin && matchesValorMax;
    });

    setImoveis(filteredImoveis);
  };

  const clearFilters = () => {
    setFilters({ finalidade: '', valorMin: '', valorMax: '' });
    setImoveis(imoveisOriginais);
  };

  const styles = {
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '20px',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    filters: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '30px',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      minWidth: '200px',
      fontSize: '16px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    clearButton: {
      padding: '10px 20px',
      backgroundColor: '#6c757d',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    cardWrapper: {
      flex: '1 1 calc(33.333% - 20px)',
      boxSizing: 'border-box',
    },
    loadingText: {
      fontSize: '18px',
      textAlign: 'center',
      marginTop: '50px',
    },
    noResultsText: {
      fontSize: '18px',
      textAlign: 'center',
      marginTop: '50px',
      color: '#666',
    },
  };

  if (loading) return <div style={styles.loadingText}>Carregando...</div>;

  return (
    <div style={styles.container}>
      <div style={styles.title}>Lista de Imóveis</div>

      <div style={styles.filters}>
        <select
          name="finalidade"
          value={filters.finalidade}
          onChange={handleFilterChange}
          style={styles.input}
        >
          <option value="">Todos</option>
          <option value="Venda">Venda</option>
          <option value="Locação">Locação</option>
        </select>

        <input
          type="number"
          name="valorMin"
          placeholder="Valor Mínimo"
          value={filters.valorMin}
          onChange={handleFilterChange}
          style={styles.input}
          min="0"
        />

        <input
          type="number"
          name="valorMax"
          placeholder="Valor Máximo"
          value={filters.valorMax}
          onChange={handleFilterChange}
          style={styles.input}
          min="0"
        />

        <button onClick={applyFilters} style={styles.button}>
          Filtrar
        </button>

        <button onClick={clearFilters} style={styles.clearButton}>
          Limpar
        </button>
      </div>

      {imoveis.length === 0 ? (
        <div style={styles.noResultsText}>Nenhum imóvel encontrado.</div>
      ) : (
        <div style={styles.grid}>
          {imoveis.map((imovel) => (
            <div key={imovel.id} style={styles.cardWrapper}>
              <ImovelCard imovel={imovel} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImovelList;
