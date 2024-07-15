import { Button, Text, View } from "react-native";
import { Container } from "../components/Container/Container";
import { PAGES } from "../utils/pages-labels";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";


export default function Home({ navigation }) {
    const { user, isLoggedIn } = useContext(UserContext);

    return (
        <Container>
            <Text>Home</Text>
            <Text>USER: {user?.email}</Text>
            <Text>LOGGED? {isLoggedIn}</Text>
            <Button title="Login" onPress={() => navigation.push(PAGES.LOGIN)} />
            <Button title="Cadastro" onPress={() => navigation.push(PAGES.SUBSCRIPTION)} />
        </Container>
    );
}
