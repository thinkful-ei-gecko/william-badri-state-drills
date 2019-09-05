import React from 'react';
import './App.css';
import sectionsProp from './state-drills/Sections';
import Accordion from './state-drills/Accordion';

function App() {
  return (
    <main className='App'>
      <Accordion sections={sectionsProp}/>
    </main>
  );
}

export default App;