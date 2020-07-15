import React from "react";

import "./UserList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = ({items}) => {
  if (items.length === 0) {
    return (
      <div className='center'>
        <Card>No users found</Card>
      </div>
    );
  }

  return (
    <ul>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
