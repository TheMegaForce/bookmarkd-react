import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='bg-red-100 h-screen flex items-center justify-center'>
        <Outlet />
    </div>
  );
}

export default App;
