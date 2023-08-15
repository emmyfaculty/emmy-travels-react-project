import './Services.scss'
import TourGuide from '../../assets/guidedTours.png'
import Flight from '../../assets/Flight.png'
import Hands from '../../assets/Hands.png'
import Medical from '../../assets/Medical.png'

function Services() {
  return (
    <div className='services'>
      <p className='cat'>CATEGORY</p>
      <h1>We Offer Best Services</h1>
      <div className="container">
        <div className="box">
            <img src={TourGuide} alt="" />
            <div className="text">
                <p className='t1'>Guided Tours</p>
                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
            </div>
        </div>
        <div className="box">
            <img src={Flight} alt="" />
            <div className="text">
                <p className='t1'>Best Flights Options</p>
                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
            </div>
        </div>
        <div className="box">
            <img src={Hands} alt="" />
            <div className="text">
                <p className='t1'>Religious Tours</p>
                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
            </div>
        </div>
        <div className="box">
            <img src={Medical} alt="" />
            <div className="text">
                <p className='t1'>Medical insurance</p>
                <p>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
