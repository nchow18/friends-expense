import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ACTIVITY, REMOVE_ACTIVITY } from '../../utils/mutations';

function Activities(props) {

  const {
    activitiesArr,
    event_id
  } = props

  const [ addActivity, { error }] = useMutation(ADD_ACTIVITY);
  const [ removeActivityDB ] = useMutation(REMOVE_ACTIVITY);

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
    console.log('form submitted')

    try {
      addActivity({
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

    activitiesArr.push(formData);
  }

  const removeActivity = async (activityId) => {

    const confirm = window.confirm('Remove Activity?')

    if (confirm) {
      try {
        removeActivityDB({
          variables: {
            event_id: event_id,
            activity_id: activityId
          }
        })
      } catch (e) {
        console.log(e);
      }
  
      for (var i = 0; i < activitiesArr.length; i++) {
        if (activityId === activitiesArr[i]._id) {
          activitiesArr.splice(i, 1);
        }
      }
    }
  }

  return (
    <div className="activities-component">
      <div>
        <div>
          <span>Activity</span>
          <span>Date</span>
          <span>Time</span>
          <span>Cost</span>
          <span>Map</span>
          <span>Address</span>
          <span>Website</span>
          <span></span>
          {activitiesArr.map((activity) => (
            <>
              <div>{activity.name}</div>
              <div>{activity.date}</div>
              <div>{activity.time}</div>
              <div>$ {activity.cost}</div>
              <div>{activity.map}</div>
              <div>{activity.address}</div>
              <div>{activity.website}</div>
              <i className="far fa-trash-alt" onClick={() => {removeActivity(activity._id)}}></i>
             </>
          ))}
        </div>        
      </div>

      <div>
        <span>Add Activity</span>
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

    </div>
  )
}

export default Activities;