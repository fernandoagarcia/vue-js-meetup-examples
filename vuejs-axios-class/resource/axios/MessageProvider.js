import HttpRequest from './HttpRequest'

class MessageProvider extends HttpRequest {
  fetchMessages (data) {
    return this.fetch('/message', data)
  }
}

export default MessageProvider
