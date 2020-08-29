import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Text, View, Button } from '../components/Themed';
import { GameContext } from '../providers/GameProvider'
import { Divider } from '../components/Divider';
import { gql, useMutation } from '@apollo/client';
import { Alert } from '../components/Alert';
import { Auth0Context } from '../providers/Auth0Provider';
import { END_TURN } from './TurnScreen';
import { sample } from 'lodash';

const LEAVE_GAME = gql`
  mutation leaveGame($userId: uuid!) {
    update_users(where: {auth_id: {_eq: $userId}}, _set: {game_id: null}) {
      returning {
        id
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
    update_users(
      where: {auth0_id_a: {_eq: "Er is maar één oma Jo"}},
      _set: {game_id: $game}
    ) {
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

const FREEZE_NAMES = gql`
  mutation freezeNames($game: Int!) {
    update_games(where: {id: {_eq: $game}}, _set: {names_frozen: true}) {
      returning {
        id
      }
    }
  }
`

const SET_FIRST_NAME = gql`
  mutation setFirstName($game: Int!, $first_name: Int!) {
    update_games(where: {id: {_eq: $game}}, _set: {current_name_id: $first_name}) {
      returning {
        id
      }
    }
  }
`

const TAKE_TURN = gql`
  mutation takeTurn($game: Int!, $userId: uuid!) {
    update_games(where: {id: {_eq: $game}}, _set: {active_player_id: $userId}) {
      returning {
        id
      }
    }
  }
`

const RESET_ROUND = gql`
  mutation resetRound($game: Int!) {
    update_names(where: {game_id: {_eq: $game}}, _set: {claimed: false, claimer_id: null}) {
      returning {
        id
      }
    }
  }
