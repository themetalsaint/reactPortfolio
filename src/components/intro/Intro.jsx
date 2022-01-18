import "./intro.css"
import Me from "../../img/me.png"


const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className= "i-left-wrapper">
                    <h2 className= "i-intro">Hello! My name is </h2>
                    <h1 className="i-name">Rachael Davis</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                          <div className="i-title-item">Web Developer</div>
                          <div className="i-title-item">Customer Service Expert</div>
                          <div className="i-title-item">Gamer</div>
                          <div className="i-title-item">Painter</div>
                          <div className="i-title-item">Dreamer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I am a full stack developer who grew up in a networking world!
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro