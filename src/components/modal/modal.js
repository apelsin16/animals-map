import React from 'react';
import styles from './modal.module.css';

const ModalRegistration = ({ handleClick }) => {
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={handleClick}>Закрыть</button>
                <h2 className={styles.modalHeader}>Регистрация</h2>
                <div className={styles.modalBody}>
                    <form className="form mb-4">
                        <input type="text" placeholder="Имя" name='name' className='form-control mb-2'/>
                        <input type="email" placeholder="Почта" name='email' className='form-control mb-2'/>
                        <input type="password" placeholder="Пароль" name='password' className='form-control mb-2'/>
                        <input type="password" placeholder="Повторите пароль" name='passwordRepeat' className='form-control mb-2'/>
                        <div className="row justify-content-center">
                            <input type="submit" name="Зарегистрироваться" className='btn btn-primary '/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default ModalRegistration;
