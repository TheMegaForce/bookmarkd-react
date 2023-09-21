import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="bg-red-100 h-screen flex flex-col items-center justify-center">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
