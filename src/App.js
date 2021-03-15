import './App.css';
import Routes from './router'

// Função principal do APP
function App() {
  return (
    
    <div className="container">
      <div className="header"></div>
      
      {/* Rotas de navegação do app */}
      <Routes/>

    </div>
  );
}

export default App;
