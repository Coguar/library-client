const LOAD_LIST = 'redux/dictionary/LOAD_LIST';
const LOAD_LIST_SUCCESS = 'redux/dictionary/LOAD_LIST_SUCCESS';
const LOAD_LIST_FAIL = 'redux/dictionary/LOAD_LIST_FAIL';
const LOAD_WORD = 'redux/dictionary/LOAD_WORD';
const LOAD_WORD_SUCCESS = 'redux/dictionary/LOAD_WORD_SUCCESS';
const LOAD_WORD_FAIL = 'redux/dictionary/LOAD_WORD_FAIL';
const ADD = 'redux/dictionary/ADD_WORD';
const ADD_SUCCESS = 'redux/dictionary/ADD_WORD_SUCCESS';
const ADD_FAIL = 'redux/dictionary/ADD_WORD_FAIL';
const DELETE = 'redux/dictionary/DELETE_WORD';
const DELETE_SUCCESS = 'redux/dictionary/DELETE_WORD_SUCCESS';
const DELETE_FAIL = 'redux/dictionary/DELETE_WORD_FAIL';
const UPDATE = 'redux/dictionary/UPDATE_WORD';
const UPDATE_SUCCESS = 'redux/dictionary/UPDATE_WORD_SUCCESS';
const UPDATE_FAIL = 'redux/dictionary/UPDATE_WORD_FAIL';

const initialState = {
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_LIST:
      return {
        ...state,
        loading: true
      };
    case LOAD_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        list: action.result
      };
    case LOAD_LIST_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case LOAD_WORD:
      return {
        ...state,
        loading: true
      };
    case LOAD_WORD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        word: action.result
      };
    case LOAD_WORD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case ADD:
      return {
        ...state,
        loading: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        word: action.payload.wordItem,
      };
    case ADD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case DELETE:
      return {
        ...state,
        loading: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    case DELETE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case UPDATE:
      return {
        ...state,
        loading: true
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        word: action.payload.wordItem,
      };
    case UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD_LIST, LOAD_LIST_SUCCESS, LOAD_LIST_FAIL],
    promise: (client) => client.get('/item/getAll')
  };
}

export function loadWord(id) {
  return {
    types: [LOAD_WORD, LOAD_WORD_SUCCESS, LOAD_WORD_FAIL],
    promise: (client) => client.get(`/item/${id}`)
  };
}

export function addWord(wordItem) {
  console.log('hello!!!!!00');
  return {
    types: [ADD, ADD_SUCCESS, ADD_FAIL],
    promise: (client) => client.post(`/item`, {data: wordItem}),
    payload: {wordItem},
  };
}

export function deleteWord(id) {
  return {
    types: [DELETE, DELETE_SUCCESS, DELETE_FAIL],
    promise: (client) => client.delete(`/item/${id}`),
  };
}

export function updateWord(id, wordItem) {
  return {
    types: [UPDATE, UPDATE_SUCCESS, UPDATE_FAIL],
    promise: (client) => client.put(`/item/${id}`),
    payload: {wordItem},
  };
}
