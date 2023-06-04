import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from './pages/ProductList';
import ProductAdd from "./pages/ProductAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<ProductList />} />
        <Route exact path='/addproduct' element={<ProductAdd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
