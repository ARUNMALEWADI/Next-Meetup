
import MeetUpList from "../components/meetups/MeetupList";
import {MongoClient} from "mongodb"
import Head from "next/head";

const Dummy_Meetups=[
    {   id:'m1',
        title:"A First Meetup",
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        address:"Some address,any street",
        description:"The first meetup"
    },
    {   id:'m2',
    title:"A Second Meetup",
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:"Some address,any street",
    description:"The second meetup"
}
]


//  here if we use useEffect , useState to fetch Api initailly we store in empty array , so basically when componet render for first time , useEffect call
// then then again component re-render during this second cycle we get data but in Next js as here we see server side the initial cycle is empty array []
// so user call might see empty data that is bad user Experience , so
// In Next JS we have  getStaticProps() {} this function get called before the component render for first time , so we  use this function instead of useState and useEffect()
// if we do view source then we dont see data if we use useState and useEffect() caz initailly it is empty so by using this getStatis func we see that actual content of data.
// In getStaticProps() has props property we pass that to our component function .


function HomePage(props) {
  return (
    <>
    <Head>
    <title>React Meetups</title>
    <meta
    name="description"
    content="This is great React meetups website"
    >
    </meta>
    </Head>
      <MeetUpList meetups={props.meetups} />
    </>
  );
}

// Data is not fetched at second  component render cycle on the  client , but initially before this page is pre-render during the built process : - this is one most feature : data fetching for pre-rendering
// This function executed during pre-rendering process :-
// this function get called first before the call the component function : job is to prepare PROP to this page . => This props contain the data that this page needs.
// This function return promise ...async func so we have to wait until proimse get resolved ..so we have to wait till we get that data

export async function getStaticProps() {
  // fetch data from API
  //  return must Object
  // must have props property
  // this props we need in HomePage as props.

  const client = await MongoClient.connect(
    "mongodb+srv://arunmalewadi:bkfxOhqwBilYQ0NK@cluster0.gtjc9ml.mongodb.net/?retryWrites=true&w=majority");

  const db = client.db();

  const meetupsCollections = db.collection("meetups");
  const Meetups= await meetupsCollections.find().toArray()
  console.log("Hi"+Meetups)

  client.close()

  return {
    props: {
        meetups:  Meetups.map(meetup=> ({title:meetup.data.title,
            address:meetup.data.address,
            image:meetup.data.image,
            id:meetup._id.toString()
        
        })),
    revalidate:1
  }
}
}
export default HomePage;