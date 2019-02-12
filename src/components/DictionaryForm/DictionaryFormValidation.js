import memoize from 'lru-memoize';
import {createValidator, required, maxLength} from 'utils/validation';

const dictionaryFormValidation = createValidator({
  word: [required, maxLength(40)],
  translate: [required],
});
export default memoize(10)(dictionaryFormValidation);
