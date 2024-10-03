export const Api = {
  baseUrl: 'https://backend-integrar-com-frontend-k2ao.onrender.com/',

  personagem: {
    endpoint: function () {
      return Api.baseUrl + 'personagem'
    },
    readAll: async function () {
      try {
        const response = await fetch(this.endpoint(), { method: 'GET'});
        return await response.json();
      } catch (error) {
        console.error('Erro ao carregar dados: ' + this.endpoint(), error);
        throw error;
      }
    },
    delete: async function(id) {
      try {
        const response = await fetch(this.endpoint() + '/' + id, { method: 'DELETE'});
        if (!response.ok){
          throw new Error('Erro ao deletar item');
        }
      } catch (error) {
        console.error('Erro ao deletar dados: ' + this.endpoint() + '/' + id, error);
        throw error;
      }
    }
  }
}