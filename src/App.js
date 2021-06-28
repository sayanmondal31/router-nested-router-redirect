import {Route,Switch, Redirect} from "react-router-dom"
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader"
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          {/*
           * whenever user comes to home => "/"{route}
           * then this will redirect to welcome route
           * **⭐ keep in mind that exact is important in "/" router
           * to redirect to other route in this case [ /welcome ] route
           */}
          
          <Route path="/" exact> 
            <Redirect to="/welcome" />
          </Route>
          
          <Route path="/welcome"> <Welcome /> </Route>
          <Route exact path="/products" > <Products /> </Route>
          <Route path="/products/:productId" >
            <ProductDetail /> 
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

