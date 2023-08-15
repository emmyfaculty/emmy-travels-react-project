import './Header.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Dropdown from '../../assets/Vector.png'


function Header() {
  return (
    <div className='header'>
      <div className="logo">
        <Link to="/">
            <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="nav">
        <ul className='nav-ul'>
            <li>Home</li>
            <li>About</li>
            <li className='dropdown-container'>services <img src={Dropdown} alt="dropdown" />
                <ul className="dropdown">
                    <li>Honeymoon Packages</li>
                    <li>Tours Packages</li>
                    <li>Musical Events</li>
                    <li>Build package</li>
                </ul>
            </li>
            <li>Upcomming Packages</li>
        </ul>    
      </div>
      <div className='btn'>
        <p>Get in Touch</p>
      </div>
    </div>
  )
}

export default Header
