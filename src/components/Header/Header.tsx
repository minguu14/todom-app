import "./Header.css";
import mangu from "../../assets/mangu.png";

const Header = () => {
  return (
    <header className="header_container">
        <img 
          className="logo" 
          src={mangu}
          alt="맹구"
          />
        <span>맹구</span>
    </header>
  )
}

export default Header