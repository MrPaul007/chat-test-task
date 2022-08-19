import { useSelector } from "react-redux";

import useActiveId from "shared/hooks/useActiveId";
import { getUsers } from "redux/users/users-selectors";

import MessageItem from "./MessageItem";

import styles from "./chat-field.module.css";

function ChatField() {
    const activeId = useActiveId();
    const {users} = useSelector(getUsers);

    let chatUser = activeId ==="" ? users[0] : users.find(user => user.userInfo.id === activeId);

    const elements = chatUser.messages.map(message => 
        <MessageItem
            key={message.id}
            data={message}
            photo={chatUser.userInfo.icon}
        />);

    return (
        <div className={styles.container} >
            <ul className={styles.wrapper} >
                {elements}
            </ul>
        </div>
    )
};

export default ChatField;