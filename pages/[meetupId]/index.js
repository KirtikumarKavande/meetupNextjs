import React from "react";
import MeetupInfo from "../../components/meetups/MeetupInfo";

const meetupDetails = (props) => {
  return (
    <div>
      <MeetupInfo
        img={props.meetupData.img}
        title={props.meetupData.title}
        address={props.meetupData.address}
      />
    </div>
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,

        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alcoba%C3%A7a_October_2021-1.jpg/550px-Alcoba%C3%A7a_October_2021-1.jpg",
        address: "xyz",
        title: "jkl",
      },
    },
  };
}

export default meetupDetails;
