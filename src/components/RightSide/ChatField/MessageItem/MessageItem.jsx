import styles from "./message-item.module.css";

function MessageItem({ data, photo }) {
    const { time, route, text } = data;

    const setClass = route === "outcome" ? "outcomeMessage" : "incomeMessage";

    return (
        <li className={`${setClass} messageItem`} >
            {/* <img src={photo} alt={"photo"} className={"image"} /> */}
            <p className={styles.text}>{text}</p>
            <p className={styles.time}>{time}</p>
        </li>
    )
};

export default MessageItem;