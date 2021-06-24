import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // const [outputText, setOutputText] = useState('Not Pressed Button');
  const [courseGoals, setCourseGoals] = useState([]); //Empty Array has been passed as initial value
  const [isAddMode, setAddMode] = useState(false);
  // function goalInputHandler(enteredText){
  //   setEnteredGoal(enteredText);
  // }

  const addGoalHandler = (goalTitle) => {
    // console.log(enteredGoal);
    // setCourseGoals([...courseGoals, enteredGoal]); // Should be a snapshot of the current state but not 100% guarantee
    // setCourseGoals(currentGoals => [...courseGoals, enteredGoal]); 
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      {id: Math.random().toString(), value: goalTitle}
    ]); // Supports Key and Id
    setAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    }); 
  };

  const cancelGoalAdditionHandler = () => {
    setAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button 
        title="Add New Goal" 
        onPress={() => setAddMode(true)} 
      />
      <GoalInput 
        onAddGoal={addGoalHandler}
        visible={isAddMode} 
        onCancel={cancelGoalAdditionHandler}
      />
      {/* <ScrollView >
        {courseGoals.map((goal) => <View style={styles.listItem} key={goal}><Text>{goal}</Text></View>)}
      </ScrollView> */}
        <FlatList 
          keyExtractor={(item, index) => item.id} 
          data={courseGoals} 
          renderItem={
            itemData => 
              <GoalItem 
                id={itemData.item.id}
                onDelete={removeGoalHandler} 
                title={itemData.item.value}
              />
          }
        /> 
    </View> 
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60,
  },
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
  listItem:{
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10, //Such prop not available in css
  },
});
