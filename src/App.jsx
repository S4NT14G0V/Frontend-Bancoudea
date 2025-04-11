import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clients from '@/pages/Clients';
import Transactions from '@/pages/Transactions';
import ClientTransactions from '@/pages/clientTransactions';
import Login from '@/pages/login';
import ProtectedRoute from '@/layouts/protected'; // crealo en components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/clients"
          element={
            <ProtectedRoute>
              <Clients />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clienttransactions"
          element={
            <ProtectedRoute>
              <ClientTransactions />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App
