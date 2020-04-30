import React, { Component } from 'react';
import GoodleMapReact from 'google-map-react';
import { API } from '../../constants';
import home from './location.svg';

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

const Marker = ({ text, img }) => (
    <div style={{
        // color: 'white',
        // background: 'pink',
        // padding: '15px 10px',
        width: '35px',
        display: 'inline-flex',
        // textAlign: 'center',
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
}}>
{text ? text : <img src={img} alt="Marker"/>}
</div>
);

export default class ReactMap extends Component {
    state = {
        center: {
            lat: null,
            lng: null
        },
        zoom: 11
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

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoodleMapReact
                    bootstrapURLKeys={{
                        key: API,
                    }}
                    defaultZoom={this.state.zoom}
                    center={this.state.center}
                        >

                    {markersArr.map((el, idx) => {
                        return (
                            <Marker key={idx}
                                lat={el.lan}
                                lng={el.lng}
                                text={el.type}
                            />
                        )
                    })}
                    <Marker lat={this.state.center.lat} img={home} lng={this.state.center.lng} />
                </GoodleMapReact>
            </div>
        )
    }
}
