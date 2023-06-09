
import { useRouter } from 'next/router'
import { useState, useEffect} from 'react'
import styles from '../styles/login.module.css'

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


import Logo from '../components/logoTitle/logoSecundario'
import Title from '../components/logoTitle/title'
import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '@/components/buttons/button'


export default function LoginPage() {
    const router = useRouter()
    const [state, setState] = useState({ password: "", email: "" })
    const [error, setError] = useState('')

    const notify = () => toast("deu errado");
    
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
            localStorage.setItem("userType", corpo.userType)
            // setCookie('authorization', corpo

               router.push("/")

           

        } else {
            notify
            setError("Usuário ou senha incorretos")
        };
    }

    useEffect(() => {
        const userType = localStorage.getItem('userType')
       
        if(userType  === "userteachers"){

            router.push("/manager/data")

        } else if( userType === "userstudents"){

            router.push("/student/data")
        }

    }, [])


const handleSubmit = (e) => {
    e.preventDefault()
    login()
}
const handleChange = (value, field) => {
    setState(s => ({ ...s, [field]: value }))

    
}
/*
*/





/*const handleFormEdit = (evento, name) => {
    setFormData({
        ...formData,
        [name]: evento.target.value
    })

}

const handleForm = async (e) => {
    //para prevenir que a página seja carregada
    try {
        e.preventDefault()
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        //armazenar token em json
        const json = await response.json()
        if (response.status !== 200) throw new Error(json)

        //armazenar informaçao no navegador
        setCookie('authorization', json)

        router.push('/')

    } catch (err) {
        setError(err.message)
    }

}*/

return (
    <div className={styles.background}>



        <div className='h-[100vh] flex flex-col justify-around items-center' >

            <Logo />

            <LoginCard title={"Entre em sua conta"}>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <Input type="email" placeholder="Seu e-mail" value={state.email} required onChange={(e) => { handleChange(e.target.value, 'email') }}></Input>
                    <Input type="password" placeholder="Sua senha" value={state.password} required onChange={(e) => { handleChange(e.target.value, 'password') }}></Input>
                    <Button>Entrar</Button>



                    {error && <p className={styles.error}>{error}</p>}

                </form>
            </LoginCard>
            
        <ToastContainer />

            <Title />

        </div>

    </div>
)

}