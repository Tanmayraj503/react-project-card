import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import ProjectCarPortfolio from './components/ProjectCarPortfolio.jsx';
import Hello from './helo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectCarPortfolio />
    <Hello />
  </StrictMode>,
)
