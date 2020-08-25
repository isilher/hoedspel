import * as React from 'react';
import { StyleSheet, ActivityIndicator, TextInput, Button } from 'react-native';

import { Text, View } from '../components/Themed';
import { gql, useQuery, useMutation } from "@apollo/client";
import { Auth0Context } from '../providers/Auth0Provider';

const GET_MY_GAMES = gql`
  query GetMyGames {
    games {
      name
    }
  }
`;

const CREATE_NEW_GAME = gql`
  mutation CreateGame($name: String!) {
    insert_games(objects: {name: $name}) {
      returning {
        name
        id
      }
    }
  }
`;

export default function TabOneScreen() {
  const [newGameName, setNewGameName] = React.useState('')
  const { name } = React.useContext(Auth0Context)
  const { loading, error, data } = useQuery(GET_MY_GAMES);
  const [createGame] = useMutation(CREATE_NEW_GAME)
  const myGames = data?.games ?? []

  const createNewGame = () => {
    createGame({ variables: { name: newGameName }})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi {name}!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {loading && <ActivityIndicator />}
      { myGames.map((game) => {
        return <Text style={styles.title}>{game.name}</Text>
      })}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={styles.row}>
        <TextInput placeholder="Naam voor een nieuw spel" value={newGameName} onChangeText={setNewGameName} />
        <Button title="+" onPress={createNewGame} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
