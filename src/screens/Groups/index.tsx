import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Container, Title } from "./styles";
import { StyleSheet, View, Text } from "react-native";

export function Groups(){
    return(
    <Container>
        <Header />
        <HighLight
            title="Turmas"
            subtitle="jogue com a sua turma"
        />

        <GroupCard title="Turma 1"  />
    </Container>
    );
}