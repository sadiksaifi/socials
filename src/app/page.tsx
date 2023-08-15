import { FC } from "react"
import Button from "@/component/ui/Button"
import Link from "next/link"

interface IHomeProps {}

const Home: FC<IHomeProps> = async ({}) => {
  return (
    <div>
      <Button type='button'>
        <Link href='/login'>Login</Link>
      </Button>
    </div>
  )
}

export default Home
