import { Routes, Route } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
import Home from './Home/Home';

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item" element={<ItemList />} />
      </Routes>
    </div>
    // <main>
    //   <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/item" component={itemList} />
    //     {/* <Route path="/drinks" component={() => (<ItemCard data={data[0]} />)} /> */}
    //   </Routes>
    // </main>
  );
}
export default Main;
