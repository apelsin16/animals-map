import React, { Component } from 'react';
import ReactMap from "../map/map";
import Button from "../button/button";
import styles from './app.module.css';
import ModalRegistration from "../modal/modal";

class App extends Component {
    state = {
       modalOpen: false
    };

    toggleModal = (e) => {
        e.preventDefault();

        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    }
    render() {
        const { modalOpen } = this.state;
        return (
            <div className="App">

                <ReactMap />
                <Button text="Кошки" type='dogs'/>
                <Button text="Собаки" type='cats' />
                <select className={styles.select}>
                    <option>Порода 1</option>
                    <option>Порода 2</option>
                    <option>Порода 3</option>
                </select>
                <Button text='Регистрация' type='register' handleClick={this.toggleModal} />
                <Button text=">" type='arrow' />
                <Button text="Добавить" type='new' />
                <Button text="Сообщения" type='mail' badge={true}/>
                { modalOpen ? <ModalRegistration handleClick={this.toggleModal} /> : null }
            </div>
        );
    }

}

export default App;
