import MeetupList from '../components/meetups/MeetupList'

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

function Homepage(){

    return< MeetupList meetups={Dummy_Meetups}></MeetupList>
}
export default Homepage;