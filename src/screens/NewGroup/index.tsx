import { Input } from "@components/Input";
import {HighLight} from "@components/Highlight";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Container, Content, Icon } from "./styles";

export function NewGroup(){
    return(
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />

                <HighLight
                title='Nova Turma'
                subtitle='Crie uma nova turma para adicionar as pessoas'
                />

                <Input 
                placeholder="Nome da turma"
                />

                <Button 
                title="Criar"
                style={{ marginTop: 20 }}
                />
            </Content>
        </Container>
    );
}