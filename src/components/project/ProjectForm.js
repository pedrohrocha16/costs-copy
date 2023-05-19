import {useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitBtn from '../form/SubmitBtn'
import styles from './ProjectForm.module.css'


function ProjectForm({handleSubmit ,btnText, projectData}) {

const [categories, setCategories] = useState([])
const [project, setProject] = useState (projectData || {})

   useEffect(() => {
      fetch('http://localhost:5000/categories', {
         method:"GET",
         headers: {
            'Content-Type': "application/json"
         },
      })
         .then((resp) => resp.json())
         .then((data) => {
            setCategories(data)
         })
         .catch((err) => console.log(err))
   }, []) 

   const submit = (e) => {
      e.preventDefault()
       handleSubmit(project)
   }

   function handleChange(e){
      setProject({...project, [e.target.name]: e.target.value})
   }

   function handleCatergory(e) {
    setProject({...project,
       category: {
         id: e.target.value,
         name: e.target.options[e.target.selectedIndex].text,
    }})
   }

   return (
      <form onSubmit={submit} className={styles.form}>
         <Input
            text="Nome do projeto"
            type="text"
            name='name'
            placeholder="Nome"
            handleOnChange={handleChange}
            value={project.name ? project.name : ''}
         />
         <Input
            text="Valor do orçamento"
            type="number"
            name='budget'
            placeholder="Valor"
            handleOnChange={handleChange}
            value={project.budget}
         />
        <Select 
            text='Selecione a categoria'
            name='category_id'
            options={categories}
            handleOnChange={handleCatergory}
            value={project.category ? project.category.id : ''}
        />
         <SubmitBtn text={btnText}/>
      </form>
   )
}

export default ProjectForm