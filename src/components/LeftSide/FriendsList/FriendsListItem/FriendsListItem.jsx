import { useSelector } from "react-redux";

import useActiveId from "shared/hooks/useActiveId";

import CheckMark from "shared/components/CheckMark";

import styles from "./friends-list-item.module.css"

function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'short',
    });
};

function FriendsListItem({ userInfo, lastMessage, onClick }) {
    const { id, name, icon } = userInfo;
    const { time, text } = lastMessage;

    const activeId = useActiveId();

    const getLastChatTime = () => {
        const date = String(time).split(" ")[0].split("/");
        const newTime = `${toMonthName(date[0])} ${date[1]}, ${date[2]}`  
        return newTime;
    };

    const isActive = activeId === id ? "isActive" : "";

    return (
        <li id={id} className={`${styles.item} ${isActive}`} onClick={onClick} >
            <div className={styles.wrapper} >
                <img src={icon} alt={name} className={styles.image} />
                <CheckMark classForMark={"friendListItem"} />
            </div>
            <div>
                <p className={styles.name}>{name}</p>
                <p className={styles.message}>{text}</p>
            </div>
            <p className={styles.time}>{getLastChatTime()}</p>
        </li>
    )
};

export default FriendsListItem;