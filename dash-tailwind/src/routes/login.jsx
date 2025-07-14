
import { NavLink, Link } from 'react-router';


function Login() {
  

  return (
    <>
      <div className="container mx-auto p-8 md:w-3/5 lg:h-4/5 ">
        <div className="bg-black/50 rounded-lg shadow-lg p-6 text-white">
        <div className='text-left text-xl italic  text-green-400'>MYCompany</div>
        <div className='text-left text-2xl font-bold mb-2'>Sign In</div>
        <form>
          <label className="block text-gray-300 mb-2 text-left" htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Name"
            name="username"
            className="w-full p-2 mb-4 border border-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-gray-300 mb-2 text-left" htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="........"
            name="password"
            className="w-full p-2 mb-4 border border-gray-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        
          <button
            type="submit"
            className="w-full bg-black hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-gray-100 mt-4">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a>
        </div>
        <nav>
          <Link to="/dash">Dashboard</Link>
        </nav>

        </div>
      </div>
    </>
  )
}

export default Login
