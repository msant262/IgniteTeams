import { Container, Messege } from "./styles";

type Props = {
message: string;

}

export function ListEmpty({ message }: Props){
    return (
        <Container>
            <Messege>
                { message }
            </Messege>
        </Container>
    
    );
}