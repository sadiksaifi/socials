import AddFriendButton from '@/component/AddFriendButton'
import { FC } from "react"

interface IAddProps {}

const Add: FC<IAddProps> = ({}) => {
  return (
    <main className='pt-8'>
      <h1 className='font-bold text-5xl mb-8'>Add a friend</h1>
      <AddFriendButton />
    </main>
  )
}

export default Add
