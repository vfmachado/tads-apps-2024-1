import { Button, Text, TextInput } from "react-native";
import { PAGES } from "../utils/pages-labels";
import { Container } from "../components/Container/Container";
import { useEffect, useState } from "react";


export default function Login({ navigate }) {
    
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
                <Button title="Entrar" onPress={() => navigate(PAGES.HOME)} /> :

                <Button title="Proximo" onPress={() => setCurrentStep(currentStep + 1)} />
            }

            <Button title="Voltar" onPress={() => navigate(PAGES.HOME)} />
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
