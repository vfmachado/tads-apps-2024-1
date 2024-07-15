import { Button, Text, TextInput } from "react-native";
import { PAGES } from "../utils/pages-labels";
import { Container } from "../components/Container/Container";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";


export default function Login({ navigation }) {
    
    const { isLoggedIn, login } = useContext(UserContext);

    console.log({ isLoggedIn });
    if (isLoggedIn) {
        navigation.push(PAGES.DASHBOARD, { user: 'user from login' });   
    }

    const [payload, setPayload] = useState({
        email: '',
        senha: '',
    });

    const handleChange = (name, value) => {
        setPayload({
            ...payload,
            [name]: value,
        });
    }

    const submitLogin = () => {
        login(payload, 'token')
    }


    const steps = [ 'email', 'senha' ];
    const [ currentStep, setCurrentStep ] = useState(0);
    
    useEffect(() => {
        console.log({ currentStep })
    }, [currentStep]);


    return (
        <Container>
            <Text>LOGIN</Text>

            <Text>INFORME {steps[currentStep]}</Text>
            <TextInput
                style={styles.input}
                placeholder={steps[currentStep]}
                value={payload[steps[currentStep]]}
                onChangeText={(text) => handleChange(steps[currentStep], text)}
            />
            { currentStep == steps.length - 1 ? 
                <Button title="Entrar" onPress={() => submitLogin()} /> :

                <Button title="Proximo" onPress={() => setCurrentStep(currentStep + 1)} />
            }

            <Button title="Voltar" onPress={() => navigation.pop()} />
        </Container>
    );
}

const styles = {
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        margin: 10,
        padding: 10,
        width: 200
    }
}
