import logo from './logo.svg';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './styles/App.scss';

function App() {
  return (    
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
