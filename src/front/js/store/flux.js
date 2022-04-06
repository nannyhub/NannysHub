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

        fetch(`${process.env.BACKEND_URL}/login/`, {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            setStore({ token: result.token });
            console.log("aqui", getStore().token);
          })
          .catch((error) => console.log("error", error));
      },
      getNannyApplyFilter: async (searchByInfo) => {
        const response = await fetch(
          `${process.env.BACKEND_URL}/search-nannies/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(searchByInfo),
          }
        );
        const data = await response.json();
        setStore({ nannies: data.response });
      },
      getNannies: async () => {
        try {
          const response = await fetch(`${process.env.BACKEND_URL}/nannies/`);
          const data = await response.json();
          setStore({ nannies: data });
        } catch (error) {
          console.log("Error retrieving Nanny", error);
        }
      },
      getsingleNanny: (nannyId) => {
        fetch(`${process.env.BACKEND_URL}/nannies/${nannyId}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ nanny: data }))
          .catch((error) => console.log("Error retrieving Nanny", error));
      },
      signUp: (data) => {
        fetch(`${process.env.BACKEND_URL}/signup/`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
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
