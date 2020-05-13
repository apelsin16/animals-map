import React, { Component } from 'react';
import ReactMap from "../map/map";
import Button from "../button/button";
import styles from './app.module.css';
import ModalRegistration from "../modal/modal";
import dogs from '../../data_dogs';
import cats from '../../data_cats';

class App extends Component {
    state = {
        modalOpen: false,
        dogsSelected: true,
        catsSelected: false
    };

    toggleModal = (e) => {
        e.preventDefault();

        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    };

    dogsSelect = (e) => {
        e.preventDefault();
        this.setState({
            dogsSelected: true,
            catsSelected: false
        })
    };

    catsSelect = (e) => {
        e.preventDefault();
        this.setState({
            dogsSelected: false,
            catsSelected: true
        })
    };

    render() {
        const { modalOpen, dogsSelected } = this.state;
        return (
            <div className="App">
                <ReactMap />
                <Button text="Кошки" type='dogs' handleClick={this.catsSelect}/>
                <Button text="Собаки" type='cats' handleClick={this.dogsSelect} />
                <select className={styles.select}>
                    {Object.values(dogsSelected ? dogs : cats).map( el =>
                        <option key={el.img}>{el.ru}</option>
                    )}
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
