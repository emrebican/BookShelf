import './css/App.css';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useBookContext } from './Context/BookContext';

// MUI 
import { ThemeProvider, createTheme } from '@mui/material';
import { indigo, red } from '@mui/material/colors';

// Components
import Navbar from './Components/Navbar';
import Books from './Pages/Books';
import CreateBook from './Pages/CreateBook';
import DrawerComp from './Components/DrawerComp';
import NotFoundPage from './Pages/NotFoundPage';
import ChartBooks from './Pages/ChartBooks';

// Routes
import CategoryRoute from './Routes/CategoryRoute';
import RatingRoute from './Routes/RatingRoute';

// Theme
const theme = createTheme({
  palette: {
    secondary: indigo,
    error: red,
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

function App() {

  const { themeColor } = useBookContext();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='main-page'
          style={{
            backgroundColor: themeColor ? "#212121" : "",
          }}
        >
          <Navbar />
          <DrawerComp />
          <section>
            <Routes>
              <Route path="/" element={<Books />} />
              <Route path="create" element={<CreateBook />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="graphic" element={< ChartBooks />}>
                <Route path='category' element={<CategoryRoute />} />
                <Route path='rating' element={<RatingRoute />} />
              </Route>
            </Routes>
          </section>
        </motion.div>
      </Router>
    </ThemeProvider>
  )
}

export default App;
