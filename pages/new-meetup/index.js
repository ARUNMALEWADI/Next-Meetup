import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    async function AddMeetupHandler(enteredMeetupData){
        // console.log(enteredMeetupData)
      const res= await fetch('/api/new-meetup',{
          method:"POST",
          body:JSON.stringify(enteredMeetupData),
          headers:{
            "Content-Type":"application/json"
          }
        })
        const data=await res.json()
        console.log(data)

    }
  return (
    <NewMeetupForm onAddMeetup={AddMeetupHandler}></NewMeetupForm>
  )
}

export default NewMeetupPage