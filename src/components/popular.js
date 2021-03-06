import React, { Component } from 'react';
import '../App.css';
import api from '../utils/api.js';
import PropTypes from 'prop-types';
import Loading from './loading.js';

var RepoGrid = (props) => {
  return (
    <ul className='popular-list'>
      {props.repos.map( (repo, index) => {
        return (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt={'Avatar for ' + repo.owner.login} />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

function SelectLanguage (props) {
  var languages = ['all', 'java', 'python', 'ruby', 'javascript'];
  return (
      <ul className='languages'>
        {languages.map((lang) => {
          return ( 
            <li 
              style = {lang === props.selectedLanguage ? {color: '#b0021b'} : {color: 'black'}}
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

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(lang) {
    this.setState(function () {
      return {
        selectedLanguage: lang,
        repos: null
      }
    });

    api.fetchPopularRepos(lang)
      .then(function (repos) {
        this.setState(() => {
          return {
            repos: repos
          }
        })
      }.bind(this));
  }
  render () {
    return (
      <div>
        <SelectLanguage 
        selectedLanguage={this.state.selectedLanguage} 
        onSelect={this.updateLanguage} />
        {!this.state.repos
          ? <Loading />
          : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
};

export default Popular;