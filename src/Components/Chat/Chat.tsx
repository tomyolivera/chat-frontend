import { UserProps } from "../User/User"

type Props = {
    users: UserProps[],
}

const Chat = ({ users }: Props) => {
    return (
        <div>Chat</div>
      )
}

export default Chat