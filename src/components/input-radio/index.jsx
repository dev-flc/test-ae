import React     from 'react';
import PropTypes from 'prop-types';

const InputRadio = React.memo( ( { label,valueone,valuetwo, labelone,labeltwo, ...props } ) => {
    return (
        <div className = "inputs-cont ">
                <p className = "modal-p"> { label } </p>
                <div className ="container-radio">
                    <div className = "radio-inf">
                        <input
                            type  = "radio"
                            value = { valueone }
                            { ...props }
                        /> <div className = "modal-radio"> { labelone } </div>
                    </div>
                    <div className = "radio-inf">
                        <input
                            type  = "radio"
                            value = { valuetwo }
                            { ...props }
                        /> <div className = "modal-radio"> { labeltwo } </div>
                    </div>
                </div>
        </div>
    )
} )

InputRadio.propTypes = {
    labelone   : PropTypes.string,
    onChange : PropTypes.func.isRequired,
}

InputRadio.defaultProps = {
    labelone   : 'Title1',
    labeltwo   : 'Title2',
}

export  default ( InputRadio );
