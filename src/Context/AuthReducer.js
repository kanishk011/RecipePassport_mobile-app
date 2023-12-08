// authReducer.js
const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload, isAuthenticated: true, error: null };
    case 'TOGGLE_TERMS':
      return { ...state, agreedToTerms: !state.agreedToTerms };
    case 'TOGGLE_MODAL':
      return { ...state, modalVisible: !state.modalVisible };
    case 'SIGN_IN':
      return { ...state, user: action.payload, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case "CLEAR_STATE":
      return { ...state, agreedToTerms: null, error: null, };
    // case 'SIGN_OUT':
    //   return { ...state, user: null, error: null };
    default:
      return state;
  }
};

export default AuthReducer;
