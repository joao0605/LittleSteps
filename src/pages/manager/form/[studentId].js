import Form from "@/components/form/form";
import TopBar from "@/components/navButton/topBar";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import NavButtonTeacher from "@/components/navButton/navButtonTeacher";
import ButtonSubmit from "@/components/buttons/buttonSubmit";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export default function formTest() {
  const router = useRouter()
  const date = new Date()
    let day = date.getDate()
    let month = date.getMonth()+1
    
    if (day < 10){
      day =`0${day}`
    }
    if (month < 10){
      month =`0${month}`
    }
    const formatedDate = `${date.getFullYear()}-${month}-${day}`
    const notify = () => toast("deu certo");
    
  const studentId = router.query.studentId
  const [studentData, setStudentData] = useState(null)
  const [formData, setFormData] = useState({

    date: formatedDate,
    breakfast: "",
    nap: "",
    lunch: "",
    pee: "",
    poop: "",
    observations: "",
    teacherId: " ",
    studentId: studentId,
    courseId: " "
  });


  useEffect(() => {
    const userType = localStorage.getItem('userType')
   

    if (userType === "userstudents") {

      localStorage.removeItem("token");
      localStorage.removeItem("userType");
      router.push("/login");

    } else if (userType !== "userteachers") {

      router.push("/login")
    }
  }, [])

 

  useEffect(()=> {
    console.log(router)

    async function fetchData() {

      if (typeof router.query.studentId !== 'undefined'){


      
        
        const res = await fetch(
          `/api/student/users/${studentId}`,
          { method: "GET" }
        );
        if (res.status != 200) {
          console.log("id do estudante", studentId)
          console.log("estudante não encontrado");
        } else {
          const data = await res.json();
          console.log(data)
          setStudentData(data);
        }
      }
    }

      fetchData()

  
}, [router.query.studentId])

  async function saveForm() {
    const res = await fetch("/api/manager/forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })


    if (res.status === 200) {
      console.log("salvou o form")

      
      
    } else {
      console.log("não salvou")
      const notify = () => toast("deu errado");
      
    };
  }


 
  



  const handleFormChange = (e) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e[0]]: e[1],
    }));
console.log(studentId)

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
      <TopBar />
      <NavButtonTeacher page="formTeacher" />
      <form onSubmit={(e) => handleSubmit(e)}>

        <Form date={formatedDate} name={studentData && studentData.name} onChange={(e) => handleFormChange(e)} />
        <ButtonSubmit>Submeter</ButtonSubmit>
        <ToastContainer/>
      </form>


    </div>
  )
}
