import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;
