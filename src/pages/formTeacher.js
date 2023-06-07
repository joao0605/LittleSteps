import BigMenuButton from "@/components/buttons/bigMenuButton";
import Form from "@/components/form/form";
import NavButton from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from '@/components/buttons/button'


export default function formTest() {
    const router = useRouter()

    useEffect(() => {
        const logged = Boolean(localStorage.getItem('token'))
        if (!logged) {
            router.push('/login')
        }
    }, [])

    const [formData, setFormData] = useState({
        _id: "",
		date: "",
		breakfast: "",
		nap: "",
		lunch: "",
		pee: "",
		poop: "",
		observations: "",
		teacherId: "",
		studentId: "",
		courseId: ""
    });

    const handleFormChange = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e[0]]: e[1],
          }));
          console.log(e)
          console.log(formData)
        };
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
            <NavButton/>
            <form>

                <Form onChange={(e) => handleFormChange(e)}/>
                <Button>Submeter</Button>
            </form>
           
          
        </div>
    )
}
