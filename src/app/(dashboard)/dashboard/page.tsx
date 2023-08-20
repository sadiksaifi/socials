import { FC } from 'react'

interface IDashboardProps {}

const Dashboard: FC<IDashboardProps> = async ({}) => {
  return (
    <main className='pt-8'>
      <h1 className='font-bold text-5xl mb-8'>Dashboard</h1>
    </main>
  )
}

export default Dashboard
