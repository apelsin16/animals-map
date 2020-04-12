import React from 'react';
import ReactMap from "../map/map";
import Button from "../button/button";
import styles from './app.module.css';

function App() {
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
        <Button text='Регистрация' type='register' />
        <Button text=">" type='arrow' />
        <Button text="Добавить" type='new' />
        <Button text="Сообщения" type='mail' badge={true}/>
    </div>
  );
}

export default App;
