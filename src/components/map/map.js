import React, { Component } from 'react';
import GoodleMapReact from 'google-map-react';
import { API } from '../../constants';

const markersArr = [
    {type: 'puppy', lan: 50.27, lng: 30.30},
    {type: 'nursery', lan: 50.28, lng: 30.31},
    {type: 'help', lan: 50.26, lng: 30.29},
    {type: 'help', lan: 50.25, lng: 30.28},
    {type: 'shop', lan: 50.29, lng: 30.32},
    {type: 'veterinary', lan: 50.24, lng: 30.27}
]

const Marker = ({ text }) => (
    <div style={{
        color: 'white',
        background: 'pink',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
}}>
{text}
</div>
);

export default class ReactMap extends Component {
    state = {
        center: {
            lat: null,
            lng: null
        },
        zoom: 11
    }

    componentDidMount() {
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
        defaultCenter={this.state.center}
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

        </GoodleMapReact>
        </div>)
    }
}
