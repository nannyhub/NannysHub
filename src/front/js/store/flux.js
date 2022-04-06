const BASE_URL =
  "https://3001-nannyhub-nannyshub-u9650qoda8h.ws-eu38.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nannies: [],
      nanny: {},
      nannyList: [],
      token: null,
    },
    actions: {
      setToken: () => {
        setStore({ token: localStorage.getItem("token") });
      },
      getNannyApplyFilter: async (searchByInfo) => {
        const response = await fetch(`${BASE_URL}/search-nannies`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchByInfo),
        });
        const data = await response.json();
        setStore({ nannyList: data.response });
      },
      getNannies: () => {
        fetch(`${BASE_URL}/nannies/`)
          .then((resp) => resp.json())
          .then((data) => setStore({ nannies: data }))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },
      getsingleNanny: (nannyId) => {
        fetch(`${BASE_URL}/nannies/${nannyId}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ nanny: data }))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },

      //SIGN UP
      signUp: (data) => {
        fetch(`${BASE_URL}/signup`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
          })
          .catch((error) => console.log("error", error));
      },

      //LOG IN
      login: (email, password) => {
        let loginData = { email, password };

        fetch(`${BASE_URL}/login`, {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setStore({ token: result.token });
            localStorage.setItem("token", result.token);
          })
          .catch((error) => console.log("error", error));
      },

      //LOG OUT
      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
      },
    },
  };
};

export default getState;
