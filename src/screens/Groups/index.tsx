import { Header } from "@components/Header";
import { HighLight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Container, Title } from "./styles";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups(){
    const [groups, setGroups] = useState<string[]>([]);
    
    
    return(
    <Container>
        <Header />
        <HighLight
            title="Turmas"
            subtitle="jogue com a sua turma"
        />

        <FlatList 
            data={groups}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <GroupCard 
                title={item} 
                />
            )}
            contentContainerStyle={groups.length === 0 && {flex: 1}}
            ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar sua primeira turma?" />}
        />


            <Button 
            title="Cadastrar nova turma"
            />

    </Container>
    );
}