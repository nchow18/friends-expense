import React, { useState } from 'react';
import '../../css/Account.css';

function AccountDetails(props) {

  const {
    user_me
  } = props

  const [formData, setFormData] = useState({ 
    first_name: user_me.first_name, 
    last_name: user_me.last_name,
    email: user_me.email,
    phone: user_me.phone })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

    console.log(user_me);

  return (
    <div className="account-details-container">
      <span>Account Details</span>
      <form>
        <label>First Name: </label> 
        <input placeholder={user_me.first_name} value={formData.first_name} onChange={handleInputChange} />
        <label>Last Name: </label> 
        <input placeholder={user_me.last_name} value={formData.last_name} onChange={handleInputChange} />
        <label>Email: </label>
        <input placeholder={user_me.email} value={formData.email} onChange={handleInputChange} />
        <label>Phone: </label>
        <input placeholder={user_me.phone} value={formData.phone} onChange={handleInputChange} />
      </form>

    </div>
  )
}

export default AccountDetails;