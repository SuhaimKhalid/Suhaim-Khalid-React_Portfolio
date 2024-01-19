import React from "react";

const HeroSecction = () => {
    return(
      
        <section>
         
        <section className="jumbotron hero-section">
        <div className="container">
            <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 hero_image">
            <img src="Images/SK_2.png" alt="Suhaim Khalid Standing Image "/>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 hero_description">
            <h2> I'm <span>Suhaim Khalid</span></h2>
            <h3>Front End Developer</h3>
            <p><a className="resume-btn" href="Images/Suhaim Khalid Resume.pdf">Resume</a></p>
            </div>
            </div>
        </div>
        </section>
      
        {/* <!-- Hero Bar --> */}
        <section className="hero_bar">
        <div className="container">
        <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4">
          <article className="text_area">
            <div className="inner_area">
              <h3>2</h3>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="inner_area">
              <h3>100<sup>+</sup></h3>
              <p>Static Websites Created</p>
            </div>
          </article>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-8">
          <article className="images_area">
            <img src="Images/Icons/Html.png" alt="Html Logo"/>
            <img src="Images/Icons/Css.png" alt="CSS Logo"/>
            <img src="Images/Icons/Bootstrap.png" alt="BootStrap Logo"/>
            <img src="Images/Icons/JS4.png" alt="JavaScript Logo"/>
            <img src="Images/Icons/Jquery.png" alt="J-Query Logo"/>
            <img src="Images/Icons/React.png" alt="React Logo"/>
            <img src="Images/Icons/Github.png" alt="GitHub Logo"/>
          </article>
        </div>
        </div>
        </div>
        </section>

        </section>
    );
}

export default HeroSecction;