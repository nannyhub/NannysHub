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
      getNannies: () => {
        fetch(
          "https://nannyhub-nannyshub-79jxz11ahr8.ws-eu38.gitpod.io/api/nannies"
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ nanny: data }))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },
    },
  };
};

export default getState;
