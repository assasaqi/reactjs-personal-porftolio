import '../index.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <div className="input-box">

            <h2 className="section-title">Contact Me</h2>

            <div className="input">
                <input type="text" placeholder='example@gmail.com"' />
                <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="btn">Submit</div>
        </div>
      </section>
  )
}

export default Contact
