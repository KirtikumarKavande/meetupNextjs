import MeetupList from "../components/meetups/MeetupList";
const dummy_meetup = [
  {
    id: "m1",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alcoba%C3%A7a_October_2021-1.jpg/550px-Alcoba%C3%A7a_October_2021-1.jpg",
    title: "test",
    address: "kdmkqsd",
  },
  {
    id: "m2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alcoba%C3%A7a_October_2021-1.jpg/550px-Alcoba%C3%A7a_October_2021-1.jpg",

    title: "test",
    address: "kdmkqsd",
  },
  {
    id: "m3",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alcoba%C3%A7a_October_2021-1.jpg/550px-Alcoba%C3%A7a_October_2021-1.jpg",

    title: "test3",
    address: "good",
  },
];
const Home = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
// export async function getStaticProps() {
//   return {
//     props: {
//       meetups: dummy_meetup,
//     },
//     revalidate:10
//   };  
// }
export async function getServerSideProps(context) {
  const req=context.req
  const res=context.res
  return {
    props:{
      meetups: dummy_meetup,
    }
  }
}

export default Home;
