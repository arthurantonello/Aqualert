export const getName = (state) => {
    return state.name;
  };
  
  export const getWeight = (state) => {
    return state.weight;
  };
  
export const getConsumption = (state) => {
  return (state.weight ?? 0) * 25
}