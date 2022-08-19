import CheckMark from "shared/components/CheckMark";

import styles from "./filter-bar.module.css";

function FilterBar() {
    
    return (
        <div className={styles.bar}>
            <div className={styles.profile} >
            <img src="https://i.ibb.co/Rycx5jP/empty.jpg" alt="empty" className={styles.image} />
            <CheckMark classForMark={"filterBar"} />
            </div>
            <input type="text" placeholder="Search or start new chat" className={styles.input} />
        </div>
    )
};

export default FilterBar;