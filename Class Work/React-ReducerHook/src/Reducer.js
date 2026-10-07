export function reducer(state,action){
    switch (action.type) {
  case "data":
    return state + action.payload;
  case "increment":
    return state + 1;
  case "decrement":
    return state - 1;
  case "double":
    return state * 2;
  case "half":
    return state / 2;
  default:
    return state;
}
  }