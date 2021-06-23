import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder="Course Goal" 
                style={styles.input} 
                onChangeText={goalInputHandler} 
                value={enteredGoal} 
            />
            {/* <Button title="ADD" onPress={() => setOutputText('PRESSED')} /> */}
            {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />  */}
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} /> 
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems:'center',
      },
    input:{
        borderColor: 'black', 
        borderWidth:1, 
        padding:10, 
        width:'80%',
     },
});

export default GoalInput;