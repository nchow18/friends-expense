import React from 'react';

function Home(props) {

  const {
    user_me
  } = props

  console.log(user_me);

  return (
    <div className="home-content">
      Home
    </div>
  )
}

export default Home;