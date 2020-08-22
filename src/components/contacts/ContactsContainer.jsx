import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Contacts from './Contacts';
import { addContactAC, deleteContactAC, updateNameAC, updatePhoneAC } from '../../redux/authReducer';


let mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addContact: (newContact, number) => {
      dispatch(addContactAC(newContact, number))
    },
    deleteContact: (id) => {
      dispatch(deleteContactAC(id))
    },
    updateName: (id,name) => {
      dispatch(updateNameAC(id,name))
    },
    updatePhone: (id, phone) => {
      dispatch(updatePhoneAC(id,phone))
    }
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Contacts);
