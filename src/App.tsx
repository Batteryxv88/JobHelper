import styles from './app.module.css';
import Home from './pages/Home';
import MachineSelect from './components/MachineSelect/MachineSelect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm/SearchForm';
import Header from './components/Header/Header';
import Color from './components/MachineSelect/Color/Color';
import BaW from './components/MachineSelect/BaW/BaW';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter basename="/JobHelper">
      <div className={styles.app}>
        <Header />
        <div className={styles.body}>
          <div className={styles.wrapper}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="select" element={<MachineSelect />} />
              <Route path="select/color" element={<Color />} />
              <Route path="select/black" element={<BaW />} />
              <Route path=":color/:search/:machine" element={<SearchForm />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// https://color.romanuke.com/czvetovaya-palitra-4447/
