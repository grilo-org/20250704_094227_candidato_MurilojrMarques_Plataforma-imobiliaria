import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    appBar: {
      backgroundColor: '#1976d2',
      padding: '10px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    logo: {
      color: '#fff',
      fontSize: '20px',
      fontWeight: 'bold',
      textDecoration: 'none',
    },
    navButtons: {
      display: 'flex',
      gap: '16px',
    },
    button: {
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
      textDecoration: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      transition: 'background 0.3s',
    },
    buttonHover: {
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  };

  return (
    <div style={styles.appBar}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          Plataforma Imobiliária
        </Link>
        <div style={styles.navButtons}>
          <Link
            to="/"
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Início
          </Link>
          <Link
            to="/imoveis/novo"
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            Cadastrar Imóvel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
