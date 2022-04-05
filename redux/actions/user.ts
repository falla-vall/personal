import { LOGIN, LOGOUT } from "../constants";

interface USER {
  id: string;
  name: string;
  email: string;
  picture: string;
}

export const login = (token: string, user: USER) => {
  return {
    type: LOGIN,
    data: {
      token,
      user,
    },
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
