export const addToCart = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "addToCart",
      payload: amount,
    });
  };
};

export const remove = (amount) => {

    return (dispatch) => {
        dispatch({
          type: "remove",
          payload: amount,
        });
      };
  }


