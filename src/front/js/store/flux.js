const BASE_URL =
  "https://3001-nannyhub-nannyshub-7cvcpg5ab0a.ws-eu38.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nannies: [],
      nannyList: [],
      nanny: {},
    },
    actions: {
      login: (email, password) => {
        console.log("Log In");
        console.log("email", email);
        console.log("password", password);
        let loginData = { email, password };

        fetch(
          "https://3001-nannyhub-nannyshub-dpzmqeo0q2j.ws-eu38.gitpod.io/api/login",
          {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((result) => {
            setStore({ token: result.token });
            console.log("aqui", getStore().token);
          })
          .catch((error) => console.log("error", error));
      },
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
        // let localNannies = getActions().getLocalNannies();
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
          "https://3001-nannyhub-nannyshub-7cvcpg5ab0a.ws-eu38.gitpod.io/api/signup",
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
