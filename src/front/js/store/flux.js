const BASE_URL =
  "https://3001-nannyhub-nannyshub-mgz3l2ictim.ws-eu38.gitpod.io/api/";
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
      getsingleNanny: (nannyId) => {
        fetch(`${BASE_URL}nannies/${nannyId}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ nanny: data }))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },
    },
  };
};

export default getState;
