// Função para definir o NOME do usuário
export const setName = ({ commit }, newName) => {
    commit("user/SET_NAME", newName); // Chama a mutação 'user/SET_NAME' com o novo nome
  };
  
// Função para definir o PESO do usuário
export const setWeight = ({ commit }, newWeight) => {
    commit("user/SET_WEIGHT", newWeight); // Chama a mutação 'user/SET_WEIGHT' com o novo peso
  };
  