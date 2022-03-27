const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nannyList: [],
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
    },
  };
};

export default getState;
