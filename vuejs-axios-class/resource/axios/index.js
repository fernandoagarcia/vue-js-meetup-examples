import MessageProvider from './MessageProvider'
import AccountProvider from './AccountProvider'

// Give arg to provider to start endpoint with specific path for example = xxx.com/api/message
export const MessageService = new MessageProvider('message')
export const AccountService = new AccountProvider('account')
