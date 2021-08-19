import React     from 'react';
import PropTypes from 'prop-types';

import ImgFavorite from 'Img/favorite.svg';
import ImgFavoriteSelect from 'Img/favorite-select.svg';

const Card = React.memo( (  props ) => {

    let { name ,dateOfBirth, gender, eyeColour, hairColour, image,
        alive, hogwartsStaff, hogwartsStudent, house, favorite, onClick } = props;

    let type;

    if ( hogwartsStaff == true ) {
        type = "STAFF"
    }
    else if( hogwartsStudent == true ){
        type = "ESTUDIANTE"
    }

    return (
        <div className ="dos">
            <div className= { `tres tres-uno file-info ${ house }` } >
                <div className ="image-user">
                    <img src = { image } ></img>
                </div>
            </div>
            <div className= "tres tres-dos inf">
                <div className = "cuatro cuatro-status">
                    <div className = "text-status"><p>{ `${ alive == true ? "VIVO": "FINADO"} / ${ type }` }</p></div>
                    <div className = "text-buton">
                        <button onClick = { onClick }>
                            <img src = {  favorite == true ? ImgFavoriteSelect : ImgFavorite } ></img>
                        </button>
                    </div>
                </div>

                <div className = "cuatro cuatro-name">
                    <h3>{ name }</h3>
                </div>

                <div className = "cuatro cuatro-info">
                    <p> Cumpleaños: <span> { dateOfBirth }</span></p>
                </div>
                <div className = "cuatro cuatro-info">
                    <p> Género: <span>{ gender }, {house}</span></p>
                </div>
                <div className = "cuatro cuatro-info">
                    <p> Color de ojos: <span>{ eyeColour }</span></p>
                </div>
                <div className = "cuatro cuatro-info">
                    <p> Color de pelo: <span>{ hairColour }</span></p>
                </div>
            </div>
        </div>
    )
} )

Card.propTypes = {
    name        : PropTypes.string,
    dateOfBirth : PropTypes.string,
    gender      : PropTypes.string,
    eyeColour   : PropTypes.string,
    hairColour  : PropTypes.string,
    image       : PropTypes.string,
    alive       : PropTypes.bool,
    favorite    : PropTypes.bool,
    onClick     : PropTypes.func.isRequired,
}

Card.defaultProps = {
    name        : "Harry Poter",
    dateOfBirth : "31-07-1980",
    gender      : "Male",
    eyeColour   : "Green",
    hairColour  : "black",
    alive       :  true,
    favorite    :  true,
}

export  default ( Card );
