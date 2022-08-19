import FriendsList from "./FriendsList";
import TopBar from "./FilterBar";

import styles from "./left-side.module.css";

function LeftSide() {
    
    return (
    <div className={styles.section}>
        <TopBar />
        <div className={styles.wrapper} >
            <h2 className={styles.title} >Chats</h2>
            <FriendsList />
        </div>
    </div>
    )
};

export default LeftSide;