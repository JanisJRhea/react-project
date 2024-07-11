import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import Change from './components/useeffect';
import Greet from './components/prop';
import Counter from './components/state';
import Greeting from'./components/class';
import MyComponent from'./components/event';
import ConditionalRendering from './components/conditional';
import ConditionalRenderingIf from'./components/conditionalif';
import Nomatch from'./components/nomatch';
import ConditionalSwitch from './components/switch';
import Navbar from'./components/navbar';
import Home from './components/home';
import About from './components/about';
import Products from'./components/product';
import FeaturedProduct from './components/featuredproduct';
import NewProduct from './components/newproduct';



const App=() =>{
 return(
<Router>
<nav>
  <ul>
    <li>
          <Link to="/">Change</Link>
          </li>
          <li>
            <Link to="/prop">Greet</Link>
            </li>
          <li>
            <Link to="/state">Counter</Link>
          </li> 
          <li>
            <Link to="/class">Greeting</Link>
          </li>
          <li>
            <Link to="/event">MyComponent</Link>
          </li>
          <li>
            <Link to="/conditional">ConditionalRendering</Link>
          </li>
          <li>
            <Link to="/conditionalif">ConditionalRenderingIf</Link>
          </li>
          <li>
            <Link to="/switch">ConditionalSwitch</Link>
          </li>
          <li>
            <Link to="/navbar">Navbar</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
          
          
        </ul>
        
        </nav>
          <Routes>
          
          
            <Route  path="/" element={<Change/>}/>
            <Route path="/prop" element={<Greet/>}/>
            <Route path="/state" element={<Counter/>}/>
            <Route path="/class" element={<Greeting/>}/>
            <Route path="/event" element={<MyComponent/>}/>
            <Route path="/conditional" element={<ConditionalRendering/>}/>
            <Route path="/conditionalif" element={<ConditionalRenderingIf/>}/>
            <Route path="/switch" element={<ConditionalSwitch/>}/>
            <Route path="/navbar" element={<Navbar/>}/>
            <Route path="*" element={<Nomatch/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/product" element={<Products/>} >
             <Route path="featuredproduct" element={<FeaturedProduct/>}/>
             <Route path="newproduct" element={<NewProduct/>} />
          </Route>
             
            
            
          
          </Routes>
          </Router>
      
  
              
    
              
    /*<Greeting/>
      <MyComponent/> 
      <Greeting name="Alice"/>
      <Counter/>
      <MyComponent//}
      <ConditionalRendering/>
      </Switch>
      <ConditionalRenderingIf/>
      <ConditionalSwitch/>*/
      

 );
}
  
  
export default App;
