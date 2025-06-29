import { useState, useEffect } from 'react';
import api from '../services/api';
import ImovelCard from './ImovelCard';

const ImovelList = () => {
  const [imoveisOriginais, setImoveisOriginais] = useState([]);
  const [imoveis, setImoveis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    finalidade: '',
    valorMin: '',
    valorMax: '',
  });

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await api.getImoveis();

        let imoveisData = [];

        if (Array.isArray(response)) {
          imoveisData = response;
        } else if (Array.isArray(response?.data)) {
          imoveisData = response.data;
        } else if (Array.isArray(response?.data?.data)) {
          imoveisData = response.data.data;
        } else {
          console.error('Estrutura de dados não reconhecida:', response);
          throw new Error('Formato de dados não suportado');
        }

        if (!Array.isArray(imoveisData)) {
          throw new Error('Formato de dados inválido: esperado um array');
        }

        console.log('Imóveis carregados:', imoveisData);

        setImoveisOriginais(imoveisData);
        setImoveis(imoveisData);
      } catch (err) {
        console.error('Erro ao buscar imóveis:', err);
        setError(`Erro ao carregar imóveis: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchImoveis();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleDeleteSuccess = (id) => {
    setImoveis(imoveis.filter(imovel => imovel.id !== id));
  };

  const applyFilters = () => {
    const { finalidade, valorMin, valorMax } = filters;
    const min = parseFloat(valorMin);
    const max = parseFloat(valorMax);

    console.log('Filtros aplicados:', filters);

    const filteredImoveis = imoveisOriginais.filter(({ valor, finalidade: f }) => {
      const v = Number(valor);

      const removerAcentos = (str) =>
        str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');


      const matchesFinalidade =
        !finalidade || removerAcentos(f?.toLowerCase()) === removerAcentos(finalidade.toLowerCase())

      const matchesValorMin = !valorMin || v >= min;
      const matchesValorMax = !valorMax || v <= max;

      return matchesFinalidade && matchesValorMin && matchesValorMax;
    });

    console.log('Imóveis após filtro:', filteredImoveis);

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
      color: '#2c3e50',
    },
    filters: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      marginBottom: '30px',
      alignItems: 'center',
    },
    input: {
      padding: '10px 15px',
      border: '1px solid #ddd',
      borderRadius: '6px',
      width: '100%',
      minWidth: '200px',
      fontSize: '16px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    clearButton: {
      padding: '10px 20px',
      backgroundColor: '#95a5a6',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '25px',
    },
    loadingText: {
      fontSize: '20px',
      textAlign: 'center',
      marginTop: '50px',
      color: '#7f8c8d',
    },
    noResultsText: {
      fontSize: '20px',
      textAlign: 'center',
      marginTop: '50px',
      color: '#95a5a6',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
    },
    errorText: {
      fontSize: '20px',
      textAlign: 'center',
      marginTop: '50px',
      color: '#e74c3c',
      padding: '20px',
      backgroundColor: '#fde8e8',
      borderRadius: '8px',
    },
  };

  if (loading) return <div style={styles.loadingText}>Carregando imóveis...</div>;
  if (error) return <div style={styles.errorText}>{error}</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Lista de Imóveis</h1>

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

        <button
          onClick={applyFilters}
          style={styles.button}
        >
          Filtrar
        </button>

        <button
          onClick={clearFilters}
          style={styles.clearButton}
        >
          Limpar
        </button>
      </div>

      {!Array.isArray(imoveis) ? (
        <div style={styles.errorText}>
          Erro: Os dados recebidos não estão no formato esperado.
          <div style={{ fontSize: '14px', marginTop: '10px' }}>
            Por favor, verifique a estrutura da API.
          </div>
        </div>
      ) : imoveis.length === 0 ? (
        <div style={styles.noResultsText}>
          Nenhum imóvel encontrado com os critérios atuais.
          <div style={{ fontSize: '14px', marginTop: '10px' }}>
            Tente ajustar os filtros ou verifique a conexão com o servidor.
          </div>
        </div>
      ) : (
        <div style={styles.grid}>
          {imoveis.map((imovel) => (
            <ImovelCard
              key={imovel.id}
              imovel={imovel}
              style={{ height: '100%' }}
              onDeleteSuccess={handleDeleteSuccess}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImovelList;
