import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import Contacts from './Contacts';
import { addContactAC, deleteContactAC, updateContactAC } from '../../redux/authReducer';


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
    updateContact: (id,name,phone) => {
      dispatch(updateContactAC(id,name,phone))
    }
  }
}
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Contacts);
