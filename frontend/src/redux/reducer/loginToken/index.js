const intialToken = {
    token: "",
  };
  
  const loginReduser = (state = intialToken, { type, payload }) => {
    switch (type) {
      case "SET_TOKEN":
        return { token: state+payload };
  
      default:
        return state;
    }
  };
  
  export default loginReduser;