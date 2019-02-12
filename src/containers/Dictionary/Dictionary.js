import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

const styles = require('./Dictionary.scss');

export default class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
  //    port: location.port.toString(),
    };
  //  this.getData();
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    const route = location.port === '9640' ? 'testItem' : 'item';
    const request = require('superagent');
    request
      .get(`http://localhost:9000/${route}/getAll?`)
      .end((err, res) => {
        // Do something
        console.log(err);
        console.log(res);
        console.log(res.body.payload);

        if (res) {
          const payload = res.body.payload;
          this.setState({list: payload});
        }
        return [];
      });
  }

  render() {
    const {list} = this.state;
    console.log(list);
    console.log(typeof list);
    return (
      <div className={styles.home}>
        <Helmet title="Dictionary"/>
        <div className="container">
          { list && list.map(item =>
            <div key={item.itemId} >
              <Link to={`/word/${item.itemId}`}>
                {item.word}
              </Link>
            </div>
          ) }
        </div>
      </div>
    );
  }
}
