// Getter para obter o nome do usuário do estado global
export const getName = (state) => {
    return state.name;
  };
  
// Getter para obter o peso do usuário do estado global
export const getWeight = (state) => {
    return state.weight;
  };
  
// Getter para calcular e retornar o consumo ideal de água do usuário
export const getConsumption = (state) => {
  return (state.weight ?? 0) * 25 // Se o peso for nulo ou indefinido, retorna 0
}