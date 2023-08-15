import './Romantic.scss'
import Illustration from '../../assets/Illustration.png';
import BgPlus from '../../assets/Background Element.png';

function Romantic() {
  return (
    <div className='romantic'>
      <div className="left">
        <img src={Illustration} alt="" className='illustration'/>
        <img src={BgPlus} alt="" className='plus' />
      </div>
      <div className="right">
        <p className='t1'>Honeymoon Specials</p>
        <h1>Our Romantic Tropical Destinations</h1>
        <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
        <div className="btn">
            <p>View Packages</p>
        </div>
      </div>
    </div>
  )
}

export default Romantic
