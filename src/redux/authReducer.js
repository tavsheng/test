import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';
const ADD_CONTACT = 'ADD-CONTACT';
const DELETE_CONTACT = 'DELETE-CONTACT';
const UPDATE_NAME = 'UPDATE-NAME';
const UPDATE_PHONE = 'UPDATE-PHONE';


let initialState = {
  phonebook: [
    { id: 1, name: "Туров Наум", phone: "89175699698" },
    { id: 2, name: "Бузинский Алихан", phone: "89174585885" },
    { id: 3, name: "Ёжов Семен", phone: "89175486998" },
    { id: 4, name: "Ёжин Савва", phone: "89178576554" },
    { id: 5, name: "Лебедев Ануфрий", phone: "89178746536" },
    { id: 6, name: "Разин Автандил", phone: "89173216598" }
    
  ],
  userId: null,
  email: null,
  login: null,
  isAuth: false

}


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_CONTACT:
      let body = action.newContact;
      let number = action.number;
      return {
        ...state,
        phonebook: [...state.phonebook, { id: Date.now(), name: body, phone: number }]
      };
      case DELETE_CONTACT:
        {
          return Object.assign({}, state, {
            phonebook: [...state.phonebook.filter(phonebook => phonebook.id !== action.id)],
          });
        }
        case UPDATE_NAME:
          return {
            ...state,
            phonebook: state.phonebook.map(p => 
                p.id === action.id ? { ...p, name: action.name} : p
            ) 
        };
        case UPDATE_PHONE:
          return {
            ...state,
            phonebook: state.phonebook.map(p => 
                p.id === action.id ? { ...p, phone: action.phone} : p
            ) 
        };

    default:
      return state;
  }
};


export const addContactAC = (newContact, number) => ({ type: ADD_CONTACT, newContact, number })

export const deleteContactAC = (id) => ({ type: DELETE_CONTACT, id })

export const updateNameAC = (id, name) => ({ type: UPDATE_NAME, id, name})

export const updatePhoneAC = (id, phone) => ({ type: UPDATE_PHONE, id, phone})


export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA, payload:
    { userId, email, login, isAuth }
});
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', { _error: message }));
  }
}

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export default authReducer;