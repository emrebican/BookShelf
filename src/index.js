import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BookProvider } from './Context/BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookProvider>
    <App />
  </BookProvider>
);

