import { Container } from './styles'
import  igniteLogo  from '../../assets/ignite-logo.svg'

export function Header(){
    return(
        <Container>
            <img src={igniteLogo} alt="" />
        </Container>
    )
}