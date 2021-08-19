import React, { Component }   from "react";
import { connect }            from "react-redux";
import { bindActionCreators } from 'redux';

import { actionFilter }              from 'Actions/home/filter.js'
import { actionUser, actionAddUser } from 'Actions/home/user.js'

import Button     from 'Components/button';
import Card       from 'Components/card';
import Title      from 'Components/title';
import Modal      from 'Components/modal';
import InputText  from 'Components/input-text';
import InputRadio from 'Components/input-radio';

import values from 'lodash/values'
import filter from 'lodash/filter'

import ImgHome     from 'Img/home.svg';
import Logo        from 'Img/logo.svg'
import FavoriteDro from 'Img/favorite-dro.svg'
import UserAdd     from 'Img/user-add.svg'
import Trash       from 'Img/trash.svg'

class Home extends Component {

    state = {
        open_dropdown   : false,
        gender          : "female",
        show_modal      : false,
        hogwartsStudent : true,
        hogwartsStaff   : false,
        name            : "",
        dateOfBirth     : "",
        eyeColour       : "",
        hairColour      : "",
    };


    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickFavorite = () => {
        this.setState( state => ( { open_dropdown : !state.open_dropdown } ) );
    }

    handleChangeRadio = type => e => {
        if ( type == "student" ) {
            this.setState( { gender : e.currentTarget.value } );
        }
        else if ( type == "position") {
            this.setState( {
                hogwartsStudent : e.currentTarget.value == "hogwartsStudent" ? true : false,
                hogwartsStaff   : e.currentTarget.value == "hogwartsStaff" ? true : false
            } );
        }
    }

    handleChangeText = type => e => {
        this.setState( { [ type ] : e.currentTarget.value })
    }

    handleOnClickFilter = namebutton => () => {
        this.props.actionFilter( namebutton );
    };

    handleClickSaveUser = () => {
        let { gender, hogwartsStudent, hogwartsStaff, name, dateOfBirth, eyeColour, hairColour } = this.state;

        let data = {
            gender,
            hogwartsStudent,
            hogwartsStaff,
            name,
            dateOfBirth,
            eyeColour,
            hairColour,
            favorite : false,
            alive    : false,
            house    : "Gryffindor",
            image    : "http://hp-api.herokuapp.com/images/harry.jpg"
        };

        this.props.actionAddUser( data )
        this.setState( {
            gender          : "female",
            show_modal      : false,
            hogwartsStudent : true,
            hogwartsStaff   : false,
            name            : "",
            dateOfBirth     : "",
            eyeColour       : "",
            hairColour      : "",
        } )
    }

    handleClickModal = () => {
        this.setState( state => ( { show_modal : !state.show_modal } ) );
    }

    handleClickOutside = event => {
        if ( this.container.current && !this.container.current.contains( event.target ) ) {
            this.setState( { open_dropdown : false } );
        }
    };

    handleOnClickFilter = namebutton => () => {
        this.props.actionFilter( namebutton );
    };

    handleOnClickFavorite = idUserFavorite => () => {
        let { user_data, actionUser } = this.props;
        let user_favorites = filter( user_data, { 'favorite' : true } )
        if( user_favorites.length < 5 || user_data[ idUserFavorite ].favorite === true) {
            actionUser( !user_data[ idUserFavorite ].favorite,"favorite",idUserFavorite )
        } else {
            alert( "Ups... solo puede haber 5 favoritos" )
        }
    };

    render() {

        let { filters, user_data } = this.props;
        let { open_dropdown, show_modal } = this.state;
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

        let data_favorite_users = filter ( new_data_user, { 'favorite' : true })

        return (
            <div className = "home">
                <Modal
                    show_modal  = { show_modal }
                    label       = { "Agrega un personaje"}
                    handleClose = { this.handleClickModal }
                >
                    <div className = "modal-body">
                        <div className = "modal-inputs">
                            <InputText
                                label    = "NOMBRE"
                                onChange = { this.handleChangeText("name")}
                                value    = { this.state.name }
                            />
                            <InputText
                                label = "CUMPLEAÑOS"
                                onChange = { this.handleChangeText("dateOfBirth")}
                                value    = { this.state.dateOfBirth }
                            />
                        </div>
                        <div className = "modal-inputs">
                            <InputText
                                label = "COLOR DE OJOS"
                                onChange = { this.handleChangeText("eyeColour")}
                                value    = { this.state.eyeColour }
                            />
                            <InputText
                                label = "COLOR DE PELO"
                                onChange = { this.handleChangeText("hairColour")}
                                value    = { this.state.hairColour }
                            />
                        </div>
                        <div className = "modal-inputs">
                            <InputRadio
                                label    = "GÉNERO"
                                labelone = "Mujer"
                                labeltwo = "Hombre"
                                name     = "gender"
                                valueone = "female"
                                valuetwo = "male"
                                onChange = { this.handleChangeRadio("student") }
                            />

                            <InputRadio
                                label    = "POSICIÓN"
                                labelone = "Estudiante"
                                labeltwo = "Staff"
                                name     = "posicion"
                                valueone = "hogwartsStudent"
                                valuetwo = "hogwartsStaff"
                                onChange = { this.handleChangeRadio("position") }
                            />
                        </div>
                        <div className = "modal-inputs">
                            <p>FOTOGRAFIA</p>
                        </div>
                        <div className = "modal-inputs">
                            <Button
                                onClick = { this.handleClickSaveUser }
                                label   = { 'GUARDAR' }
                            />
                        </div>
                    </div>
                </Modal>
                <div className="container" ref = { this.container }>
                    <div className = { `container-butons ${ open_dropdown && "container-butons-color" }` }>
                        <button className="dropdown-button" onClick = { this.handleClickFavorite } >
                            <div>FAVORITOS</div>  <img src = { FavoriteDro } ></img>
                        </button>
                        <button className="dropdown-button" onClick = { this.handleClickModal } >
                            <div>AGREGAR</div>  <img src = { UserAdd } ></img>
                        </button>
                        {   open_dropdown && (
                            <div className="dropdown">
                                <ul>
                                    { data_favorite_users.map( user => {
                                        let { name, image } = user;
                                        return (
                                            <li className="container-list" key = { user.id } >
                                                <div className = "list-img"><img src = { image }></img></div>
                                                <div className = "list-name">{ name }</div>
                                                <div className = "list-trash">
                                                    <button onClick = { this.handleOnClickFavorite( user.id ) } >
                                                        <img src = { Trash } ></img>
                                                    </button>
                                                </div>
                                            </li>
                                        ) } )
                                    }
                                </ul>
                            </div>
                        ) }
                    </div>
                </div>
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

                    <div className='uno' >
                        { new_data_user.map( data => {
                            return (

                            <Card {...data } key = { data.id } onClick = { this.handleOnClickFavorite( data.id ) }/>
                            ) } ) }
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = ( { user_data, filter } ) => ( { user_data, filters : filter } );

const mapDispachToProps = dispatch => ( bindActionCreators( { actionFilter, actionUser, actionAddUser }, dispatch ) );

export default connect( mapStateToProps, mapDispachToProps ) ( Home );
