import React from 'react';
import externalLinkIcon from "../../images/externalLinkIcon.png";
import descriptionIcon from "../../images/descriptionIcon.png";
import githubIcon from "../../images/github.png";

function projectIcons(props) {
    return (
        <div className="iconSection">
          <span className="classSpan">
            <a className="toolTip" href={props.githubLink}>
              <img className="classIcon toolTip" src={githubIcon} alt=""/>
              <span className="classTooltip">Github</span>
            </a> 
          </span>
          <span className="classSpan">
            <a className="toolTip" href={props.herokuLink}>
              <img className="classIcon toolTip" src={externalLinkIcon} alt=""/>
              <span className="classTooltip">Preview</span> 
            </a>
          </span>
          <span className="classSpan">
            <a className="toolTip" href={props.description}>
              <img className="classIcon toolTip" src={descriptionIcon} alt=""/>
              <span className="classTooltip">Description</span> 
            </a>
          </span>
        </div>
    )
}

export default projectIcons;
