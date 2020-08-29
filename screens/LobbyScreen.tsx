import * as React from 'react';
import { StyleSheet, ActivityIndicator, TextInput, FlatList, Dimensions, TouchableOpacity } from 'react-native';

import { Text, View, Button } from '../components/Themed';
import { gql, useQuery, useMutation } from "@apollo/client";
import { Auth0Context } from '../providers/Auth0Provider';
import { Divider } from '../components/Divider';

const GET_OPEN_GAMES = gql`
  query getOpenGames {
    games(where: {started: {_eq: false}}) {
      id
      name
      players {
        name
      }
    }
  }
`;

const CREATE_NEW_GAME = gql`
  mutation createGame($name: String!, $userId: uuid!) {
    insert_games(objects: {name: $name, host_id: $userId}) {
      returning {
        name
        id
      }
    }
  }
`;

const JOIN_GAME = gql`
  mutation joinGame($game: Int!, $userId: uuid!) {
    update_users(where: {auth_id: {_eq: $userId}}, _set: {game_id: $game}) {
      returning {
        game_id
        id
      }
    }
  }
`


const GameListItem = ({ game }) => {
  const { auth0Id } = React.useContext(Auth0Context)
  const [joinGame] = useMutation(JOIN_GAME, { refetchQueries: ['getOpenGames', 'getMyGame'] })

  return (
    <View style={styles.gameListItem}>
      <View>
        <Text style={styles.title}>{game.name}</Text>
        <Text>{game.players.map((player) => player.name).join(', ')}</Text>
      </View>
      <View>
        <Button color="#BA7CC6" title="meedoen" onPress={() => {
          joinGame({ variables: { game: game.id, userId: auth0Id }})
        }} />
      </View>
    </View>
  )
}

export default function LobbyScreen() {
  const [newGameName, setNewGameName] = React.useState('')
  const { name, auth0Id, isOma, logout } = React.useContext(Auth0Context)
  const { loading, data } = useQuery(GET_OPEN_GAMES, { pollInterval: 5000 });
  const [joinGame] = useMutation(JOIN_GAME, { refetchQueries: ['getOpenGames', 'getMyGame'] })
  const [createGame] = useMutation(
    CREATE_NEW_GAME,
    {
      refetchQueries: ['getOpenGames'],
      onCompleted: (result) => {
        // Join the game you created
        joinGame({ variables: { game: result?.insert_games?.returning[0]?.id, userId: auth0Id }})
      }
    }
  )

  const openGames = data?.games ?? []

  const createNewGame = () => {
    createGame({ variables: { name: newGameName, userId: auth0Id }})
  }

  if (isOma) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={logout}>

        <Text style={{fontSize: 72}}>🕰</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 32, textAlign: 'center'}}>Even wachten oma, het spel begint zo!</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Hoi {name}!</Text>
        <TouchableOpacity onPress={logout}>
          <Text>🚪🏃‍♂️</Text>
        </TouchableOpacity>
      </View>


      <Text>Kies een spel om aan mee te doen:</Text>

      {loading && <ActivityIndicator />}

      <FlatList
        style={styles.flatList}
        data={openGames}
        renderItem={({item}) => <GameListItem game={item} />}
        keyExtractor={(item) => item.id.toString()}
      />

      <Divider />

      <Text style={styles.title}>Of maak een nieuw spel aan:</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.textInput}
          placeholder="Naam voor een nieuw spel"
          value={newGameName}
          onChangeText={setNewGameName}
        />
        <Button title=" + " onPress={createNewGame} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 15,
    height: Dimensions.get("window").height
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  gameListItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'purple',
    flex: 1,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'blue',
    flex: 1,
  },
  flatList: {
    backgroundColor: '#FFE3EC',
    width: '100%',
    borderWidth: 1,
    borderColor: '#FFE3EC'
  },
  playButton: {
    backgroundColor: '#BA7CC6',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
