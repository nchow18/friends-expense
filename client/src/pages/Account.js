import React, { useState } from 'react';
import '../css/Account.css';
import { useQuery } from '@apollo/react-hooks';
import { USER_ME } from '../utils/queries';
import AccountDetails from '../components/Account/AccountDetails';
import Events from '../components/Account/Events';
import CreateEvent from '../components/Account/CreateEvent';

function Account() {

  const { loading, data } = useQuery(USER_ME);
  const user_me = data?.userMe || {};
  const [AccountType] = useState([
    {
      name: 'Account Details',
      type: 'details'
    },
    {
      name: 'My Events',
      type: 'events'
    },
    {
      name: 'Create Event',
      type: 'create-event'
    }
  ])

  const [accountType, setAccountType] = useState(AccountType[0])

  if (loading) return `...Loading`;

  return (
      <div className="account-container">
        <div>
          {AccountType.map((category) => (
            <span key={category.type} className={`account-category ${accountType.type === category.type && `account-category-active`}`} onClick={() => {setAccountType(category)}}>{category.name}</span>
          ))}
        </div>
        <div className="account-contents">
          {accountType.type === 'details' && (
            <AccountDetails
              user_me={user_me} />
          )}
          {accountType.type === 'events' && (
            <Events
              user_me={user_me} />
          )}
          {accountType.type === 'create-event' && (
            <CreateEvent
              user_me={user_me} />
          )}
        </div>
      </div>
  )
}

export default Account;