import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
import Head from "next/head";

const Home = (props) => {
  return (
    <Fragment>
      <Head>
        <title> React Meetup</title>
        <meta
          name="description"
          content="Browse a huge list of React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
