const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      nannies: [],
      nanny: {},
      nannyList: [],
      token: null,
    },
    actions: {
      setToken: () => {
        setStore({ token: localStorage.getItem("token") });
      },
      getNannyApplyFilter: async (searchByInfo) => {
        const response = await fetch(
          `${process.env.BACKEND_URL}/search-nannies`,
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
          const response = await fetch(`${process.env.BACKEND_URL}/nannies`);
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

      //SIGN UP
      signUp: (data) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          "First name": `${data["First name"]}`,
          "Last name": `${data["Last name"]}`,
          Email: `${data["Email"]}`,
          Password: `${data["Password"]}`,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${process.env.BACKEND_URL}/signup`, requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      //LOG IN
      login: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(`${process.env.BACKEND_URL}/login`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setStore({ token: result.token });
            localStorage.setItem("token", result.token);
          })
          .catch((error) => console.log("error", error));
      },

      //LOG OUT
      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
      },
    },
  };
};

export default getState;
