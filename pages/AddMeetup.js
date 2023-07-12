import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const AddMeetup = () => {
const onAddMeetup=(item)=>{
console.log(item)
}

  return (
<NewMeetupForm onAddMeetup={onAddMeetup}/>
  )
}

export default AddMeetup