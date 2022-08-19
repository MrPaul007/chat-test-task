import { useState } from 'react';

import styles from "./send-message.module.css";

function SendMessage({onSubmit}) {
    const [text, setText] = useState('');
    


    const  handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
        setText("");
    };
    
    const handleChange = ({target}) => {
        setText(target.value)
    };

    return (
        <div className={styles.container} >
            <form onSubmit={handleSubmit} className={styles.form} >
                <input 
                    type="any" 
                    value={text}
                    placeholder="Type your message" 
                    className={styles.input} 
                    onChange={handleChange}
                />
                <button type="submit" className={styles.button} >send</button>
            </form>
        </div>
    )
};

export default SendMessage;