// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:productId" component={ProductDetail} />
      </Switch>
    </Router>
  );
};

// export default App;
// ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  // Access the productId parameter using useParams hook
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
      {/* Fetch product details based on productId */}
    </div>
  );
};

export default ProductDetail;
