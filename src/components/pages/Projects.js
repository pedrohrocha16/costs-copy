import Message from "../layout/Message"
import { useLocation } from "react-router-dom"
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'

function Projects() {

   const location = useLocation()
   let message = ''
   if(location.state) {
      message = location.state.message
   }

   return (
      <div className={styles.project_container}>
         <div className={styles.tittle_container}>
            <h1>Meus Projetos</h1>
            <LinkButton to="/projects" text="teste" />
         </div>
            {message && (<Message msg={message} type='success' />)}
         <Container customClass="start">
            <p>Projetos...</p>
         </Container>
      </div>
   )  
}

export default Projects
