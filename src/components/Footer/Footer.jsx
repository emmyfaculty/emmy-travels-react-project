import './Footer.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/footerLogo.png'
import Twitter from '../../assets/096-twitter (1).svg'
import Messenger from '../../assets/025-messenger (1).svg'
import Linkedin from '../../assets/052-linkedin (1).svg'
import Twoo from '../../assets/097-twoo (1).svg'
import Bar from '../../assets/Rectangle 97.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="top">
            <div className="contact">
                <img src={Logo} alt="" />
                <p>Travel helps companies manage payments easily.</p>
                <div className="socials">
                    <Link to='/'>
                        <img src={Linkedin} alt="" />
                    </Link>
                    <Link to='/'>
                        <img src={Messenger} alt="" />
                    </Link>
                    <Link to='/'>
                        <img src={Twitter} alt="" />
                    </Link>
                    <Link to='/'>
                        <img src={Twoo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="company">
                <h1>Company</h1>
                <li>
                    <Link to='/' className='navlink'>About Us</Link>
                </li>
                <li>
                    <Link to='/' className='navlink'>Careers</Link>
                </li>
                <li>
                    <Link to='/' className='navlink'>Blog</Link>
                </li> 
                <li>
                    <Link to='/' className='navlink'>Pricing</Link>
                </li>   
            </div>
            <div className="destination">
                <h1>Destinations</h1>
                <li>
                    <Link to='/' className='navlink'>Maldives</Link>
                </li>
                <li>
                    <Link to='/' className='navlink'>Los Angeles</Link>
                </li>
                <li>
                    <Link to='/' className='navlink'>Las Vegas</Link>
                </li>
                <li>
                    <Link to='/' className='navlink'>Toronto</Link>
                </li>
            </div>
            <div className="newsletter">
                <h1>Join Our Newsletter</h1>
                <div className="input">
                    <input type="email" placeholder='Your email address' className='email'/>
                    <input type="submit" value="Submit" className='btn'/>
                </div>
                <p>*  Will send you weekly updates for your better tour packages.</p>
            </div>
        </div>
        <div className="copyright">
            <img src={Bar} alt="" />
            <p>Copyright @ Xpro 2022. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
