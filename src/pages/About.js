import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import SectionTitle from "../components/SectionTitle";
import Layout from "../components/Layout";
import Service from "../components/Service";
import Project from "../components/Project";
import shuffleArray from "../utils/shuffleArray";

function About() {
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState([]);
  const [interpersonalSkills, setInterpersonalSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleToggler = () => {
    setToggler({
      toggler: !toggler,
    });
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
    axios.get("/api/technical-skills").then((response) => {
      setTechnicalSkills(response.data);
    });
    axios.get("/api/interpersonal-skills").then((response) => {
      setInterpersonalSkills(response.data);
    });
    axios.get("/api/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler()}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>{information.aboutContent}</p>
                <ul>
                  {!information.name ? null : (
                    <li>
                      <b>Full Name</b> {information.name}
                    </li>
                  )}
                  {!information.languages ? null : (
                    <li>
                      <b>Languages</b> {information.languages.join(", ")}
                    </li>
                  )}
                  {!information.experience ? null : (
                    <li>
                      <b>Experience</b> {information.experience} Years
                    </li>
                  )}
                  {!information.email ? null : (
                    <li>
                      <b>Email</b>{" "}
                      <a href={"mailto:" + information.email}>
                        seantcanavan@gmail.com
                      </a>
                    </li>
                  )}
                  {!information.address ? null : (
                    <li>
                      <b>Address</b> {information.address}
                    </li>
                  )}
                  {!information.employer ? null : (
                    <li>
                      <b>Employer</b> {information.employer}
                    </li>
                  )}
                </ul>
                <a href={information.resumeFile} className="mi-button">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mi-service-area mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="Technical Skills" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {technicalSkills.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mi-padding-top">
          <SectionTitle title="Interpersonal Skills" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {interpersonalSkills.map((service) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mt-30"
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Projects" />
          <div className="row justify-content-center">
            <div className="col-12">
              <Slider className="mi-testimonial-slider" {...sliderSettings}>
                {shuffleArray(projects).map((projects) => (
                  <Project key={projects.id} content={projects} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
