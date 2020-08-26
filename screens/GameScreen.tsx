import React, { useContext, useState } from 'react'
import { StyleSheet, Button, TextInput } from 'react-native'
import { Text, View } from '../components/Themed';
import { GameContext } from '../providers/GameProvider'
import { Divider } from '../components/Divider';
import { gql, useMutation } from '@apollo/client';
import { Alert } from '../components/Alert';
import { Auth0Context } from '../providers/Auth0Provider';

const LEAVE_GAME = gql`
  mutation leaveGame($userId: String!) {
    update_users(where: {auth0_id: {_eq: $userId}}, _set: {game_id: null}) {
      returning {
        game_id
      }
    }
  }
`

const DESTROY_GAME = gql`
  mutation destroyGame($game: Int!) {
    delete_games(where: {id: {_eq: $game}}) {
      returning {
        id
      }
    }
  }
`

const START_GAME = gql`
  mutation startGame($game: Int!) {
    update_games(where: {id: {_eq: $game}}, _set: {started: true}) {
      returning {
        id
      }
    }
  }
`

const CREATE_NAME = gql`
  mutation createName($game: Int!, $name: String!) {
    insert_names(objects: {game_id: $game, name: $name}) {
      returning {
        id
      }
    }
  }
`

export const GameScreen: React.FC = () => {
  const { auth0Id } = useContext(Auth0Context)
  const { game, hosting } = useContext(GameContext)
  const [leaveGame] = useMutation(LEAVE_GAME, { refetchQueries: ['getOpenGames', 'getMyGame'] })
  const [destroyGame] = useMutation(DESTROY_GAME, { refetchQueries: ['getOpenGames', 'getMyGame'] })
  const [startGame] = useMutation(START_GAME, { refetchQueries: ['getMyGame'] })
  const [createName] = useMutation(CREATE_NAME, { refetchQueries: ['getMyGame'] })
  const [newName, setNewName] = useState('')
  const [nameContribution, setNameContribution] = useState(0)

  const onLeaveGamePress = () => {
    Alert.alert(
      "Spel verlaten",
      "Weet je zeker dat je het spel wilt verlaten?",
      [
        {
          text: 'Nee, ik blijf',
          style: 'cancel'
        },
        {
          text: 'Ja, ik ga',
          onPress: () => {
            leaveGame({
              variables: { userId: auth0Id },
            })
          }
        }
      ]
    )
  }

  const onDestroyGamePress = () => {
    Alert.alert(
      "Spel verwijderen",
      "Weet je zeker dat je het spel wilt verwijderen?",
      [
        {
          text: 'Nee, toch niet',
          style: 'cancel'
        },
        {
          text: 'Ja, weg ermee',
          onPress: () => {
            destroyGame({
              variables: { game: game.id },
            })
          }
        }
      ]
    )
  }

  const onStartGamePress = () => {
    Alert.alert(
      "Spel starten",
      "Weet je zeker dat je het spel wilt starten? Er kunnen daarna geen spelers meer bij.",
      [
        {
          text: 'Nee, nog niet',
          style: 'cancel'
        },
        {
          text: 'Ja, starten maar!',
          onPress: () => {
            startGame({
              variables: { game: game.id },
            })
          }
        }
      ]
    )
  }

  const onCreateNamePress = () => {
    createName({ variables: {game: game.id, name: newName}})
    setNewName('')
    setNameContribution((previousContribution) => previousContribution + 1)
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Spel: {game.name}</Text>
        {!game.started && <Text>🕰 Het spel is nog niet gestart.</Text>}
        {game.started && <Text>🚀 Het spel is gestart!</Text>}

        <Divider />

        <Text style={styles.title}>Spelers:</Text>
        {game.players.map((player) => {
          return <Text key={player.id.toString()}>{player.name}</Text>
        })}
      </View>

      {game.started && <View>
        <Text style={styles.nameCountingTitle}>Namen in de 🎩: {game.names.length}.</Text>
        <View style={styles.row}>
          <TextInput
            style={styles.textInput}
            placeholder="Naam voor in de hoed"
            value={newName}
            onChangeText={setNewName}
            />
          <Button title=" + " onPress={onCreateNamePress} />
        </View>
        <Text>Je hebt er {nameContribution} toegevoegd.</Text>
      </View>}


      <View>
        {hosting && !game.started && <Button color='#BA7CC6' title="Starten" onPress={onStartGamePress} />}
        <Divider />
        {hosting && <Button color='#d22461' title="Spel verwijderen" onPress={onDestroyGamePress} />}
        {!hosting && !game.started && <Button color='#d22461' title="Spel verlaten" onPress={onLeaveGamePress} />}
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
    flex: 1,
    backgroundColor: '#FFE3EC',
    width: '100%'
  },
  playButton: {
    backgroundColor: '#BA7CC6',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nameCountingTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 15
  }
});
