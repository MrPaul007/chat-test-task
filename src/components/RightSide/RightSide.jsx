import {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { addMessage, getMessage } from "redux/users/users-slice";
import { getUsers } from "redux/users/users-selectors";
import useActiveId from "shared/hooks/useActiveId";
import getAnswer from "shared/api/answer";

import NameBar from "./NameBar";
import ChatField from "./ChatField";
import SendMessage from "./SendMessage";

function RightSide() {
    const [state, setState] = useState({
        outcomeText: "",
        loading: false,
        error: null,
    });
    const dispatch = useDispatch();

    const getOutcomeMessage = async () => {
        setState(prevState => ({
            ...prevState,
            loading: true,
        }));
        try {
            const data = await getAnswer();
            setState(prevState => ({
                ...prevState,
                outcomeText: data,
                loading: false,
            }))
        } catch (error) {
            setState(prevState => ({
                ...prevState,
                loading: false,
                error,
            }))
        }
    };

    const {users} = useSelector(getUsers);    
    const activeId = useActiveId();
    let currentUser = activeId ==="" ? users[0] : users.find(user => user.userInfo.id === activeId);
    const index = users.indexOf(currentUser);

    const onAddMessage = ( text ) => { 
        dispatch(addMessage({ index, text }));
        getOutcomeMessage();
        const outcomeText = state.outcomeText;
        console.log(outcomeText); 
        setTimeout(() => {
            console.log(outcomeText);
            dispatch(getMessage({ index, outcomeText }));
        }, 10000);
    };
    


    return (
        <div>
            <NameBar user={currentUser.userInfo} />
            <ChatField />
            <SendMessage onSubmit={onAddMessage} />
        </div>
    )
};

export default RightSide;