`;

export const GameScreen: React.FC = () => {
  const { auth0Id, isOma, omaId } = useContext(Auth0Context)
  const { game, hosting } = useContext(GameContext)
  const [leaveGame] = useMutation(LEAVE_GAME, { refetchQueries: ['getOpenGames', 'getMyGame'] })
  const [destroyGame] = useMutation(DESTROY_GAME, { refetchQueries: ['getOpenGames', 'getMyGame'] })
  const [startGame] = useMutation(START_GAME, { refetchQueries: ['getMyGame'] })
  const [freezeNames] = useMutation(FREEZE_NAMES, { refetchQueries: ['getMyGame'] })
  const [setFirstName] = useMutation(SET_FIRST_NAME, { refetchQueries: ['getMyGame'] })
  const [createName] = useMutation(CREATE_NAME, { refetchQueries: ['getMyGame'] })
  const [takeTurn] = useMutation(TAKE_TURN, { refetchQueries: ['getMyGame'] })
  const [resetRound] = useMutation(RESET_ROUND, { refetchQueries: ['getMyGame'] })
  const [newName, setNewName] = useState('')
  const [nameContribution, setNameContribution] = useState(0)
  const [endTurn] = useMutation(END_TURN, { variables: { game: game.id}})

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

  const onFreezeNamesPress = () => {
    Alert.alert(
      "Hoed sluiten",
      "Weet je zeker dat je de hoed wilt sluiten? Er kunnen daarna geen namen meer bij.",
      [
        {
          text: 'Nee, nog niet',
          style: 'cancel'
        },
        {
          text: 'Ja, sluiten maar!',
          onPress: () => {
            freezeNames({
              variables: { game: game.id },
            }).then(() => {
              setFirstName({ variables: { game: game.id, first_name: sample(game.unclaimed_names).id }})
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

  const onTakeTurnPress = () => {
    takeTurn({variables: { game: game.id, userId: auth0Id}})
  }

  const onOmaTurnPress = () => {
    takeTurn({variables: { game: game.id, userId: omaId}})
  }

  const onEndTurnPress = () => {
    endTurn()
  }

  const onResetRoundPress = () => {
    Alert.alert(
      "Nieuwe ronde starten",
      "In de nieuwe ronde gaan alle namen weer terug de hoed in. Zorg dat de scores opgeschreven staan.",
      [
        {
          text: "Nee, nog niet",
          style: "cancel",
        },
        {
          text: "Ja, herstarten maar!",
          onPress: () => {
            resetRound({
              variables: { game: game.id },
            }).then(() => {
              setFirstName({ variables: { game: game.id, first_name: sample(game.names).id } });
            });
          },
        },
      ]
    );
  }

  if (isOma) return (<View style={{ padding: 15, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 72}}>☕️</Text>
    <Text style={{ fontSize: 32, textAlign: 'center', marginBottom: 20}}>Hoi oma, het spel is begonnen.</Text>
    <Text style={{ fontSize: 32, textAlign: 'center'}}>Tijdens jouw beurt zie je hier de naam uit de hoed.</Text>
  </View>)

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Spel: {game.name}</Text>
        {!game.started && <Text>🕰 Het spel is nog niet gestart.</Text>}
        {game.started && <Text>🚀 Het spel is gestart!</Text>}

        <Divider />

        <Text style={styles.title}>Spelers:</Text>
        {game.players.map((player) => {
          const claimedGameNames = player.claimed_names || []
          const score = claimedGameNames.filter(
            (claimedName) => claimedName.game_id === game.id
          ).length;
          return <Text key={player.id.toString()}>{player.name} ({score} punten)</Text>;
        })}
      </View>

      {game.started && (
        <View>
          <Text style={styles.nameCountingTitle}>
            Namen in de 🎩: &nbsp;
            {game.names_frozen && <Text>{game?.unclaimed_names?.length} / </Text>}
            {game?.unclaimed_names?.length}.
          </Text>

          {!game.names_frozen && (
            <View>
              <View style={styles.row}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Naam voor in de hoed"
                  value={newName}
                  onChangeText={setNewName}
                />
                <Button title=" + " onPress={onCreateNamePress} />
              </View>
              <Text>Jij hebt er {nameContribution} toegevoegd.</Text>
            </View>
          )}

          {game.names_frozen && !game.active_player && !!game.unclaimed_names.length && (
            <Button
              color="#BA7CC6"
              title="Het is mijn beurt, ik ga presenteren."
              onPress={onTakeTurnPress}
            />
          )}
          {hosting  && game.names_frozen && !game.active_player && !!game.unclaimed_names.length && (
            <>
              <Divider />
              <Button
                color="#BA7CC6"
                title="👵 Geef de beurt aan oma Jo."
                onPress={onOmaTurnPress}
              />
            </>
          )}
          {game.names_frozen && !!game.active_player && (
            <Text style={styles.title}>
              🕺 {game.active_player.name} is aan het presenteren.
            </Text>
          )}
          {hosting && game.names_frozen && !!game.active_player && game.active_player.auth_id === omaId && (
            <>
              <Divider />
              <Button
                color="#BA7CC6"
                title="👵 Oma is klaar."
                onPress={onEndTurnPress}
              />
            </>
          )}
          {game.names_frozen && !game.unclaimed_names.length && (
            <Text>
              De maker van het spel kan een nieuwe ronde starten. Vergeet niet de
              puntentelling op te schrijven!
            </Text>
          )}
        </View>
      )}

      <View>
        {hosting && !game.started && (
          <Button color="#BA7CC6" title="Starten" onPress={onStartGamePress} />
        )}
        {hosting && game.started && !game.names_frozen && (
          <Button
            color="#BA7CC6"
            title="Hoed sluiten"
            onPress={onFreezeNamesPress}
          />
        )}
        {hosting && game.names_frozen && !game.unclaimed_names.length && (
          <Button
            color="#BA7CC6"
            title="Nieuwe ronde starten"
            onPress={onResetRoundPress}
          />
        )}
        <Divider />
        {hosting && (
          <Button
            color="#d22461"
            title="Spel verwijderen"
            onPress={onDestroyGamePress}
          />
        )}
        {!hosting && !game.started && (
          <Button
            color="#d22461"
            title="Spel verlaten"
            onPress={onLeaveGamePress}
          />
        )}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 50,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15
  }
});
