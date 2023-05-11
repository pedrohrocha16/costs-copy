import styles from './Home.module.css'

import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home() {
   return (
      <section className={styles.section}>
         <h1>Bem vindo ao <span>Costs - Copy</span></h1>
         <p>Comece a gerenciar os seus projetos agora mesmo!</p>
         <LinkButton to='/newproject' text='Criar Projeto'/>
         <img src={savings} alt='costs' />
      </section>
   )
}
export default Home