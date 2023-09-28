import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    function AddMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData)

    }
  return (
    <NewMeetupForm onAddMeetup={AddMeetupHandler}></NewMeetupForm>
  )
}

export default NewMeetupPage