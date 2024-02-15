import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { default as addItem } from './components/AddItem';
import Body from './components/Body';
import EditItem from './components/EditItem';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemView from './components/ItemView';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter> 
        <Header/>
        <Routes>
            <Route Component={Body} path='/'/>
            <Route Component={addItem} path='/add-item/'/>
            <Route Component={ItemView} path='/item/:id/'/>
            <Route Component={EditItem} path='/update/:id/'/>
        </Routes>
        
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
