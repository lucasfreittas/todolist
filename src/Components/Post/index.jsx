import { Container, User, Text, Textarea, CommentList } from './styles'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import { useState } from 'react'

export function Post({ author, content, time, comment}){

    const [comments, setComments] = useState([
        'Post muito bacana, hein!?'
        
    ]);

    const [ newComment, setNewComment] = useState('')

    const formatDate = format(time, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const formatDateToNow = formatDistanceToNow(time, {
        locale: ptBR,
        addSuffix: true,
    })
    

    function handleTextAreaValue(){
        setNewComment(event.target.value)
    };

    function handleCreateNewComment(){
        event.preventDefault()
        setComments([...comments, newComment])
        setNewComment('')
    }

    return(
        <Container>
            <User>
                <Avatar src={author.avatarUrl}/>
                <div>
                    <p>{author.name}</p>
                    <span>{author.role}</span>
                </div>

                <span dateTime={formatDate}>{formatDateToNow}</span>
            </User>
            <Text>
                {
                    content && content.map(text => {
                        if(text.type === 'paragrah'){
                            return <p key={text.content}>{text.content}</p>
                            
                        } else if(text.type === 'link'){
                            return <a key={text.content} href={text.content}>{text.content}</a>

                        } else if(text.type === 'hashtag'){
                            return (
                                <div key={text.content} className="hashtag-container">
                                  {text.content.map(hashtag => (
                                    <span key={hashtag} className="hashtag">{hashtag}</span>
                                  ))}
                                </div>
                              );
                            }
                            // Se o tipo for desconhecido ou não tratado, retorne null ou algo apropriado.
                            return null;
                          })
                        }
            </Text>
            <Textarea onSubmit={handleCreateNewComment}>
                <p>Deixe seu feedback</p>
                <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="10"
                    placeholder='Digite o seu texto'
                    value={newComment}
                    onChange={handleTextAreaValue}
                    >
                        
                    </textarea>
                <button
                    type='submit'
                    name='comment'
                    id='comment'
                >
                    Publicar
                </button>
            </Textarea>
            <CommentList>
                {comments && comments.map(text => {
                    return(
                        <Comment
                            key={text}
                            commentText={text}
                        />
                    )
                })}
            </CommentList>

        </Container>
    )
}