import NavButtonStudent from "@/components/navButton/navButtonStudent";
import TopBar from "@/components/navButton/topBar";
import NavButtonTeacher from "@/components/navButton/navButtonTeacher";
import MyResponsiveBump from "@/components/chart/BarsChart";
import styles from '../../components/chart/chart.module.css'

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
            <NavButtonStudent page="listHistoryReportStudent" />
            <div>
                <h1 className={styles.chartText}>Gráfico do Aluno</h1>
                <div className={styles.chart}>
                    <MyResponsiveBump />
                </div>
            </div>
        </div>
    )
}