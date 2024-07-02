import { Header } from "@components/Header";
import { Container } from "./styles";
import { HighLight } from "@components/Highlight";


export function Players() {
    return (
        <Container>
            <Header showBackButton />

            <HighLight 
            title= "Nome da turma"
            subtitle="adicione a galera e separe o times"
            />
        </Container>
    );
}