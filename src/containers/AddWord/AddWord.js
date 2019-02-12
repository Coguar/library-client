import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {DictionaryForm} from 'components';
import config from '../../config';
const styles = require('./AddWord.scss');


export default class AddWord extends Component {


  addWord(data) {
    const xhr = new XMLHttpRequest();
    console.log(data);
    const body = JSON.stringify(data);
    console.log(config.MAIN_ROUTE);
    const route = Location.port === '9640' ? 'testItem' : 'item';
    xhr.open('POST', `http://localhost:9000/${route}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('accept', 'application/json');
    xhr.send(body);
    location.replace('/dictionary');
  }

  render() {
    return (
      <div className={styles.home}>
        <Helmet title="Add word"/>
        <div className="container">
          <DictionaryForm onSubmit={this.addWord.bind(this)}/>
        </div>
      </div>
    );
  }
}
