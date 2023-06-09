import NavButtonStudent from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import NavButtonTeacher from "@/components/navButton/navButtonTeacher";
import MyResponsiveBump from "@/components/chart/BarsChart";


// function verificaNav(){
//     if(page="formTeacher" || page == 'listStudents' || page == 'personalDataTeacherTest'){
//         return NavButtonTeacher
//     }
// }

export default function ChartTest(props) {

    //aqui vamos verificar se o perfil é do tipo pai ou responsável e enviar a resposta como props, para modificar o formulario
    
        
    
    return (
        <div>
            <TopBar />
           <NavButtonTeacher page="chartTest"/>
            <div>
                <h1>Chart App</h1>
                <div style={{width: '100%', height: '100px'}}>
                <MyResponsiveBump/>
                </div>
            </div>
        </div>
    )
}