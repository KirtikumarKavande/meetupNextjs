import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const AddMeetup = () => {
  const onAddMeetup = async (item) => {
    const res = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    });
    const data=await res.json()
  };

  return <NewMeetupForm onAddMeetup={onAddMeetup} />;
};

export default AddMeetup;
