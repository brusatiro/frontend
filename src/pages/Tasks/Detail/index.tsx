import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../../services/api';
import moment from 'moment';
import './index.css';

interface ITask{
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created_at: Date;
    updated_at: Date;
}
const Detail: React.FC = () => {
 
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const [task, setTask] = useState<ITask>()

    // async function findTask(){
    //     const response = await api.get(`/tarefas/${id}`)
    //     console.log(response)
    //     setTask(response.data)
    // }

    function back(){
        navigate(-1)
    }

    async function findTask(){
        try {
          const response = await api.get(`/tasks/${id}`)
          console.log(response)
          setTask(response.data)
        } catch (error) {
          console.error(error)
          // faça algo apropriado para o erro, como exibir uma mensagem de erro na tela
        }
      }
      
    useEffect(() => {
        findTask()
    }, [id])
    return (
        <div className="container">
            <br />
            <div className="task-header">
                <h1>Detalhes da Tarefa</h1>
                <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{task?.title}</Card.Title>

                    <Card.Text>
                        {task?.description}
                        <br/>
                        {task?.finished ? "Finalizado" : "Pendente"}
                        <br/>
                        <strong>Data de Cadastro: </strong>
                        {moment(task?.created_at).format('DD/MM/YYYY')}
                        <br/>
                        <strong>Data de Atualização: </strong>
                        {moment(task?.updated_at).format('DD/MM/YYYY')}
                        <br/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
 
export default Detail;