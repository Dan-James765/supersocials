import React from 'react';
import './App.css';
import Feed from './Components/Feed';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
    
    <Header/> 
    
    <div className="flex">
    <Sidebar/> 
    <Feed/> 
    </div>

    

    
      
    </>
  );
}

export default App;
