import { Avatar } from '../Avatar'
import { Container, Text, Actions, CommentWrapper } from './styles'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

export function Comment(){
    return(
        <Container>
            <CommentWrapper>
                <Avatar src="https://github.com/lucasfreittas.png" hasBorder={false}/>
                <Text>
                    <div className='profile'>
                        <p>Lucas Freitas</p>
                        <span>(Você)</span>
                        <button title='trash'><Trash size={24}/></button>
                        
                    </div>
                    <span className='timeDate'>
                        Cerca de 2h
                    </span>
                    <p>
                        Muito bom Devon, parabéns!!
                    </p>
                    
                </Text>
            </CommentWrapper>
            <Actions>
                <div>
                    <ThumbsUp size={20}/> 
                    <p>Aplaudir</p>
                    <span>•&nbsp;&nbsp;&nbsp;03</span>
                </div>
            </Actions>
            
        </Container>
    )
}