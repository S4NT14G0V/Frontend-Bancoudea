import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clients from '@/pages/Clients';
import Transactions from '@/pages/Transactions';
import ClientTransactions from '@/pages/clientTransactions';
import Login from '@/pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/clienttransactions" element={<ClientTransactions/>} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
