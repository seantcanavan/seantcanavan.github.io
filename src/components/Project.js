import React from 'react'

function Project(props){
  return (
    <div className="mi-testimonial-slideritem">
      <div className="mi-testimonial">
        <div className="mi-testimonial-content">
          <p>
            {props.content.content}
          </p>
        </div>
        <div className="mi-testimonial-author">
          <h5>{props.content.author.projectName}</h5>
          <h6>{props.content.author.companyName}</h6>
        </div>
      </div>
    </div>
  )
}

export default Project;
