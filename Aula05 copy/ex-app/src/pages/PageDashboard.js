import { Button, Text, View } from "react-native";
import { Container } from "../components/Container/Container";
import { PAGES } from "../utils/pages-labels";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


export default function Dashboard({ navigation, route }) {
    const routeParams = route.params;

    const { user } = useContext(UserContext);

    return (
        <Container>
            <Text>DASHBOARD</Text>
            <Text>FROM LOGIN: {JSON.stringify(routeParams)}</Text>
            <Text>{user.email}</Text>
        </Container>
    );
}
