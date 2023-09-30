
function MeetupDetails(){
  console.log("HIIII")
  return (
    <div>
 <img src='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg' alt='nnnwn'/>
      <p>  address:"Some address,any street</p>
      <p>washing</p>
    
    </div>
  )
}

export default MeetupDetails;

export async function getStaticPaths(){


return {
  fallback:false,
  paths:[
    {
params:{
  meetupId:"m1",

},
params:{
  meetupId:"m2",

},
params:{
  meetupId:"m3",

}

    }
  ]

}

}

export async function getStaticProps(context){
  const meetupId=context.params.meetupId;
  console.log(meetupId)

  return {
    props:{
      MeetupData:{
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
        id:meetupId,
        title:"First Meetup",
        address:"some street 5",
        description:"This is first meetup",
      }
      
    }
  }


}