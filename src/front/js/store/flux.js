const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nanny: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      getNannies: () => {
        fetch(
          "https://nannyhub-nannyshub-79jxz11ahr8.ws-eu38.gitpod.io/api/nannies"
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ nanny: data }))
          .catch((error) => console.log("Baby is crying", error));
      },
    },
  };
};

export default getState;
