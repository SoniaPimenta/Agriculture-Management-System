import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Dashboard from './dashboard';
function App() {
  return (
    <div className="App"> 
      <div className="login">
        
          <Login/>
      </div>
      <div className='Dashboard'>
          <Dashboard/>
          </div>
    </div>
  );
}

export default App;
