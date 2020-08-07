import React, { useState, useEffect } from "react";
import axios from 'axios';
import TrackVisibility from "react-on-screen";
import SectionTitle from "../components/SectionTitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import Resume from "../components/Resume";

function Resumes(){
  const [proficiencies, setProficiencies] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() =>{
    axios.get('/api/proficiencies')
      .then(response =>{
        setProficiencies(response.data);
      })
    axios.get('/api/experience')
      .then(response =>{
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      })
  }, [])

  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="Proficiencies" />
          <div className="mi-skills">
            <div className="row mt-30-reverse">
              {proficiencies.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"/>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educationExperience => (
              <Resume key={educationExperience.id} resumeData={educationExperience}/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
