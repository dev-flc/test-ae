import React     from 'react';
import PropTypes from 'prop-types';

const Button = React.memo( ( { label, ...props } ) => {
    return (
        <div  className= "container-buton">
            <button className='buton' {...props}>
                { label }
            </button>
        </div>
    )
} )

Button.propTypes = {
    label   : PropTypes.string,
    onClick : PropTypes.func.isRequired,
}

Button.defaultProps = {
    label   : 'Title',
}

export  default ( Button );
