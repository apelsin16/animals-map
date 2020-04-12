import React, { Component } from 'react';
import GoodleMapReact from 'google-map-react';
import { API } from '../../constants';

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
            lat: 52.95,
            lng: 32.33
        },
        zoom: 11
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
            <Marker
        lat={this.state.center.lat}
        lng={this.state.center.lng}
        text={'Puppy'}
        />
        </GoodleMapReact>
        </div>)
    }
}
