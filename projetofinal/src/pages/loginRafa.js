import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const [loggedIn, setLoggedIn] = useState(false)
    
    useEffect(() => {
    setInterval(() => {
      setLoggedIn(Boolean(localStorage.getItem("token")))
    }, 1000);
  }, [])


  return (
    <div className="">
      {
        !loggedIn ? (
          <div className='flex flex-row'>
            <Login />
            <Signup />
          </div>
        ) : (
          <Pagina />
        )
      }
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

function Login() {
  const [state, setState] = useState({ password: "", email: "" })

  async function login() {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })

    if (res.status === 200) {
      const corpo = await res.json()
      localStorage.setItem("token", corpo.token)
    } else {
      toast.error('NOPE!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login()
  }
  const handleChange = (value, field) => {
    setState(s => ({ ...s, [field]: value }))
  }


  return (
    <form onSubmit={handleSubmit} className='bg-slate-300 rounded-xl p-10 flex flex-col gap-4'>
      <label >email</label>
      <input
        name='ola'
        value={state.email}
        onChange={(e) => handleChange(e.target.value, "email")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <label >password</label>
      <input
        value={state.password}
        onChange={(e) => handleChange(e.target.value, "password")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
    </form>
  )
}
function Signup() {
  const [state, setState] = useState({ password: "", email: "", passwordConf: "" })

  async function login() {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(state)
    })

    if (res.status === 200) {
      console.log("NICE")
    } else {
      console.log("NOT NICE")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login()
  }
  const handleChange = (value, field) => {
    setState(s => ({ ...s, [field]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className='bg-slate-300 rounded-xl p-10 flex flex-col gap-4'>
      <label >email</label>
      <input
        value={state.email}
        onChange={(e) => handleChange(e.target.value, "email")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <label >password</label>
      <input
        value={state.password}
        onChange={(e) => handleChange(e.target.value, "password")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <label >password Conf</label>
      <input
        value={state.passwordConf}
        onChange={(e) => handleChange(e.target.value, "passwordConf")}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
    </form>
  )
}
function Pagina() {

  const handleClick = () => {
    localStorage.removeItem("token")
  }

  useEffect(() => {
    async function authorize() {
      if (localStorage.getItem("token")) {
        const res = await fetch("/api/posts", {
          method: "GET",
          headers: {
            "authorization": localStorage.getItem("token")
          }
        })

        if (res.status === 200) {
          console.log("NICE")
        } else {
          console.log("NOT NICE")
        }
      }
    }
    authorize()
  }, [])

  return (
    <div>
      Ola da pagina
      <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Logout</button>
    </div>
  )
}

export default App;