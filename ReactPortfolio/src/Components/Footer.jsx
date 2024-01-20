import React from 'react';
import ContactPage from './Contactpage';
const Footer = () => {
  return (

    
    <footer id="contact_me">
       
    {/* <!-- upper Footer  --> */}
    <div class="upper_Footer">
      <div class="line left"></div>
      <div class="text">Contact Me</div>
      <div class="line right"></div>
     </div>

     {/* <!-- Footer Body --> */}
    <div class="container ft_container">
    <ContactPage/>
    <div class="ft_row">
     
        <div class="footer_col">
          <span><i class="fas fa-envelope"></i></span>
          <p><a href="mailto:suhaimkhalid007@gmail.com">ReactPortfolio@gmail.com</a></p>
        </div>
   
     
        <div class="footer_col">
          <span><i class="fas fa-phone-alt"></i></span>
          <p>+44 712 123 423</p>
        </div>
  
     
        <div class="footer_col">
          <span><i class="fas fa-map-marker-alt"></i></span>
          <p>London UK</p>
        </div>
  
    
    </div>
    </div>
    {/* <!-- Lower Footer --> */}
    <div class="lower_footer">
      <div class="line left"></div>
    <div class="social_link_center">
      <ul class="social_links">
      <li><a href="https://www.facebook.com/profile.php?id=100005961014921" target="_blank"><i class="fab fa-facebook"></i></a></li>
      <li><a href="https://github.com/SuhaimKhalid" target="_blank"><i class="fab fa-github"></i></a></li>
      <li><a href="https://www.linkedin.com/in/suhaim-khalid-a16982186/" target="_blank"><i class="fab fa-linkedin"></i></a></li>

      
    </ul>
  </div>
    <div class="line right">
    </div>
  
    </div>
   </footer>
  );
}

export default Footer;