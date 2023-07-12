import React from "react";
import classes from './meetupinfo.module.css'

const MeetupInfo = (props ) => {
  return (
    <div className={classes.main}>
      <img src={props.img} />
      
      <label>{props.title}</label>
      <address>{props.address}</address>
    </div>
  );
};

export default MeetupInfo;
