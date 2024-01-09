import { Container, User, Text, Textarea } from './styles'

export function Post(){
    return(
        <Container>
            <User>
                <img src="https://github.com/lucasfreittas.png"/>
                <div>
                    <p>Lucas Freitas</p>
                    <span>Front-End Developer</span>
                </div>

                <span>Públicado há 1h</span>
            </User>
            <Text>
                <p>
                    Fala Galera

                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no meu NLW Return,
                    evento da Rocketseat. O nome do projeto é DoctorCare
                </p>
                <a href="#">jane.design/doctorcare</a>
                <div className='hashtags'>
                    <span> #novoprojeto </span> 
                    <span> #nlw </span>
                    <span> #rocketseat </span>
                </div>
            </Text>
            <Textarea>
                <p>Deixe seu feedback</p>
                <textarea name="comment" id="comment" cols="30" rows="10" placeholder='Digite seu texto'></textarea>
                <button>Publicar</button>
            </Textarea>
        </Container>
    )
}