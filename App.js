import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, Button, TouchableOpacity } from 'react-native'

const App = () => {
  const [todo_before_school, setTodoBeforeSchools] = useState([
    {
      id: '1',
      name : 'Make My Bed',
    },
    {
      id: '2',
      name : 'Say My Prayer',
    },
    {
      id: '3',
      name : 'Get Dressed',
    },
    {
      id: '4',
      name : 'Do My Hair',
    },
  ]);
  
  const [todo_after_school, setTodoAfterSchool] = useState([
    {
      id: '1',
      name : 'Homework',
    },
    {
      id: '2',
      name : 'Read 20 Minutes',
    },
    {
      id: '3',
      name : 'Exercise',
    },
  ]);

  const [todo_before_bed, setTodoBeforeBed] = useState([
    {
      id: '1',
      name : 'Brush My Teeth',
    },
    {
      id: '2',
      name : 'Shower or Bath',
    },
    {
      id: '3',
      name : 'Set Out Clothes',
    },
    {
      id: '4',
      name : 'Give Hugs',
    },
  ]);

  const deleteItemTodosBeforeSchool = (id) => {
    setTodoBeforeSchools((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id)
    })
  }

  const deleteItemTodosAfterSchool = (id) => {
    setTodoAfterSchool((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id)
    })
  }

  const deleteItemTodosBeforeBed = (id) => {
    setTodoBeforeBed((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id)
    })
  }

  const submitNewTodo = () => {
    setTodoBeforeSchools((prevTodos) => {
      return[
        {name: 'New Todo Today', key: (Math.random() + 4).toString()},
        ...prevTodos
      ]
    })
  }
  
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.title}>
          <Text style={styles.title_text}>TO DO LIST TODAY</Text>
        </View>

        {/* TO DO LIST BEFORE SCHOOL */}
        <View style={styles.todo_title}>
          <Text style={[styles.todo_title_text, {color: 'red'}]}>Before School</Text>
          <TouchableOpacity onPress={submitNewTodo}>
            <Text style={styles.add_todo}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={todo_before_school}
          renderItem={({ item }) => (
            <View style={styles.itemlist}>
              <View style={{flexDirection: 'row'}}>
                <View style={{height: 25, width: 25, backgroundColor: 'red'}}/>
                <Text style={styles.itemlist_text}>{item.name}</Text>
              </View>
              <Button
                onPress={() => deleteItemTodosBeforeSchool(item.id)}
                title="delete"
                color="red"
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />

        <View style={{height: 1, width: '100%', backgroundColor: 'grey', marginTop: 25}}/>  

        {/* TO DO LIST AFTER SCHOOL */}
        <View style={styles.todo_title}>
          <Text style={[styles.todo_title_text, {color: 'blue'}]}>After School</Text>
        </View>

        <FlatList
          data={todo_after_school}
          renderItem={({ item }) => (
            <View style={styles.itemlist}>
              <View style={{flexDirection: 'row'}}>
                <View style={{height: 25, width: 25, backgroundColor: 'blue'}}/>
                <Text style={styles.itemlist_text}>{item.name}</Text>
              </View>
              <Button
                onPress={() => deleteItemTodosAfterSchool(item.id)}
                title="delete"
                color="blue"
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />

        <View style={{height: 1, width: '100%', backgroundColor: 'grey', marginTop: 25}}/>

        {/* TO DO LIST BEFORE BED */}
        <View style={styles.todo_title}>
          <Text style={[styles.todo_title_text, {color: 'green'}]}>Before Bed</Text>
        </View>

        <FlatList
          data={todo_before_bed}
          renderItem={({ item }) => (
            <View style={styles.itemlist}>
              <View style={{flexDirection: 'row'}}>
                <View style={{height: 25, width: 25, backgroundColor: 'green'}}/>
                <Text style={styles.itemlist_text}>{item.name}</Text>
              </View>
              <Button
                onPress={() =>deleteItemTodosBeforeBed(item.id)}
                title="delete"
                color="green"
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 24,
    padding: 24
  },
  title: {
    height: 50,
    alignItems: 'center',
  },
  title_text: {
    fontSize: 35,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  todo_title: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  todo_title_text: {
    fontSize: 24,
  },
  add_todo:{
    fontSize: 16,
    color: 'red',
  },
  itemlist: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between'
  },
  itemlist_text: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700',
    fontStyle: 'italic'
  }
});

export default App
