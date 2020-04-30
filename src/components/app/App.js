import React, { Component } from 'react';
import ReactMap from "../map/map";
import Button from "../button/button";
import styles from './app.module.css';
import ModalRegistration from "../modal/modal";
import {API} from "../../constants";
import home from "../map/location.svg";
import GoodleMapReact from "google-map-react";
import { Marker } from "../map/map";

const markersArr = [
    {type: 'puppy', lan: 50.47, lng: 30.50},
    {type: 'nursery', lan: 50.48, lng: 30.61},
    {type: 'help', lan: 50.46, lng: 30.52},
    {type: 'help', lan: 50.45, lng: 30.63},
    {type: 'shop', lan: 50.49, lng: 30.44},
    {type: 'veterinary', lan: 50.44, lng: 30.55},
    {type: 'puppy', lan: 55.6, lng: 37.7},
    {type: 'nursery', lan: 55.7, lng: 37.5},
    {type: 'help', lan: 55.8, lng: 37.8},
]

class App extends Component {
    state = {
        center: {
            lat: null,
            lng: null
        },
        zoom: 11,
        modalOpen: false
    };

    componentDidMount() {
        this.getPosition()
    }

    getPosition() {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                center: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            })
        })
    }

    toggleModal (e) {
        e.preventDefault();
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    }
    render() {
        const { modalOpen, center, zoom } = this.state;
        return (
            <div className="App">
                {/*<GoodleMapReact*/}
                {/*    bootstrapURLKeys={{*/}
                {/*        key: API,*/}
                {/*    }}*/}
                {/*    defaultZoom={zoom}*/}
                {/*    center={center}*/}
                {/*>*/}

                {/*    {markersArr.map((el, idx) => {*/}
                {/*        return (*/}
                {/*            <Marker key={idx}*/}
                {/*                    lat={el.lan}*/}
                {/*                    lng={el.lng}*/}
                {/*                    text={el.type}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    })}*/}
                {/*    /!*<Marker lat={center.lat} img={home} lng={center.lng} />*!/*/}
                {/*</GoodleMapReact>*/}
                <ReactMap />
                {/*<Button text="Кошки" type='dogs'/>*/}
                {/*<Button text="Собаки" type='cats' />*/}
                {/*<select className={styles.select}>*/}
                {/*    <option>Порода 1</option>*/}
                {/*    <option>Порода 2</option>*/}
                {/*    <option>Порода 3</option>*/}
                {/*</select>*/}
                {/*<Button text='Регистрация' type='register' handleClick={this.toggleModal} />*/}
                {/*<Button text=">" type='arrow' />*/}
                {/*<Button text="Добавить" type='new' />*/}
                {/*<Button text="Сообщения" type='mail' badge={true}/>*/}
                { modalOpen ? <ModalRegistration handleClick={this.toggleModal} /> : null }
            </div>
        );
    }

}

export default App;
