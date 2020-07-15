import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Prasanga Shrestha",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
