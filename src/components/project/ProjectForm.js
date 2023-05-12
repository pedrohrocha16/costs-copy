function ProjectForm() {
   return (
      <form>
         <div>
            <input type='text' placeholder='Nome do projeto' />
         </div>
         <div>
            <input type='number' placeholder='Orçamento' />
         </div>
         <div>
            <select>
               <option disabled>Selecione a categoria</option>
            </select>
         </div>
         <div>
            <input type='submit' value='Criar Projeto' />
         </div>
      </form>
   )
}

export default ProjectForm