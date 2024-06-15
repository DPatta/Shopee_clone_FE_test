import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../app/globals.css";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="top-header">
          <div className="user-box">
            <div className="icon-user">
              <FontAwesomeIcon icon={faUser} width={15} height={15} color="#c6c6c6" />
            </div>
            <div className="user-name">
              <span>user name</span>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="logo">Shopee Clone</div>
          <div className="input-box">
            <input type="text" className="search-input" />
            <button className="search-action">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                width={14}
                color="#fff"
              />
            </button>
          </div>
          <div className="cart-action">
            <FontAwesomeIcon icon={faCartShopping} width={26} color="#fff" />
          </div>
        </div>
      </div>
    </header>
  );
}
