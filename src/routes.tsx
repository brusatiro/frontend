import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';import Tasks from './pages/Tasks';
import TasksDetail from './pages/Tasks/Detail'
import TasksForm from './pages/Tasks/Form'


// Defina a função como AppRoutes em vez de Routes
const AppRoutes: React.FC = () => {
    return (
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/tarefas" element={<Tasks />} />
          <Route path="/tarefas_cadastro" element={<TasksForm />} />
          <Route path="/tarefas_cadastro/:id" element={<TasksForm />} />
          <Route path="/tarefas/:id" element={<TasksDetail />} />
        </Routes>
    );
  };
  
  export default AppRoutes;
  


// const AppRoutes = () => {
//     return(
//         <BrowserRouter>
//             <Route element = { Home }  path="/" />
//             <Route element = { Tasks }  path="/tasks" />
//         </BrowserRouter>
//     )
//  }
 
//  export default AppRoutes;

