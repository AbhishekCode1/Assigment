import logo from './logo.svg';
import './App.css';
import Counter from './ClassComponents/Counter';
import Greeting from './FuctionalComponents/Greeting';
import CallbackCounter from './CallBackProps/CallbackCounter';
import AllRoutes from './Pages/AllRoutes';
import Navbar from './Components/Navbar';
import { useContext } from 'react';
import { ThemeContext } from './Context/ContextProvider';

function App() {
  const {isLight}=useContext(ThemeContext);

  const handleNewChange = newCounter => {
    console.log('Counter changed:', newCounter);
    
    // Perform any additional actions with the new counter value
  };

  return (
    <>
  
    <Navbar/>
     <AllRoutes/>
    </>
    
  );
}

export default App;
