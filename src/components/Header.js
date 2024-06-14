
import '../styles/globals.css';


export default function  Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Shopee Clone</div>
        <div>
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
        </div>
        <div>Cart | Login</div>
      </div>
    </header>
  );
};
