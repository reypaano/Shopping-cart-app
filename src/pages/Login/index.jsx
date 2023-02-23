import { connect } from 'react-redux'
import Login from './login'
// import { loginAction } from '../../actions/authActions'


const mapDispatchToProps = dispatch => ({
  // login: (values, actions) => loginAction(values, actions)(dispatch),
  login: values =>
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: values,
      meta: {
        loadingId: -1,
      },
    })
});

export default connect(null, mapDispatchToProps)(Login)
