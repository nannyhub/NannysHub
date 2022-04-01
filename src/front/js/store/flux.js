const BASE_URL =
  "https://3001-nannyhub-nannyshub-6ntl7vyx412.ws-us38.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nannies: [],
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
      getNannies: (nannyId) => {
        fetch(`${BASE_URL}/nannies/`)
          .then((resp) => resp.json())
          .then((data) => getActions().setNannies(data))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },
      getsingleNanny: (nannyId) => {
        let localNannies = getActions().getLocalNannies();

        fetch(`${BASE_URL}/nannies/${nannyId}`)
          .then((resp) => resp.json())
          .then((data) => getActions().setNannies([...localNannies, data]))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },
      setNannies: (nannies) => {
        let store = getStore();
        setStore({ ...store, nannies: nannies });
      },
      setNanny: (nanny) => {
        let nannies = getStore().nannies.concat(nanny);
        getActions().setNannies(nannies);
      },
      getLocalNanny: (nannyId) => {
        let store = getStore();
        return store.nannies.filter((nanny) => nanny.id == nannyId);
      },
      getLocalNannies: () => {
        return getStore().nannies;
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
          })
          .catch((error) => console.log("error", error));
      },
    },
  };
};

export default getState;
