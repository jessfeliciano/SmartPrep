import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import RecipesPage from './components/recipes';
import GroceriesPage from './components/groceries';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Routes>
                <Route path="/Meal-Planner/recipes" element={<RecipesPage />} />
                <Route path="/Meal-Planner/groceries" element={<GroceriesPage />} />
                <Route
                  path="*"
                  element={<Navigate to="/Meal-Planner/recipes" replace />}
                />
          </Routes>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
