import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id=" services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list.icon" />
              <p>Building dynamic web applications with React</p>
            </li>

            <li>
              <BiCheck className="service__list.icon" />
              <p>Creating interactive forms and user input handling</p>
            </li>

            <li>
              <BiCheck className="service__list.icon" />
              <p>
                Implementing component-based architecture for better
                maintability
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Website Management & Updates</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list.icon" />
              <p>Fixing bugs and errors on existing Website</p>
            </li>

            <li>
              <BiCheck className="service__list.icon" />
              <p>Updating content or features to keep sites current</p>
            </li>

            <li>
              <BiCheck className="service__list.icon" />
              <p>Improving page load speed and user experience</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Consultation & Mentorship</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list.icon" />
              <p>
                Providing guidance on basic React usage and web development
                princioles
              </p>
            </li>

            <li>
              <BiCheck className="service__list.icon" />
              <p>Assisting with structuring simple web applications</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
