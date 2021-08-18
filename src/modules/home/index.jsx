import React, { Component }   from "react";
import { connect }            from "react-redux";
import { bindActionCreators } from 'redux';

import { actionFilter } from 'Actions/home/filter.js'
import { actionUser } from 'Actions/home/user.js'

import Button from 'Components/button';
import Card   from 'Components/card';
import Title  from 'Components/title';

import values from 'lodash/values'
import filter from 'lodash/filter'

import ImgHome from 'Img/home.svg';
import Logo    from 'Img/logo.svg'

class Home extends Component {

    handleOnClickFilter = namebutton => event => {
        this.props.actionFilter( namebutton )
        this.props.actionUser( 'datatata',"propiedad",1 )
    };

    render() {
        let { filters, user_data } = this.props;
        let { hogwartsStudent, hogwartsStaff } = filters;
        let new_data_user;

        if ( hogwartsStudent == false && hogwartsStaff == false) {
            new_data_user = values( user_data )
        }
        else if ( hogwartsStudent == true && hogwartsStaff == false) {
            new_data_user = filter( user_data, { 'hogwartsStudent' : true } )
        }
        else if ( hogwartsStudent == false && hogwartsStaff == true) {
            new_data_user = filter( user_data, { 'hogwartsStaff' : true } )
        }

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
                        { new_data_user.map( data => {
                            return (
                            <Card {...data } key = { data.id }/>
                        ) }) }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( { user_data, filter } ) => ( { user_data, filters: filter } );

const mapDispachToProps = dispatch => ( bindActionCreators( {
    actionFilter,actionUser
}, dispatch ) );

export default connect( mapStateToProps, mapDispachToProps ) ( Home );
