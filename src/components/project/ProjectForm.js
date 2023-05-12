import {useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitBtn from '../form/SubmitBtn'
import styles from './ProjectForm.module.css'


function ProjectForm({btnText}) {

const [categories, setCategories] = useState([])

   useEffect(() => {
      fetch('http://localhost:5000/categories', {
         method:"GET",
         headers: {
            'Content-Type': "application/json"
         },
      }).then((resp) => resp.json())
         .then((data) => {
            setCategories(data)
         })
         .catch((err) => console.log(err))

   }, []) 

   return (
      <form className={styles.form}>
         <Input
         text="Nome do projeto"
         type="text"
         name='name'
         placeholder="Nome"
         />
         <Input
         text="Valor do orçamento"
         type="number"
         name='Budget'
         placeholder="Valor"
         />
        <Select 
        text='Selecione a categoria'
        name='category_id'
        options={categories}
        />
         <SubmitBtn text={btnText}/>
      </form>
   )
}

export default ProjectForm