import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
        </div>
        <div class="links">
          <a href="#home">home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#projects">Projects</a>
        </div>
        <div class="credit">
          created by <span>MOHD AADIL</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
