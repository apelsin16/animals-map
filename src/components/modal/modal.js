import React from 'react';
import styles from './modal.module.css';
import Button from "../button/button";

const ModalRegistration = ({ handleClick }) => {
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={handleClick}>Закрыть</button>
                <h2 className={styles.modalHeader}>Регистрация</h2>
                <div className={styles.modalBody}>
                    <form className="form container">
                        <div className="row form-group d-flex justify-content-around mb-4">
                            <input type="text" placeholder="Имя" name='name' className='form-control col-5'/>
                            <input type="email" placeholder="Почта" name='email' className='form-control col-5'/>
                        </div>
                        <div className="row form-group d-flex justify-content-around  mb-4">
                            <input type="password" placeholder="Пароль" name='password' className='form-control col-5'/>
                            <input type="password" placeholder="Повторите пароль" name='passwordRepeat' className='form-control col-5'/>
                        </div>
                        <div className="row justify-content-center">
                            <Button type="submit" text="Сохранить" handleClick={handleClick}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ModalRegistration;
