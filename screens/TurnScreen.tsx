import React, { useContext } from 'react'
import { StyleSheet, Button } from 'react-native'
import { sample } from 'lodash'
import { View, Text } from "../components/Themed"
import { GameContext } from '../providers/GameProvider'
import { gql, useMutation } from '@apollo/client'
import { Auth0Context } from '../providers/Auth0Provider'
import { Alert } from '../components/Alert'

const END_TURN = gql`
  mutation takeTurn($game: Int!, $userId: String!) {
    update_games(where: {id: {_eq: $game}}, _set: {active_player_id: null}) {
      returning {
        id
      }
    }
  }
`

export const TurnScreen = () => {
  const { game } = useContext(GameContext)
  const { auth0Id } = useContext(Auth0Context)
  const randomAvailableName = sample(game.names)
  const [endTurn] = useMutation(END_TURN, {
    variables: { game: game.id, userId: auth0Id },
    refetchQueries: ['getMyGame']
  })

  const onEndTurnPress = () => {
    Alert.alert(
      "Spel verwijderen",
      "Weet je zeker dat je je beurt wilt afsluiten?",
      [
        {
          text: 'Nee, nog niet',
          style: 'cancel'
        },
        {
          text: 'Ja, klaar!',
          onPress: () => {
            endTurn()
          }
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.randomName}>{randomAvailableName?.name}</Text>
      </View>

      <Button title="Beurt beëindigen" onPress={onEndTurnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  randomName: {
    fontSize: 72,
    fontWeight: 'bold'
  }
})
