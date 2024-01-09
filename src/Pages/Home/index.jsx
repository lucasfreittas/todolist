import { Container, Content, TimeLine } from './styles';
import { Header } from '../../Components/Header'
import { Profile } from '../../Components/Profile'
import { Post } from '../../Components/Post'

export function Home() {
  
  return (
    <Container>
      <Header />

        <Content>
          <Profile />
          
          <TimeLine>
        
            <Post />

          </TimeLine>
        </Content>
    

    </Container>
  )
}

