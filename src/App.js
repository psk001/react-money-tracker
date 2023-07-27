import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/common/AppRouter';

function App() {
  return (
    <BrowserRouter className="App">
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
