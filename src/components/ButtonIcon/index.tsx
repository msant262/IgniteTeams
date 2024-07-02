import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';


type Props = TouchableOpacityProps & {

}

export function ButtonIcon({}: Props){
    return(
        <Container>
            <Icon
            name= "home"
            type = "PRIMARY"
            />
        </Container>

    );

}