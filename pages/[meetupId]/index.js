import {MongoClient ,ObjectId} from "mongodb"
function MeetupDetails(props){
 console.log(props)
  return (
    <div>
 <img src={props.meetupData.image} alt='nnnwn'/> */
       <p>{props.meetupData.title}</p>
      <p>{props.meetupData.address}</p>
      <p>{props.meetupData.description}</p>
    
    </div>
  )
}

export default MeetupDetails;

export async function getStaticPaths(){
  const client = await MongoClient.connect(
    "mongodb+srv://arunmalewadi:bkfxOhqwBilYQ0NK@cluster0.gtjc9ml.mongodb.net/?retryWrites=true&w=majority");

  const db = client.db();

  const meetupsCollections = db.collection("meetups");
  const Meetups= await meetupsCollections.find({},{_id:1}).toArray()



return {
  fallback:false,
  paths:Meetups.map(meetup=>({params:{meetupId:meetup._id.toString()}}))

}

}

export async function getStaticProps(context){
  const meetupId=context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://arunmalewadi:bkfxOhqwBilYQ0NK@cluster0.gtjc9ml.mongodb.net/?retryWrites=true&w=majority");

  const db = client.db();

  const meetupsCollections = db.collection("meetups");
  const Selectedmeetup= await meetupsCollections.findOne({_id:new ObjectId(meetupId)})
  client.close()

  return {
    props:{
      meetupData:{
        id:Selectedmeetup._id.toString(),
        title:Selectedmeetup.data.title,
        address:Selectedmeetup.data.address,
        description:Selectedmeetup.data.description
      }
      
    }
  }


}