import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { HighLight } from "@components/Highlight";
import { Input } from "@components/Input";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";


export function Players() {
    
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['Marcos']);


    return (
        <Container>
            <Header showBackButton />

            <HighLight 
            title= "Nome da turma"
            subtitle="adicione a galera e separe o times"
            />

            <Form>
                <Input 
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />
                
                <ButtonIcon 
                    icon="add"
                />
            </Form>

            <HeaderList>
                <FlatList 
                    data={['Time A', 'Time B', 'Time C']}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter 
                        title={item}
                        isActive={item === team}
                        onPress={() => setTeam(item)}
                        />
                )}
                horizontal
                />
                <NumberOfPlayers>
                {players.length}
                </NumberOfPlayers>
            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <PlayerCard 
                    name={item}
                    onRemove={() => {}}
                    />
                )}
                ListEmptyComponent={() =>(
                    <ListEmpty 
                        message="Ainda não há pessoas nesse time"
                    />

                )}
                contentContainerStyle={[
                    {paddingBottom: 100},
                    players.length === 0 && {flex: 1}
                ]}
            />
            <Button 
                title="Remover Turma"
                type="SECONDARY"
            />
        </Container>
    );
}