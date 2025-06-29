import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import ImovelForm from '../components/ImovelForm';
import Alert from '../components/Alert';

const CreateImovel = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  const handleSubmit = async (values) => {
    try {
      await api.createImovel(values);
      setAlert({ open: true, message: 'Imóvel criado com sucesso!', severity: 'success' });
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setAlert({ open: true, message: 'Erro ao criar imóvel', severity: 'error' });
    }
  };

  return (
    <div>
      <h1>Cadastrar Novo Imóvel</h1>
      <Alert {...alert} onClose={() => setAlert({ ...alert, open: false })} />
      <ImovelForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateImovel;