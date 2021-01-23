import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default App;
