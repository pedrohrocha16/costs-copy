import styles from './Message.module.css'
import {useState, useEffect} from 'react'

function Message({msg, type}) {
     
   const [visivel, setVisivel] = useState(false)

   useEffect(() =>{

      if(!msg){
         setVisivel(false)
         return
      }

      setVisivel(true)

      const timer = setTimeout(() => {
         setVisivel(false)
      }, 3000)

      return() => clearTimeout(timer)
   }, [msg])
   
   return(
      <>
         {visivel && (
            <div className={`${styles.message} ${styles[type]}`} >{msg}</div>
         )}
      </>
   )
}

export default Message