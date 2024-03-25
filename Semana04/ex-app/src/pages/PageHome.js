import { Button, Text, View } from "react-native";
import { Container } from "../components/Container/Container";
import { PAGES } from "../utils/pages-labels";


export default function Home({ navigate }) {
    
    return (
        <Container>
            <Text>Home</Text>
            <Button title="Login" onPress={() => navigate(PAGES.LOGIN)} />
            <Button title="Cadastro" onPress={() => navigate(PAGES.SUBSCRIPTION)} />
        </Container>
    );
}
