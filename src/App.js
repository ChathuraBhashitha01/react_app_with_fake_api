import { Route,Routes } from 'react-router-dom';
import './App.css';
import InputForm from './page/InputForm/InputForm';
import Details from './page/Details/Details';
import NavigationBar from './component/NavigationBar/NavigationBar';

function App() {
  return (
    <div >
      <NavigationBar/>
      <Routes>
        <Route path='/' Component={InputForm}/>
        <Route path='/details' Component={Details}/>
      </Routes>
    </div>
  );
}

export default App;
