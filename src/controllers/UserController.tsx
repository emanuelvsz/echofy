import axios from '../../axios-config'

export class UserController {
  async getUserData() {
    try {
      const response = await axios.get('/user');
      console.log(response)
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw new Error('Falha ao obter dados do usuário');
    }
  }
}
