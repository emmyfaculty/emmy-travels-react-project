import './Trip.scss'
import Value1 from "../../assets/Group 7.svg"
import Value2 from "../../assets/Group 12.svg"
import Value3 from "../../assets/Group 11.svg"
import Post from "../../assets/Illustration (1).png"


function Trip() {
  return (
    <div className="trip">
      <div className="left">
        <p className='t1'>Fast & Easy</p>
        <h1>Get Your Favourite Resort Bookings</h1>
        <div className="values">
            <img src={Value1} alt="" />
            <div>
                <p className='t2'>Choose Destination</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div> 
        </div>
        <div className="values">
            <img src={Value2} alt="" />
            <div>
                <p className='t2'>Check Availability</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>
        </div>
        <div className="values">
            <img src={Value3} alt="" />
            <div>
                <p className='t2'>Let's Go</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
            </div>    
        </div>
      </div>
      <div className="right">
        <img src={Post} alt="" />
      </div>
    </div>
  )
}

export default Trip
