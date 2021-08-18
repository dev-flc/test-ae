import React     from 'react';
import PropTypes from 'prop-types';
import Close     from 'Img/close.svg'

const Modal = ({ handleClose, show_modal, children, label }) => {
    return (
        <div className = { `${ show_modal ? "modal display-block" : "modal display-none" }` }>
            <section className = "modal-main">
                <div className = "modal-mai-label">
                    <div className = "main-label">
                        <h3>{ label }</h3>
                    </div>
                    <div className = "main-buton">
                        <button type = "button" className = "modal-buton-close" onClick = { handleClose }>
                            <img src = { Close }/>
                        </button>
                    </div>
                </div>

                { children }

            </section>
        </div>
    );
};

Modal.propTypes = {
    label       : PropTypes.string,
    handleClose : PropTypes.func.isRequired,
    show_modal  : PropTypes.bool.isRequired
}

Modal.defaultProps = {
    label   : 'Title',
}

export  default ( Modal );
