import React from 'react';
import {
  //  useNavigate,
  Outlet,
  Link,
} from 'react-router-dom';

type ProfileProps = {
  //  match: any
};

export default function Profile({}: // match
ProfileProps) {
  // const navigator = useNavigate();

  return (
    <>
      <h1>
        Profile Profile
        <br />
        <Link to="/purchases">Purchases</Link>
        <br />
        <Link to="/password">Password</Link>
      </h1>

      <Outlet />
    </>
  );
}
