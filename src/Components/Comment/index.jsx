import { useState } from 'react'
import { Avatar } from '../Avatar'
import { Container, Text, Actions, CommentWrapper } from './styles'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

export function Comment({commentText, onDeleteComment}){

    const [claps, setClaps] = useState(0)

    function handleClapCounter(){
        setClaps(claps + 1)
    }

    function handleDeleteComment(){
        onDeleteComment(commentText)
    };

    return(
        <Container>
            <CommentWrapper>
                <Avatar src="https://github.com/lucasfreittas.png" hasBorder={false}/>
                <Text>
                    <div className='profile'>
                        <p>Lucas Freitas</p>
                        <span>(Você)</span>
                        <button title='trash' onClick={handleDeleteComment}><Trash size={24}/></button>
                        
                    </div>
                    <span className='timeDate'>
                        Cerca de 2h
                    </span>
                    <p>
                        {commentText}
                    </p>
                    
                </Text>
            </CommentWrapper>
            <Actions onClick={handleClapCounter}>
                <div>
                    <ThumbsUp size={20}/> 
                    <p>Aplaudir</p>
                    <span>•&nbsp;&nbsp;&nbsp;{claps}</span>
                </div>
            </Actions>
            
        </Container>
    )
}