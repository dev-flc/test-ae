import React     from 'react';
import PropTypes from 'prop-types';

const Card = React.memo( ( { estatus, nombre ,cumpleanios,genero, ojos, pelo } ) => (
    <div className = "card">
        <div className ="card-inf">
            <div className ="card-img-cont">
                    <img src = "http://hp-api.herokuapp.com/images/harry.jpg"></img>
            </div>
            <div className ="card-text-cont">
                <div className ="text-cont">
                    <div className = "cart-text-status">
                        <div className = "text-status"><p>{ estatus }</p></div>
                        <div className = "text-buton">
                            <button>boton</button>
                        </div>
                    </div>
                    <div className = "cart-text-name">
                        <h3>{ nombre }</h3>
                    </div>
                    <div className = "cart-text-inf">
                        <p> Cumpleaños: <span> { cumpleanios }</span></p>
                    </div>
                    <div className = "cart-text-inf">
                        <p> Género: <span>{ genero }</span></p>
                    </div>
                    <div className = "cart-text-inf">
                        <p> Color de ojos: <span>{ ojos }</span></p>
                    </div>
                    <div className = "cart-text-inf">
                        <p> Color de pelo: <span>{ pelo }</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
) )

Card.propTypes = {
    estatus     : PropTypes.string,
    nombre      : PropTypes.string,
    cumpleanios : PropTypes.string,
    genero      : PropTypes.string,
    ojos        : PropTypes.string,
    pelo        : PropTypes.string,
}

Card.defaultProps = {
    estatus     : "VIVO / ESTUDIANTE",
    nombre      : "Harry Poter",
    cumpleanios : "31-07-1980",
    genero      : "Male",
    ojos        : "Green",
    pelo        : "black",
}

export  default ( Card );
