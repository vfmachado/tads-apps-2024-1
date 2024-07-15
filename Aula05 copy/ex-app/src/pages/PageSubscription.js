import { Button, Text, TextInput } from "react-native";
import { Container } from "../components/Container/Container";
import { PAGES } from "../utils/pages-labels";
import { useState } from "react";


export default function Subscription({ navigation }) {
    
    const [dadosCliente, setDadosCliente] = useState({
        nome: '',
        email: '',
        senha: '',
    });

    const steps = ['nome', 'email', 'senha'];
    const steps2 = [ {
        placeholder: 'nome',
        key: 'nome',
        type: 'text',       
    }]

    const handleChange = (name, value) => {
        setDadosCliente({
            ...dadosCliente,
            [name]: value,
        });
    }

    const handleSubmit = () => {
        console.log(dadosCliente);
        navigation.push(PAGES.LOGIN);
    }


    return (
        <Container>
            <Text>CADASTRO</Text>

            {steps.map((step) => 
                <TextInput
                key={step}
                style={styles.input}
                placeholder={step}
                onChangeText={(text) => handleChange(step, text)}
            />
            )}

            <Button title="Cadastrar" onPress={() => handleSubmit()} />

            <Button title="Voltar" onPress={() => navigation.pop()}/>
        </Container>
    );
}


const styles = {
    input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: 200,
    }
}