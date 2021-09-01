 import { BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
    return ( 
      <Router>
        {/* <Sidebar/> */}
      <Dashboard/>
      </Router>
    );
    }
      export default App;
