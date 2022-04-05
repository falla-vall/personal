import { LOGIN, LOGOUT } from "../constants";

interface ACTION {
  type: string;
  data: {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
      picture: string;
    };
  };
}

const reducer = (state = {}, action: ACTION) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, token: action.data.token, user: action.data.user };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default reducer;
