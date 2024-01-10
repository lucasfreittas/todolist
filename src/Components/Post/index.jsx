import { Container, User, Text, Textarea, CommentList } from './styles'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../Comment'
import { Avatar } from '../Avatar'

export function Post({ author, content, time}){
    const formatDate = format(time, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const formatDateToNow = formatDistanceToNow(time, {
        locale: ptBR,
        addSuffix: true,
    })
    

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
                            return <p key={text.id}>{text.content}</p>
                            
                        } else if(text.type === 'link'){
                            return <a key={text.id} href={text.content}>{text.content}</a>

                        } else if(text.type === 'hashtag'){
                            return (
                                <div key={text.id} className="hashtag-container">
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
            <Textarea>
                <p>Deixe seu feedback</p>
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder='Digite seu texto'></textarea>
                <button>Publicar</button>
            </Textarea>
            <CommentList>
                <Comment />
            </CommentList>

        </Container>
    )
}