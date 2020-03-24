import React, { Component } from 'react';

const style = {
    loader: {
        position: 'fixed',
        zIndex: '100000',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    loaderBackdrop: {
        background: 'rgba(255, 255, 255, 0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    loaderImg: {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexFlow: 'column',
        color: '#000'
    }
}

const Loader = props => {
    return (
        <div style={style.loader}>
            <div style={style.loaderBackdrop}></div>
            <div style={style.loaderImg}>
                {/* <Image className="loaderfade" src={require('../../img/loader1.svg')} /> */}

                LOADING
                {props.label}
            </div>
        </div>
    );
}

export default Loader;