import React, { Component }   from "react";
import { connect }            from "react-redux";
import { bindActionCreators } from 'redux';

import { actionFilter } from 'Actions/home/filter.js'
import { actionUser } from 'Actions/home/user.js'

import Button from 'Components/button';
import Card   from 'Components/card';
import Title  from 'Components/title';

import values from 'lodash/values'

import ImgHome from 'Img/home.svg';
import Logo    from 'Img/logo.svg'

class Home extends Component {

    handleOnClickFilter = namebutton => event => {
        this.props.actionFilter( namebutton )
        this.props.actionUser( 'datatata',"propiedad",1 )
    };

    render() {

        console.log("data", this.props.filter )

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
                            onClick = { this.handleOnClickFilter( 'students' ) }
                            label   = { 'ESTUDIANTES' }
                        />
                        <Button
                            onClick = { this.handleOnClickFilter( 'staff' ) }
                            label   = { 'STAFF' }
                        />
                    </div>
                    <div className='container-cards' >
                        { values( this.props.user_data ).map( data => {
                            return (
                            <Card {...data } key = { data.id }/>
                        ) }) }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( { user_data, filter } ) => ( { user_data, filter } );

const mapDispachToProps = dispatch => ( bindActionCreators( {
    actionFilter,actionUser
}, dispatch ) );

export default connect( mapStateToProps, mapDispachToProps ) ( Home );
