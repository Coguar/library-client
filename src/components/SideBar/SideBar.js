import React, { Component } from 'react';
import {Link} from 'react-router';

const styles = require('./SideBar.scss');


export default class SideBar extends Component {
  render() {
    return (
      <div className={styles.sideBar}>
        <div>
          <Link to={`/dictionary`} className={styles.barItem} >
            Список слов
          </Link>
        </div>
        <div>
          <Link to={`/add`} className={styles.barItem}>
            Добавить слово
          </Link>
        </div>
      </div>
    );
  }
}
