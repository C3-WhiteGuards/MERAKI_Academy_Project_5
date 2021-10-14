const intialToken = {
  items: JSON.parse(localStorage.getItem("savedData")),
  total: 0,
};

const cart = (state = intialToken, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        items: [...state.items, payload],
        total: state.total + payload.price,
      };

    case "REMOVE_ITEM":
      let itemToRemove = state.items.find((item) => payload === item.id);
      let new_items = state.items.filter((item) => payload !== item.id);
      localStorage.setItem("savedData", JSON.stringify([...new_items]));
      //calculating the total
      let newTotal = state.total - itemToRemove.price;
      console.log(itemToRemove);
      return {
        items: [...new_items],
        total: newTotal,
      };

    default:
      return state;
  }
};

export default cart;
