import HttpRequest from './HttpRequest'

class AccountProvider extends HttpRequest {
  fetchUser (data) {
    return this.fetch('/user', data)
  }
  // Add other account services heres
}

export default MessageProvider
