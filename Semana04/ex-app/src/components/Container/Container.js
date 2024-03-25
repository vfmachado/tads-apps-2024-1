import { View } from "react-native";

export function Container(props) {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        
        }}>
            {props.children}
       </View>
    );
}