import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from "../actions/index";

class ContactList extends Component {

  showList (){
    return this.props.contacts.map ((contact) => {
      return (
        <li onClick={() => this.props.select (contact)} key={contact.id}>{contact.name}</li>
      );
    });
  }
  render () {
    return (
      <ol>
        {this.showList ()}
      </ol>
    );
  }
}

function mapStateToProps (state){
  return {
    contacts: state.contacts
  };
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);
