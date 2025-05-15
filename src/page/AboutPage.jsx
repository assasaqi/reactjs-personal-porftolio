import '../index.css';
import DataImage from '../data/data';


const AboutPage = () => {
return (
            <section id="about" className="about">
                    <div className="about-container">
                            <img src={DataImage.HeroImage1} alt="" />
                            <div className="info-box">

                                    <div className="text">
                                            <h3>Hi, I'm</h3>
                                            <h1>Rasman</h1>
                                            <span>Frontend Developer</span>
                                    </div>

                                    <div className="btn-group">
                                            <div className="btn">Download CV</div>
                                            <div className="btn">Contact</div>
                                    </div>

                                    <div className="socials">
                                    <i className="fa-brands fa-github"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-tiktok"></i>
                                    </div>
                            </div>
                    </div>
     </section>
)
}

export default AboutPage
