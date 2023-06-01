import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Shared-Page/Footer/Footer';
import Header from './components/Shared-Page/Header/Header';

function App() {

  return (
    <div className='all-container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
