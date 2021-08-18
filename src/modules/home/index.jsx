import React, { Component } from "react";

import Button from 'Components/button';
import Card   from 'Components/card';
import Title  from 'Components/title';

import ImgHome from 'Img/home.svg';
import Logo    from 'Img/logo.svg'

class Home extends Component {

    handleOnClickFilter = filter => event => {
        console.log( "filter", filter )
    };

    render() {
        const listCards = [
            'tarjeta-1', 'tarjeta-2', 'tarjeta-3', 'tarjeta-4',
            'tarjeta-1', 'tarjeta-2', 'tarjeta-3', 'tarjeta-4',
            'tarjeta-1', 'tarjeta-2', 'tarjeta-3', 'tarjeta-4',
            'tarjeta-1', 'tarjeta-2', 'tarjeta-3', 'tarjeta-4'
        ]
        return (
            <div className = "home">
                <div>
                    <img className = 'image-header' src = { ImgHome } />
                </div>
                <div className = 'container-body'></div>
                <div className = 'container-general'>
                    <Title
                        logo  = { Logo }
                        title = "Selecciona tu filtro"
                    />
                    <div className='buttons'>
                        <Button
                            onClick = { this.handleOnClickFilter( 'ESTUDIANTES' ) }
                            label   = { 'ESTUDIANTES' }
                        />
                        <Button
                            onClick = { this.handleOnClickFilter( 'STAFF' ) }
                            label   = { 'STAFF' }
                        />
                    </div>
                    <div className='container-cards' >
                        { listCards.map( card => (
                            <Card />
                        ) ) }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
