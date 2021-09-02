import React from 'react';

function ActivityIdeasModal(props) {

  const {
    activity
  } = props

  return (
    <div>
      {activity.votes.map((vote) => (
        <span>{vote}</span>
      ))}
    </div>
  )
}

export default ActivityIdeasModal;