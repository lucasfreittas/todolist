import { Container, Content, TimeLine } from './styles';
import { Header } from '../../Components/Header'
import { Profile } from '../../Components/Profile'
import { Post } from '../../Components/Post'

export function Home() {

  const database = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucasfreittas.png',
      name: 'Lucas Freitas',
      role: 'Front-end Developer',
    },
    content: [
      {type: 'paragrah', content: 'Fala Galera'},
      {type: 'paragrah', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no meu NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'hashtag', content: ['#novoprojeto', '#nlw', '#rocketseat']},
    ],
    publishedAt: new Date('2024-01-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/richard-costa.png',
      name: 'Richard Costa',
      role: 'Data Scientist',
    },
    content: [
      {type: 'paragrah', content: 'Lorem Ipsum'},
      {type: 'paragrah', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
      {type: 'link', content: 'google.com.br'},
      {type: 'hashtag', content: ['#google', '#project', '#rocketseat']},
    ],
    publishedAt: new Date('2024-01-01 20:00:00'),
  },
]

  
  return (
    <Container>
      <Header />

        <Content>
          <Profile />
          
          <TimeLine>
        
          {
           database && database.map(data => {
            return(
              <Post 
                key={data.id}
                author={data.author}
                time={data.publishedAt}
                content={data.content}
                comment={data.comment}
              />
            )
           })
          }

          </TimeLine>
        </Content>
    

    </Container>
  )
}

