import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return <div className="h-full flex items-center justify-center">
    <UserButton showName/>
  </div>
}

export default Home