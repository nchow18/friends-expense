import React from 'react';
import '../../css/Header.css';
import Auth from '../../utils/auth';

function Header() {
  return (
    <div className="header-content">
      <div>Friends Expense</div>
      <div>
        <a href="/">Home</a>
        {Auth.loggedIn === true ? (
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
  )
}

export default Header;