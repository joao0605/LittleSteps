import styles from '../styles/login.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '@/components/button/button'

export default function Cadastro() {
    const [formData, setFormData] = useState({
        name: '', 
        email: '',
        password: '',
    })
    
    // estado para armazenar o erro
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
        try{
            e.preventDefault()
            const response = await fetch('/api/user/cadastro', {
                method: 'POST',
                body: JSON.stringify(formData)
            })

            //armazenar token em json
            const json = await response.json()
            if(response.status !== 201) throw new Error(json)
            
            //armazenar informaçao no navegador
            setCookie('authorization', json)

            router.push('/')
        
        } catch(err){
            setError(err.message)
        }

    }
    return (
        <div className={styles.background}>
            <LoginCard  title={"Criar conta"}>
                    <form onSubmit={(e) => handleForm(e)} className={styles.form}>
                        <Input type="text" placeholder="Seu nome" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}></Input>
                        <Input type="text" placeholder="Seu e-mail" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}></Input>
                        <Input type="password" placeholder="Sua senha" required value={formData.password  } onChange={(e) => {handleFormEdit(e, 'password')}}></Input>
                        <Button>Cadastrar</Button>
                        {error && <p className={styles.error}>{error}</p>}
                        <Link href={"/login"}>Já possui conta?</Link>

                    </form>
            </LoginCard>

        </div>
    )
}