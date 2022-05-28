import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Gallery from './routes/gallery/gallery.component';
import Menu from './routes/menu/menu.component';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/galerie' element={<Gallery />} />
        <Route path='/menu' element={<Menu />} />
      </Route>
    </Routes>
  )
}

export default App;
