import { useSpring,animated } from '@react-spring/web'
function React_spring_animation() {
    const image = useSpring({
        from: {scale: 1.5},
        to: {scale: 1},
        loop: true,
        config:{ duration: 5000, }
    })
    const text = useSpring({
        from: {scale: 0.5},
        to: {scale: 1},
        loop: true,
        config:{ duration: 5000,}        
    })
  
    return(
      <>
        <h6> React spring animation</h6>
      <div className="container">
        <div className="header">
          <animated.div style={image} className="backgroundImage"></animated.div>
          <div className="headerContent">
            <div className="image">
              <img src='/image/praveen.png'/>
            </div>
            <div className="text">
              <animated.div style={text} >Beat out other buyers to Hot New Listings</animated.div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default React_spring_animation;