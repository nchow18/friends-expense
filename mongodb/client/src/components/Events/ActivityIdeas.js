import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ACTIVITY, REMOVE_ACTIVITY, ADD_ACTIVITY_IDEA, REMOVE_ACTIVITY_IDEA, UPDATE_ACTIVITY_IDEA } from '../../utils/mutations';

function ActivityIdeas(props) {

  const {
    activityIdeasArr,
    event_id,
    user_me
  } = props

  const [voteModal, setVoteModal] = useState(false);
  const [ addActivityIdeas, { error }] = useMutation(ADD_ACTIVITY_IDEA);
  const [ removeActivityIdeasDB ] = useMutation(REMOVE_ACTIVITY_IDEA);
  const [ updateActivityIdeasDB ] = useMutation(UPDATE_ACTIVITY_IDEA)

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    cost: '',
    map: '',
    address: '',
    website: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const activityFormSubmit = async (event) => {

    try {
      addActivityIdeas({
        variables: {
          input: {
            name: formData.name,
            date: formData.date,
            time: formData.time,
            cost: formData.cost,
            address: formData.address,
            website: formData.website,
            map: formData.map,
            event_id: event_id
          }
        }
      })
    } catch (e) {
      console.log(e);
    }

    activityIdeasArr.push(formData);
  }

  const add_user_vote = async (activity_index) => {

    console.log(activity_index);
    const data = activityIdeasArr[activity_index];
    console.log(data);

    // try {
    //   updateActivityIdeasDB({
    //     variables: {
    //       input: {

    //       }
    //     }
    //   })
    // }

    activityIdeasArr[activity_index].votes.push(user_me.first_name)
  }

  const removeActivity = async (activityId) => {

    const confirm = window.confirm('Remove Activity Idea?')

    if (confirm) {
      try {
        removeActivityIdeasDB({
          variables: {
            event_id: event_id,
            activity_idea_id: activityId
          }
        })
      } catch (e) {
        console.log(e);
      }
  
      for (var i = 0; i < activityIdeasArr.length; i++) {
        if (activityId === activityIdeasArr[i]._id) {
          activityIdeasArr.splice(i, 1);
        }
      }
    }
  }

  var [votes] = useState([])
  const [currentVote, setCurrentVote] = useState(votes[0])

  console.log(user_me);

  function checkVote(index) {
    for (var i = 0; activityIdeasArr[index].votes.length; i++) {
      if (user_me.first_name.toLowerCase() === activityIdeasArr[index].votes[i])
      return true;
    }
  }

  return (
    <div className="activity-ideas-component">
      <div>
        <div>
          <span>Activity</span>
          <span>Date</span>
          <span>Time</span>
          <span>Cost</span>
          <span>Map</span>
          <span>Address</span>
          <span>Website</span>
          <span>Votes</span>
          <span></span>
          {activityIdeasArr.map((activity, index) => (
            <>
              <div>{activity.name}</div>
              <div>{activity.date}</div>
              <div>{activity.time}</div>
              <div>$ {activity.cost}</div>
              <div>{activity.map}</div>
              <div>{activity.address}</div>
              <div>{activity.website}</div>
              <div id={index}><i className="fas fa-info-circle" onClick={() => {setVoteModal(true); setCurrentVote(index)}}></i>
                {checkVote(index) ? (
                  <>
                    <input type="checkbox" checked onClick={() => {}}/><i className="far fa-check-square"></i>
                  </>
                ) : (
                  <>
                    <input type="checkbox" onClick={() => {add_user_vote(index)}}/><i className="far fa-check-square"></i>                  
                  </>
                )} 
              </div>
              <i className="far fa-trash-alt" onClick={() => {removeActivity(activity._id)}}></i>
             </>
          ))}
        </div>        
      </div>

      <div>
        <span>Add Activity Idea</span>
        <form>
          <div>
            <input name="name" onChange={handleInputChange} value={formData.name} placeholder='Activity' />
            <input type="date" name="date" onChange={handleInputChange} value={formData.date} placeholder='Date' />
            <input name="time" onChange={handleInputChange} value={formData.time} placeholder='Time'/>
            <input name="cost" onChange={handleInputChange} value={formData.cost} placeholder='Cost'/>
            <input name="map" onChange={handleInputChange} value={formData.map} placeholder='Map'/>
            <input name="address" onChange={handleInputChange} value={formData.address} placeholder='Address'/>
            <input name="website" onChange={handleInputChange} value={formData.website} placeholder='Website'/>
            <i onClick={() => {activityFormSubmit()}} disabled={!(formData.name && formData.date && formData.time && formData.cost && formData.map && formData.address && formData.website)}>Add Activity</i>
          </div>
        </form>
      </div>

      {voteModal === true && (
          <div className="vote-modal" onClick={() => setVoteModal(false)}>
            {activityIdeasArr[currentVote].votes ? (
              <>
                <span><b>Votes:</b></span>
                {activityIdeasArr[currentVote].votes.map((vote, index) => (
                  <span><b>{index + 1}. </b> {vote}</span>
                ))}
              </>              
            ) : (
              <span><b>No Votes Yet</b></span>
            )}
          </div>
        )}

    </div>
  )
}

export default ActivityIdeas;