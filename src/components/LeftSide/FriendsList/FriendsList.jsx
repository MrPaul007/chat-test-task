import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import FriendsListItem from "./FriendsListItem";

import { setActiveId } from "redux/menu/menu-slice";
import { getUsers } from "redux/users/users-selectors";

function FriendsList() {
    const {users} = useSelector(getUsers);
    const dispatch = useDispatch();



    const onItemClick = (e) => {
        dispatch(setActiveId(e.currentTarget.id))
    }

    const elements = users.map(({userInfo, messages }) => 
        <FriendsListItem 
            key={userInfo.id} 
            onClick={onItemClick}
            userInfo={userInfo} 
            lastMessage={messages[messages.length - 1]} 
        />);

    return (
        <ul>
            {elements}   
        </ul>
    )
};

export default FriendsList;