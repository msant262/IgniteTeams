import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
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

            <ButtonIcon />
        </Container>
    );
}