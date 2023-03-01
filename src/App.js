import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { HOME_ROUTE, ERROR_ROUTE,NOT_FOUND_ROUTE } from "./constants/routes";
import Home from "./pages/HomePage/index";
import ErrorPage from './pages/ErrorPage/index';
import NotFoundPage from './pages/NotFoundPage/index'
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ERROR_ROUTE} element={<ErrorPage />} />
          <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;