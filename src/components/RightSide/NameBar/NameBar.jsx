import CheckMark from "shared/components/CheckMark";

import styles from "./name-bar.module.css";

function NameBar({user}) {
    const { name, icon } = user;

    return (
        <div className={styles.section} >
            <div className={styles.profile} >
                <img src={icon} alt={name} className={styles.image} />
                <CheckMark classForMark={"nameBar"} />
            </div>
            <p className={styles.name} >{name}</p>
        </div>
    )
};

export default NameBar;