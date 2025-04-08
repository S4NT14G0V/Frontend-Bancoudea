import { Box } from '@chakra-ui/react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Clients from '@/pages/Clients';
import Transactions from '@/pages/Transactions';
import Transfer from '@/pages/Transfer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Box>Home Page</Box>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/transfer" element={<Transfer/>} />
        <Route path="*" element={<Box>404 Not Found</Box>} />
      </Routes>
    </Router>
  )
}

export default App
