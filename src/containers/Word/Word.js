import React, {Component} from 'react';
import Helmet from 'react-helmet';
const styles = require('./Word.scss');


export default class Word extends Component {
  constructor(props) {
    super(props);
    const pathArr = location.pathname.toString().split('/');
    console.log(location.port);
    this.state = {
      id: pathArr[2],
      word: '',
      translate: '',
      route: location.port === '9640' ? 'testItem' : 'item',
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    const request = require('superagent');
    request
      .get(`http://localhost:9000/${this.state.route}/${this.state.id}?`)
      .end((err, res) => {
        // Do something
        console.log(err);
        console.log(res);

        if (res) {
          this.setState({word: res.body.word, translate: res.body.translate});
        }
        return [];
      });
  }

  delete() {
    const request = require('superagent');

    request
      .del(`http://localhost:9000/${this.state.route}/${this.state.id}?`)
      .end((err, res) => {
        // Do something
        console.log(err);
        console.log(res);
        location.replace('/dictionary');
        return [];
      });
    location.replace('/dictionary');
  }

  render() {
    const {word, translate} = this.state;
    return (
      <div className={styles.home}>
        <Helmet title="Word"/>
        <div className="container">
          <div>
            {word}
          </div>
          <div>
            {translate}
          </div>
          <button className="btn btn-delete" onClick={this.delete.bind(this)} style={{marginLeft: 15}}>
            <i className="fa fa-ban"/> Delete
          </button>
        </div>
      </div>
    );
  }
}
