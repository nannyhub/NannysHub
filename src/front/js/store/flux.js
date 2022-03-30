const BASE_URL =
  "https://nannyhub-nannyshub-8q9pa35cvws.ws-eu38.gitpod.io/api/";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nannyList: [],
      nanny: [],

    },
    actions: {
      getNannyApplyFilter: async (searchByInfo) => {
        const response = await fetch(
          "https://3001-nannyhub-nannyshub-vsm3fp1e71f.ws-eu38.gitpod.io/api/search-nannies",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(searchByInfo),
          }
        );
        const data = await response.json();
        setStore({ nannyList: data.response });
    },
      // Use getActions to call a function within a fuction
      getsingleNanny: () => {
        fetch(`${BASE_URL}nannies`)
          .then((resp) => resp.json())
          .then((data) => setStore({ nanny: data }))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },
      signUp: (data) => {
        fetch(
          "https://3001-nannyhub-nannyshub-e9zfwobe8zj.ws-eu38.gitpod.io/api/signup",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            // localStorage.setItem("jwt-token", result.token);
          })
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
