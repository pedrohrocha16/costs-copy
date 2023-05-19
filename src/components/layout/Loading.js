import styles from './Loading.module.css'
import loading from '../../img/loading.gif'

function Loading() {
   return(
      <div className={styles.loader_container}>
         <img src={loading} alt='carregando' className={styles.loader} />
      </div>
   )
}

export default Loading