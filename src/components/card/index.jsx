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
        <div className = "card">
            <div className = { `${ alive == true ? "card-inf" : "card-inf-alive"}` }>
                <div className = { `card-img-cont ${ house }` } >
                        <img src = { image } ></img>
                </div>
                <div className ="card-text-cont">
                    <div className ="text-cont">
                        <div className = "cart-text-status">
                            <div className = "text-status"><p>{ `${ alive == true ? "VIVO": "FINADO"} / ${ type }` }</p></div>
                            <div className = "text-buton">
                                <button onClick = { onClick }>
                                    <img src = {  favorite == true ? ImgFavoriteSelect : ImgFavorite } ></img>
                                </button>
                            </div>
                        </div>
                        <div className = "cart-text-name">
                            <h3>{ name }</h3>
                        </div>
                        <div className = "cart-text-inf">
                            <p> Cumpleaños: <span> { dateOfBirth }</span></p>
                        </div>
                        <div className = "cart-text-inf">
                            <p> Género: <span>{ gender }, {house}</span></p>
                        </div>
                        <div className = "cart-text-inf">
                            <p> Color de ojos: <span>{ eyeColour }</span></p>
                        </div>
                        <div className = "cart-text-inf">
                            <p> Color de pelo: <span>{ hairColour }</span></p>
                        </div>
                    </div>
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
