import React  from 'react';
import YaziListesi from "./components/Dashboard/YaziListesi"
import YaziDetay from "./components/Post/YaziDetay";
import {Route,BrowserRouter,Switch} from "react-router-dom";
import YaziEkle from './components/Post/YaziEkle';
import Navbar from './components/Dashboard/Navbar';
function App() {
  
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <div className="mt-5 col-12 col-sm-8 col-md-6  offset-sm-2 offset-md-3 ">
        <Route exact path="/" component={YaziListesi}/>
        <Route path="/post/:id" component={YaziDetay}/>
        <Route path="/yaziekle" component={YaziEkle}/>
        </div>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
