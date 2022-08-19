import { useSelector, useDispatch } from "react-redux";

import { setActiveId } from "redux/menu/menu-slice";
import { sort } from "redux/users/users-slice";
import { getUsers } from "redux/users/users-selectors";
import getActiveId from "shared/hooks/useActiveId";

import LeftSide from "components/LeftSide";
import RightSide from "components/RightSide";
import { useEffect } from "react";

function App () {
  const {users} = useSelector(getUsers);
  const dispatch = useDispatch();

  const activeId = getActiveId();

  const sortedUsers = users.concat([]).sort((a, b) => 
    new Date(b.messages.slice(-1)[0].time) - new Date(a.messages.slice(-1)[0].time)
  );

  useEffect(() => {
    if(sortedUsers[0].userInfo.id !== users[0].userInfo.id) {
      dispatch(sort(sortedUsers));
    };
    if(activeId === "") {
      dispatch(setActiveId(sortedUsers[0].userInfo.id))
    };
  
  }, [ dispatch, sortedUsers, activeId, users ]);

  return (
    <div className="main" >
      <div className="container" >
        <LeftSide />
        <RightSide />
      </div>
      <div className="bottom" ></div>
    </div>
  );
};

export default App;