import NavigationBar from './components/Navigation/NavigationBar';
import { BrowserRouter, Routes } from 'react-router-dom';
import routes, { renderRoutes } from 'src/config/routes';

function App() {
  return (
    <BrowserRouter basename={'preflop-range-solver'}>
      <NavigationBar />
      <Routes>{renderRoutes(routes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
