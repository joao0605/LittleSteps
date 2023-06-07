import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";
import NavButton from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from '@/components/buttons/button'
import NavButtonTeacher from "@/components/navButton/navButtonTeacher";


export default function formTest() {
    const router = useRouter()
    const data = new Date()
    const formatedDate = `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`
    const [formData, setFormData] = useState({
       
        date: formatedDate,
        breakfast: "",
        nap: "",
        lunch: "",
        pee: "",
        poop: "",
        observations: "",
        teacherId: " ",
        studentId: "647ec872b2375619cca31e95",
        courseId: " "
    });

    useEffect(() => {
        const logged = Boolean(localStorage.getItem('token'))
        if (!logged) {
            router.push('/login')
        }
    }, [])

    async function saveForm() {
        const res = await fetch("/api/manager/forms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        

        if (res.status === 200) {
            

        } else {
            console.log()
        };
    }



    const handleFormChange = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e[0]]: e[1],
          }));
         
          
        };

        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(JSON.stringify(formData))
            saveForm()
        }
   /* useEffect(() => {
    
  async function fetchData() {
      const res = await fetch('/api/manager/forms', {method: "GET"})
      const data = await res.json();
      setFormData(data);
      
    }

    fetchData();
    
  }, []);*/
    
    return (
        <div>
            <TopBar/>
            <NavButtonTeacher/>
            <form onSubmit={(e) => handleSubmit(e)}>

                <Form date={formatedDate} name={"fulana"} onChange={(e) => handleFormChange(e)}/>
                <Button>Submeter</Button>
            </form>
           
          
        </div>
    )
}
