import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Header />
      <Outlet />

      <h2> Footer</h2>
    </div>
  );
}

export default App;
