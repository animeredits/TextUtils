import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.ToggleMode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
     
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/About"> {props.About}</Link>
        </li>
      </ul>
        <div >
        <img src={props.icon} alt="icon" style={{width: "2rem", height: "2rem"}} onClick={props.ToggleMode}/>
          </div>
    </div>
  </div>
</nav>
    </div>
  )
  }
Navbar.propTypes = {
 title : PropTypes.string.isRequired,
 About : PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title:"Navbar",
  About :"About"
}
export default Navbar;
