import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
import App from './routes/App.jsx'
import Dash from './routes/dash.jsx'
import Login from './routes/login.jsx';

createRoot(document.getElementById('root')).render(
  
    <StrictMode>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
            <Route index element={<Login />} />
            <Route path="dash" element={<Dash />} />
        </Routes>
      </BrowserRouter>


    </StrictMode>
  
)
