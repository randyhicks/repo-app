import React, { Component } from 'react';
import '../App.css';
// import PropTypes from 'prop-types';

function SelectLanguage (props) {
  var languages = ['all', 'java', 'python', 'ruby', 'javascript'];
  return (
      <ul className='languages'>
        {languages.map((lang) => {
          return ( 
            <li 
              style = {lang === props.selectedLanguage ? {color: 'red'} : {color: 'black'}}
              onClick={props.onSelect.bind(null, lang)}
              key={lang}>
              {lang}
            </li> 
          );
        })}
      </ul>
  )    
};

class Popular extends Component {
  constructor(props) {
    super(props);
    this.updateLanguage = this.updateLanguage.bind(this);
    this.state = {
      selectedLanguage: 'all',
      repos: null
    };
  }
  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang
      }
    });
  }
  render () {
    return (
      <div>
        <SelectLanguage 
        selectedLanguage={this.state.selectedLanguage} 
        onSelect={this.updateLanguage} />
      </div>
    );
  }
};

export default Popular;