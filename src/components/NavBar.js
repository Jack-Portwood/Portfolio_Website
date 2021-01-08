import React,{Component} from "react";
import { HashLink } from "react-router-hash-link";

class NavBar extends Component {
  state = {
    isOpen: false
  }
  handleToggle = () =>{
    this.setState({ isOpen: !this.state.isOpen})
  }
  render(){
  return (
    <nav className="navbar">
      <ul className={this.state.isOpen ? "show-nav" : "nav-links"}>
        <li>
          <HashLink smooth to="#home-container" className="nav-link">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#aboutMe-container" className="nav-link">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#portfolio-container" className="nav-link">
            Projects
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};
}
export default NavBar;
