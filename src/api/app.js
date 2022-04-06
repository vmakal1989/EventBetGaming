import axios from "axios";

const instance = axios.create({
  baseURL: 'https://poker.evenbetpoker.com/api/web/',
});

export default {
  authUser(data) {
    return instance.post('v2/login?clientId=default', {
      clientId: "default",
      ...data
    })
  },
  refrashToken(token) {
    return instance.post('auth/token?clientId=default', {
        clientId: "default",
        refreshToken: token   
    }) 
  },
  balanceRequest(token) {
    return instance.get(`v2/users/me/balance?clientId=default&auth=${token}`) 
  },
  gamesRequest() {
    return instance.get(`v2/casino/games?clientId=default`)
  },
  demoGameRequest(id) {
    return instance.post(`v2/casino/games/${id}/session-demo?clientId=default`, {
      clientId: "default",
      gameId: id   
  })
  }
}