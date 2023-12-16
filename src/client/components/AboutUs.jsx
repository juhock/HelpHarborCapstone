import React from "react";
import "../components/layout/AboutUs.css";

export default function AboutUs() {
  return (
    <div className="bdy">
      <div className="about">
        <div className="inner-section">
          <h1 className="headerAbout">Mission Statement</h1>
          <p className="text">
            Welcome to Help Harbor, a beacon of compassion and collaboration in
            the world of philanthropy. At Help Harbor, our mission is simple yet
            profound: to bridge the gap between charitable organizations in need
            and individuals eager to make a difference. We provide a unique
            platform where charities can post their specific requests for
            assistance, whether it's financial support, volunteer manpower, or
            resources. Our website serves as a virtual harbor, where these
            heartfelt pleas dock, waiting to catch the attention of
            compassionate souls ready to extend a helping hand. Together, we
            believe in the power of community and collective goodwill,
            transforming the act of giving into a collaborative voyage toward a
            better, more caring world. Join us at Help Harbor, where every
            click, share, and contribution creates ripples of positive change.
          </p>
          <h1 className="headerAbout" id="ourTeam">
            Our Team
          </h1>
          <p className="text">
            We're a tight-knit crew of junior software developers fresh out of
            Full Stack Academy's rigorous Software Developer immersive bootcamp.
            Our squad is made up of passionate individuals who collaborated
            seamlessly to craft a solution poised to make a positive impact on
            the world. This website marks the beginning of our journey, and
            we're convinced that our collective dedication will lead to the
            creation of applications that can quickly resonate across the globe,
            impacting diverse cultures beyond our own.
          </p>
          <div class="skills">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
