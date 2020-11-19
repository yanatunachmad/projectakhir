import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, TextInput, Button } from 'react-native';
import axios from 'axios';

const Item = ({ title, releaseYear }) => (
  <View>
    <Text>{title}</Text>
    <Text>{releaseYear}</Text>
  </View>
);

function ExampleScreen() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [movies, setMovies] = useState([]);

  const registerAxios = () => {
    console.log(email);
    console.log(password);
    axios.post('https://reqres.in/api/register', {
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const getMoviesAxios = () => {
    axios.get('https://reactnative.dev/movies.json')
    .then(function (response) {
      setTitle(response.data.title);
      setDescription(response.data.description);
      setMovies(response.data.movies);
    });
  }
  
  const getMoviesfromApi = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        setTitle(json.title);
        setDescription(json.description);
        setMovies(json.movies);
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      })
  }

  const renderItem = ({ item }) => (
    <Item title={item.title} releaseYear={item.releaseYear}/>
  );

  console.log(title);
  console.log(movies);

  useEffect(() => {
    // getMoviesfromApi();
    getMoviesAxios();
    // registerAxios();
  }, [])

  return (
    <View>
      <Text>title: {title}</Text>
      <Text>description: {description}</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TextInput
        placeholder="email"
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="password"
        onChangeText={value => setPassword(value)}
      />
      <Button
        title="register"
        onPress={registerAxios}
      />
    </View>
  );
}

export default ExampleScreen;