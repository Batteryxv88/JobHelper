import styles from './app.module.css';
import Home from './pages/Home';
import MachineSelect from './components/MachineSelect/MachineSelect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm/SearchForm';
import Header from './components/Header/Header';

function App() {
  
  return (
    <BrowserRouter basename='/JobHelper'>
      <div className={styles.app}>
        <Header />
        <div className={styles.wrapper}>
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="select" element={<MachineSelect />} />
            <Route path=":search/:machine" element={<SearchForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// https://color.romanuke.com/czvetovaya-palitra-4447/
