import { ThemeProvider } from './context/ThemeContext';
import React from  'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
