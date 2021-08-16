import React, { useEffect } from 'react';
import '../../css/Header.css';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { USER_ME } from '../../utils/queries';

function Header() {

  const { loading, data } = useQuery(USER_ME);
  const user_data = data?.userMe;

  if (loading) return `...LOADING`;

  return (
    <div className="header-content">
      <div>
        {Auth.loggedIn() === true && (
        <div>Welcome, {user_data.first_name}</div>
        )}
      </div>

      <div>
        <div>Friends Expense</div>
        <div>
          <a href="/">Home</a>
          {Auth.loggedIn() === true ? (
            <>
              <a href="/account">Account</a>
              <a href="/logout">Log Out</a>
            </>
          ) : (
            <>
              <a href="/login">Log In</a>
              <a href="/signup">Sign Up</a>
            </>
          )}
        </div>
      </div>

    </div>
  )
}

export default Header;