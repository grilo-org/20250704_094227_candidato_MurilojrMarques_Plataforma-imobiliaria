import ImovelList from '../components/ImovelList';
import Navbar from '../components/Navbar';

const Home = () => {
  const styles = {
    container: {
      maxWidth: '1200px', 
      margin: '0 auto',
      marginTop: '32px', 
      padding: '0 16px',
    },
  };

  return (
    <>
      <div style={styles.container}>
        <ImovelList />
      </div>
    </>
  );
};

export default Home;
