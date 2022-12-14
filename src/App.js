import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/views/Home';
import AdminProductos from './components/views/producto/AdminProductos';
import CrearProducto from './components/views/producto/CrearProducto';
import EditarProducto from './components/views/producto/EditarProducto';
import Error404 from './components/views/Error404';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import DetalleProducto from './components/views/DetalleProducto';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/administrar' element={<AdminProductos></AdminProductos>}></Route>
          <Route exact path='/administrar/crear' element={<CrearProducto></CrearProducto>}></Route>
          <Route exact path='/administrar/editar/:id' element={<EditarProducto></EditarProducto>}></Route>
          <Route exact path='/administrar/producto/detalle/:id' element={<DetalleProducto></DetalleProducto>}></Route>
          <Route path='*' element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
