import { Container, Text, Actions } from './styles'
import { Trash } from '@phosphor-icons/react'

export function Comment(){
    return(
        <Container>
            <img src="https://github.com/lucasfreittas.png"/>
            <Text>
                <div className='profile'>
                    <p>Lucas Freitas</p>
                    <span>você</span>
                    <Trash size={20}/>
                </div>
                <span className='time'>
                    Cerca de 2h
                </span>
                <p>
                    Muito bom Devon, parabéns!!
                </p>
            </Text>
            <Actions>
    
            </Actions>
            
        </Container>
    )
}