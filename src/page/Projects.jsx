import '../index.css';
import DataImage from '../data/data';

const Projects = () => {
return (
    <section id="projects" className="projects">
            <h2 className="section-title">Recent Projects</h2>
            <div className="projects-grid">
                    <div className="project-card">
                            <img src={DataImage.HeroImage4} alt="" />
                            <h3>Projects X</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, vero.</p>
                            <div className="btn-group">
                                    <div className="btn">Live Demo</div>
                                    <div className="btn">Github Repo</div>
                            </div>
                    </div>

                    <div className="project-card">
                            <img src={DataImage.HeroImage5} alt="" />
                            <h3>Projects X</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, vero.</p>
                            <div className="btn-group">
                                    <div className="btn">Live Demo</div>
                                    <div className="btn">Github Repo</div>
                            </div>
                    </div>

                    <div className="project-card">
                            <img src={DataImage.HeroImage6} alt="" />
                            <h3>Projects X</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, vero.</p>
                            <div className="btn-group">
                                    <div className="btn">Live Demo</div>
                                    <div className="btn">Github Repo</div>
                            </div>
                    </div>
            </div>
        </section>
)
}

export default Projects
