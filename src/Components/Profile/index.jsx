import { Container, User, EditUser  } from './styles'
import { PencilLine } from "@phosphor-icons/react";

export function Profile(){
    return(
        <Container>
            <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className='userCover'
            />

            <User>
                <img src="https://github.com/lucasfreittas.png"/>
                <p>Lucas Freitas</p>
                <span>Front-End Developer</span>
            </User>

            <EditUser>
                
                <button> <PencilLine size={20} /> Editar seu perfil</button>
            </EditUser>
        </Container>
    )
}