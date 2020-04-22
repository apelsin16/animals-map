import React from "react";
import styles from  './button.module.css';


function Button({text, type, badge, handleClick}) {
    return (
        <button type='button' className={styles.button + " " +  styles[`${type}`]} onClick={handleClick} >{text}
            { badge ?  <span className="badge badge-light">9</span> : null}
        </button>
    )
}

export default Button;
