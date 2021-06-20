import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
  // const [navbar, setNavbar] = useState(false);

  // const changeNavbarColor = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  //   console.log(window.screenY);
  // };

  // window.addEventListener('scroll', changeNavbarColor);

  constructor() {
    super();
    this.state = {
      addClass: 'header_area',
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 0) {
      this.setState({ addClass: 'header_area navbar_fixed' });
    } else {
      this.setState({ addClass: 'header_area' });
    }
  }

  render() {
    return (
      <>
        <header onScroll={this.handleScroll} className={this.state.addClass}>
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container box_1620">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <NavLink className="navbar-brand logo_h" to="/">
                  {/* <img src="img/logo.png" alt="" /> */}
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                <div
                  className="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav menu_nav ml-auto">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/services">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/portfolio">
                        Portfolio
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </>
    );
  }
}

export default Header = withRouter(Header);
