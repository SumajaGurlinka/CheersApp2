import axios from "axios";

export const login = {
  state: {
    loginData: [],
  },
  reducers: {
    setLogin: (state, payload) => {
      return {
        ...state,
        loginData: payload,
      };
    },
  },
  effects: (dispatch) => ({
    getLoginAsync: async (payload1, rootState) => {
      try {
        console.log("login entered");
        let body = (payload1);
        console.log("2",payload1);
        const url = "https://dev-auth.senecaglobal.in/get_access_token";

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await axios.post(url, body, config);
        console.log("2",response);

        const { data = undefined } = response;

        if (data) {
           localStorage.setItem('token', data.data.access_token
            );
            
          console.log("authdata",data.data.access_token);

          dispatch.login.setLogin(data);
        }
      } catch (error) {
        console.log("Api > Error >Login >  ", error.response);
        throw error;
      }
    },
  }),
};
