import { Container } from './styles';

export function Avatar({ hasBorder = true, src }){
    return(
        <Container
            className={hasBorder ? 'withBorder' : 'withoutBorder'}
            src={src}
        />
    )
}

