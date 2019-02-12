import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import dictionaryFormValidation from './DictionaryFormValidation';
import * as surveyActions from 'redux/modules/survey';

const styles = require('./DictionaryForm.scss');

@connect(() => ({}),
  dispatch => bindActionCreators(surveyActions, dispatch)
)
@reduxForm({
  form: 'form',
  fields: ['word', 'translate'],
  validate: dictionaryFormValidation,
})
export default
class DictionaryForm extends Component {
  static propTypes = {
    active: PropTypes.string,
    asyncValidating: PropTypes.bool.isRequired,
    fields: PropTypes.object.isRequired,
    dirty: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    invalid: PropTypes.bool.isRequired,
    pristine: PropTypes.bool.isRequired,
    valid: PropTypes.bool.isRequired,
  };


  render() {
    const {
      fields: {word, translate},
      handleSubmit,
      resetForm,
      } = this.props;
    return (
      <div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className={'form-group' + (word.error && word.touched ? ' has-error' : '')}>
            <label htmlFor={word.name} className="col-sm-2">{'Word'}</label>
            <div className={'col-sm-8 ' + styles.inputGroup}>
              <input type="text" className="form-control" id={word.name} {...word}/>
              {word.error && word.touched && <div className="text-danger">{word.error}</div>}
            </div>
          </div>

          <div className={'form-group' + (translate.error && translate.touched ? ' has-error' : '')}>
            <label htmlFor={translate.name} className="col-sm-2">{'translate'}</label>
            <div className={'col-sm-8 ' + styles.inputGroup}>
              <input type="text" className="form-control" id={translate.name} {...translate}/>
              {translate.error && translate.touched && <div className="text-danger">{translate.error}</div>}
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button className="btn btn-success" onClick={handleSubmit}>
                <i className="fa fa-paper-plane"/> Submit
              </button>
              <button className="btn btn-warning" onClick={resetForm} style={{marginLeft: 15}}>
                <i className="fa fa-undo"/> Reset
              </button>
            </div>
          </div>
        </form>


      </div>
    );
  }
}
