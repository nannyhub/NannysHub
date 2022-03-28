const BASE_URL =
  "https://nannyhub-nannyshub-8q9pa35cvws.ws-eu38.gitpod.io/api/";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nanny: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getsingleNanny: () => {
        fetch(`${BASE_URL}nannies`)
          .then((resp) => resp.json())
          .then((data) => setStore({ nanny: data }))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },
    },
  };
};

export default getState;
