import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import ImovelForm from '../components/ImovelForm';
import Alert from '../components/Alert';

const EditImovel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imovel, setImovel] = useState(null);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const fetchImovel = async () => {
      try {
        const response = await api.getImovel(id);
        setImovel(response.data);
      } catch (error) {
        setAlert({ open: true, message: 'Erro ao carregar imóvel', severity: 'error' });
      }
    };

    fetchImovel();
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      await api.updateImovel(id, values);
      setAlert({ open: true, message: 'Imóvel atualizado com sucesso!', severity: 'success' });
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setAlert({ open: true, message: 'Erro ao atualizar imóvel', severity: 'error' });
    }
  };

  if (!imovel) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Editar Imóvel</h1>
      <Alert {...alert} onClose={() => setAlert({ ...alert, open: false })} />
      <ImovelForm initialValues={imovel} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditImovel;