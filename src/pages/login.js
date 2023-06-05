import Link from 'next/link'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/login.module.css'

import Logo from '../components/logoTitle/logoSecundario'
import Title from '../components/logoTitle/title'
import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '@/components/buttons/button'


export default function LoginPage() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    const router = useRouter()

    const handleFormEdit = (evento, name) => {
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

    }

    return (
        <div className={styles.background}>



            <div className='h-[100vh] flex flex-col justify-around items-center' >
                
                <Logo/>

                <LoginCard title={"Entre em sua conta"}>
                    <form className={styles.form} onSubmit={(e) => handleForm(e)}>
                        <Input type="text" placeholder="Seu e-mail" value={formData.email} required onChange={(e) => { handleFormEdit(e, 'email') }}></Input>
                        <Input type="password" placeholder="Sua senha" value={formData.password} required onChange={(e) => { handleFormEdit(e, 'password') }}></Input>
                        <Button>Entrar</Button>
                

                        <Link href={"/cadastro"}>Ainda não possui conta?</Link>
                        {error && <p className={styles.error}>{error}</p>}

                    </form>
                </LoginCard>

            <Title />
                
            </div>

        </div>
    )
}