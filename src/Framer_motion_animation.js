import './App.css';
import {motion} from "framer-motion"
function Framer_motion_animation() {
    const image={
        show:{scale:[1.5,1],transition:{duration:5, repeat: Infinity}}
    }
    const text ={
        show:{scale:[0.3,0.8],transition:{duration:5, repeat: Infinity}}
    }

  return(
    <>
      <h6> Framer Motion animation</h6>
      <div className="container">
        <div className="header">
          <motion.div variants={image} animate="show" className="backgroundImage"></motion.div>
          <div className="headerContent">
            <div className="image">
              <img src='/image/praveen.png'/>
            </div>
            <div className="box">
              <motion.div variants={text} animate="show" className='text' >Beat out other buyers to Hot New Listings</motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Framer_motion_animation;