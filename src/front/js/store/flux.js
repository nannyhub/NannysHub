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
