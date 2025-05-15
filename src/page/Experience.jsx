import '../index.css';
import DataImage from '../data/data';

const Experience = () => {
return (
    <section id="experience" className="experience">
            <h2 className="section-title">Experience</h2>
            <div className="experience-info">
                    <div className="grid">
                            <div className="grid-card">
                                    <i className="fa-solid fa-code"></i>
                                    <span>Frontand Development</span>
                                    <h3>2 Years</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, veniam.</p>
                            </div>

                            <div className="grid-card">
                                    <i className="fa-solid fa-laptop"></i>
                                    <span>Web Design</span>
                                    <h3>3 Years</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, veniam.</p>
                            </div>

                            <div className="grid-card">
                                    <i className="fa-solid fa-pen-nib"></i>
                                    <span>Graphic Design</span>
                                    <h3>5 Years</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, veniam.</p>
                            </div>

                            <div className="grid-card">
                                    <i className="fa-solid fa-list"></i>
                                    <span>Content Creator</span>
                                    <h3>2 Years</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, veniam.</p>
                            </div>
                    </div>

                    <img src={DataImage.HeroImage2} alt="" />
            </div>
        </section>
)
}

export default Experience
