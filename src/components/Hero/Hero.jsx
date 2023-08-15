import './Hero.scss'
import Header from "../Header/Header"
import Vector from '../../assets/Vector 1.svg'
import Ellipse1 from '../../assets/Ellipse 619.svg'
import Ellipse2 from '../../assets/Ellipse 620.png'
import Bars from '../../assets/Group 1000001689.svg'
import Dropdown from '../../assets/Vector.svg'

import User1 from '../../assets/Ellipse 31.svg'
import User2 from '../../assets/Ellipse 32.svg'
import User3 from '../../assets/Ellipse 33.svg'
import User4 from '../../assets/Ellipse 34.svg'
import User5 from '../../assets/Ellipse 35.svg'
import User6 from '../../assets/Ellipse 36.svg'
import User7 from '../../assets/Ellipse 37.svg'

import FlyEmirates from '../../assets/image 909.png'
import Trivago from '../../assets/image 914.png'
import Airbnb from '../../assets/image 911.png'
import TurkishAir from '../../assets/image 913.png'
import Swiss from '../../assets/image 912.png'
import Bar from '../../assets/Rectangle 19289.png'


function Hero() {
  return (
    <main>
        <div className="hero">
            <Header />
            <div className="title">
                <img src={Vector} alt="wavy" />
                <h1>No matter where you're going to, we'll take you there</h1>
            </div>
            <div className="bar">
                <div className='options'>
                    <p>Where to?</p>
                    <img src={Bar} alt="" />
                </div>
                <div className='options travel'>
                    <p>Travel Type <img src={Dropdown} alt="" /></p>
                    <img src={Bar} alt="" />
                </div>
                <div className='options'>
                    <p>Duration <img src={Dropdown} alt="" /></p>
                </div>
                <button className="btn">
                    submit
                </button>
            </div>
            <div className="users">
                <div className="user-avatars">
                    <img src={User1} alt="" />
                    <img src={User2} alt="" />
                    <img src={User3} alt="" />
                    <img src={User4} alt="" />
                    <img src={User5} alt="" />
                    <img src={User6} alt="" />
                    <img src={User7} alt="" />
                    <p>+</p>
                </div>
                <p>2,500 people booked Tommorowland Event in last 24 hours</p>
            </div>
            <div className='scroll'>
                <div className='ellipse'>
                    <div className="e1">
                        <img src={Ellipse2} alt="" />
                    </div>
                    <div className="e2">
                        <img src={Ellipse1} alt="" />
                    </div>
                    <p>Scroll</p>
                </div>
                <img src={Bars} alt="" />
            </div>
        </div>
        <div className="brands">
            <img src={FlyEmirates} alt="fly emirates logo" />
            <img src={Trivago} alt="Trivago logo" />
            <img src={Airbnb} alt="Airbnb logo" />
            <img src={TurkishAir} alt="Turkish airways logo" />
            <img src={Swiss} alt="Swiss logo" />
        </div>
    </main>
  )
}

export default Hero
