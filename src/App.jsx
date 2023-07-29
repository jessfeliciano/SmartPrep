import { BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom';
import RecipesPage from './components/recipes';
import GroceriesPage from './components/groceries';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/groceries">Groceries</Link>
          </li>
        </ul>
      </nav>
      <AppProvider>
        <Routes>
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/groceries" element={<GroceriesPage />} />
            <Route
              path="*"
              element={<Navigate to="/recipes" replace />}
            />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
