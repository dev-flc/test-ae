import React     from 'react';
import PropTypes from 'prop-types';

const InputText = React.memo( ( { label, ...props } ) => {
    return (
        <div className = "inputs-cont">
                <p className = "modal-p"> { label } </p>
                <input
                    className = "modal-input"
                    type      = "text"
                    name      = "name"
                    { ...props }                />
        </div>
    )
} )

InputText.propTypes = {
    label    : PropTypes.string,
    onChange : PropTypes.func.isRequired,
}

InputText.defaultProps = {
    label   : 'Title',
}

export  default ( InputText );
