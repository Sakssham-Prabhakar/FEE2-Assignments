import { lazy, Suspense, useState } from 'react';
import './App.css';
import { CartProvider, useCart } from './context/CartContext';

const Home = lazy(() => import('./Home'));
const Cart = lazy(() => import('./Cart'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));

function ShopSmartApp() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cartCount } = useCart();

  return (
    <Suspense fallback={<p className="status-text">Loading ShopSmart...</p>}>
      <Home
        onOpenCart={() => setIsCartOpen(true)}
        onViewDetails={(product) => setSelectedProduct(product)}
        cartCount={cartCount}
      />
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </Suspense>
  );
}

function App() {
  return (
    <CartProvider>
      <ShopSmartApp />
    </CartProvider>
  );
}

export default App;

// 1. Problem statement
// You are hired as a frontend developer to build an e - commerce application called
// ShopSmart. (Use dummyjson api)

//User should do:
//Browse products. (Use pagination to show all the products)
// Search products. (Use debouncing for that)
// Filter products by category.
// Sort products by price and rating.
// View complete product details. (Make separate Component to show product details)
// Add products to their cart. (Use context API to manage Cart state)
// Manage cart quantities.
// View their cart total.