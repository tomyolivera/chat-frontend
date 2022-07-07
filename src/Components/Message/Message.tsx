import { UserProps } from "../User/User"

type Props = {
    message: string,
    date: string,
    user: UserProps,
}

const Message = ({ message, date, user }: Props) => {
    return (
        <div>Message</div>
    )
}

export default Message