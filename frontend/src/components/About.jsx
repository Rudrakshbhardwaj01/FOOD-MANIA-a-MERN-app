import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Where passion meets the plate.</p>
            </div>

            <p className="mid">
              We believe great food is more than just a meal — it’s an
              experience. From carefully sourced ingredients to thoughtfully
              crafted recipes, everything we serve is made with intention,
              flavor, and heart.
              <br /><br />
              Our kitchen is driven by creativity and rooted in authenticity.
              Whether you’re here for comfort classics or bold new flavors, we
              promise food that feels familiar yet exciting — the kind that
              keeps you coming back for more.
            </p>

            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>

          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
