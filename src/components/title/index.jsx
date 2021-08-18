import React     from 'react';
import PropTypes from 'prop-types';

const Title = React.memo( ( { title, logo } ) => (
    <div>
        <div className = "logo">
            <img src = { logo }/>
        </div>
        <h1 className = 'title'>{ title }</h1>
    </div>
) )

Title.propTypes = {
    title : PropTypes.string,
    logo  : PropTypes.any.isRequired
}

Title.defaultProps = {
    title : "Titulo",
}

export  default ( Title );

