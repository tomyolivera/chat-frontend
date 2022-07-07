export type TStatus = 'online' | 'offline' | 'busy' | 'invisible'

export type UserProps = {
    id: number,
    name: string,
    username: string,
    avatar: string,
    status: TStatus
}

const User = () => {
    return (
        <div>User</div>
    )
}

export default User