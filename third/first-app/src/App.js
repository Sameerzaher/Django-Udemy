import logo from './logo.svg';
import './App.css';
import { Header } from './components/header'
import Footer from './components/footer'
import Numbers from './components/numbers'
import {Route, BrowserRouter } from 'react-router-dom'
function createAlert(){
  alert('hello you clicked me')
}

function App() {
  return (
    <div className="App">
      <Numbers/>
    </div>
  );
}

export default App;
