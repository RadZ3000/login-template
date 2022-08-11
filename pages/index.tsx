import type { NextPage } from 'next'
import {
  FaCat,
  FaGoogle,
  FaLinkedin,
  FaCodepen,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div className="flex flex-column justify-center h-screen min-w-full">

      <div className="bg-sky-300 grid justify-center gap-y-28 px-12 w-2/5">
        <a href="#" className="flex mt-5 pt-6 max-w-fit">
          <FaCat className="flex justify-center lg:text-2xl xl:text-4xl" />
        </a>
        <div className="grid">
          <div>
            <h1 className="lg:text-3xl xl:text-8xl xl:leading-snug font-extrabold">Cats.</h1>
            <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Where ultimate cuteness awaits.</h1>
          </div>
          <div className="px-2">
            <p className="text-lg">Don't have an account?</p>
            <button className="bg-black text-white py-2 rounded-lg px-9 mt-2.5">Create one here</button>
          </div>
        </div>
        <div className="px-2">
          <p>Cats 2022 ©</p>
        </div>
      </div>

      <div className="grid gap-y-4 justify-center content-center text-center bg-red-200 w-3/5">
        <h1 className="text-4xl md:text-5xl font-bold mt-52">Login to your account</h1>
        <h3 className="text-md md:text-xl">Continue where you left off</h3>
        <input type="text" placeholder="Username" className="flex border-2 border-black rounded-lg px-3 py-2" />
        <input type="text" placeholder="Password" className="flex border-2 border-black rounded-lg px-3 py-2" />
        <button className="bg-black text-white py-2 rounded-lg">Login with Email</button>
        <div className="flex justify-center items-center">
          <span className="w-full border border-black"></span>
          <span className="px-4">Or</span>
          <span className="w-full border border-black"></span>
        </div>
        <button className="flex items-center gap-x-36 bg-transparent text-black border-2 rounded-lg border-black py-2 px-4 ">
          <FaGoogle className="text-sky-500 lg:text-xl xl:text-xl" />
          Login with Google
        </button>
        <h3 className="mt-36">Built by <a href="#" className="underline">Herald Adowei</a></h3>
        <div className="flex flex-row gap-x-8 justify-center pt-2">
          <a href="#"><FaLinkedin className="lg:text-xl xl:text-xl" /></a>
          <a href="#"><FaCodepen className="lg:text-xl xl:text-xl" /></a>
          <a href="#"><FaGithub className="lg:text-xl xl:text-xl" /></a>
          <a href="#"><FaInstagram className="lg:text-xl xl:text-xl" /></a>
          <a href="#"><FaTwitter className="lg:text-xl xl:text-xl" /></a>
        </div>
      </div>

    </div>
  )
}

export default Home
