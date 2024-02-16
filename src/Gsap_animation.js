import './App.css';
import { gsap } from 'gsap'
import { useRef , useEffect } from "react"
function Gsap_animation() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set(imageRef.current, { scale: 1.5 });
    gsap.to(imageRef.current, 5, { scale: 1, repeat: -1});
    gsap.set(textRef.current, { scale: 0.5 });
    gsap.to(textRef.current, 5, { scale: 1, repeat: -1});
  }, []);
  return(
    <>
        <h6> GSAP animation</h6>
      <div className="container">
        <div className="header">
          <div ref={imageRef} className="backgroundImage"></div>
          <div className="headerContent">
            <div className="image">
              <img src='/image/praveen.png'/>
            </div>
            <div className="text">
              <div ref={textRef}>Beat out other buyers to Hot New Listings</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gsap_animation;
