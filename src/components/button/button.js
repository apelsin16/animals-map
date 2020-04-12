import React from "react";
import styles from  './button.module.css';


function Button({text, type, badge}) {
    return (
        <button className={styles.button + " " +  styles[`${type}`]} >{text}
            { badge ?  <span className="badge badge-light">9</span> : null}
        </button>
    )
}

export default Button;
