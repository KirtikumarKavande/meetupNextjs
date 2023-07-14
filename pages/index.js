import { MongoClient } from "mongodb";
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
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://kirtikumar0005:233186@cluster0.ipg0r4q.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
  const meetups = await meetupCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((item) => {
        return {
          title: item.title,
          address: item.address,
          image: item.image,
          id: item._id.toString(),
        };
      }),
    },
  };
}


export default Home;
