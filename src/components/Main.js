import { Routes, Route } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import Home from './Home/Home';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<ItemList />} />
      </Routes>
    </main>
  );
}
export default Main;
