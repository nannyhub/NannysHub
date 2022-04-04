const BASE_URL =
  "https://3001-nannyhub-nannyshub-6zust9n0qzp.ws-us38.gitpod.io/api";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nannies: [],
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
