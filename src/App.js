import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ChosenPage from './components/ChosenPage';

function App() {
  return (
    <div className="appContainer">
        <Header />
        <ChosenPage />
        <Footer />
    </div>
  )
}

export default App;
