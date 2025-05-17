import React from "react";

const LoginSignup = ({ mobile = false }) => (
  <div className={`flex ${mobile ? "space-x-2" : "space-x-4"}`}>
    <button className={`text-neutral-700 ${mobile ? "flex-1 border border-neutral-200 px-4 py-2 rounded-lg hover:bg-neutral-50" : "hover:text-primary"} transition-colors duration-300 text-sm`}>
      Login
    </button>
    <button className={`bg-primary text-neutral-700 ${mobile ? "flex-1" : ""} px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300 text-sm`}>
      Sign Up
    </button>
  </div>
);

export default LoginSignup;
// This component renders the login and signup buttons. The `mobile` prop determines if the buttons should be displayed in a row or not.
// The buttons have different styles for mobile and desktop views. The login button has a border and hover effect, while the signup button has a background color and hover effect.