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
    update_games(
      where: { id: { _eq: $game } }
      _set: { active_player_id: null }
    ) {
      returning {
        id
      }
    }
  }
`

const CLAIM_NAME = gql`
  mutation claimName($name: Int!) {
    update_names(where: {id: {_eq: $name}}, _set: {claimed: true}) {
      returning {
        id
      }
    }
}
`;

export const TurnScreen = () => {
  const { game } = useContext(GameContext)
  const { auth0Id } = useContext(Auth0Context)
  const randomAvailableName = sample(game.names)
  const [endTurn] = useMutation(END_TURN, {
    variables: { game: game.id, userId: auth0Id },
    refetchQueries: ['getMyGame']
  })
  const [claimName] = useMutation(CLAIM_NAME, {
    variables: { name: randomAvailableName?.id },
    refetchQueries: ["getMyGame"],
  });

  const onEndTurnPress = () => {
    if (!randomAvailableName) { return endTurn() }

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

  const onClaimNamePress = () => {
    claimName()
  }

  return (
    <View style={styles.container}>
      {!!randomAvailableName && <Button color="#BA7CC6" title="🎉 Geraden!" onPress={onClaimNamePress} />}

      <View style={styles.container}>
        {!!randomAvailableName && (
          <Text style={styles.randomName}>{randomAvailableName?.name}</Text>
        )}
        {!randomAvailableName && (
          <>
            <Text style={styles.randomName}>👍</Text>
            <Text style={styles.title}>De namen zijn op! Goed gedaan.</Text>
          </>
        )}
      </View>

      <Button
        color="#d22461"
        title="Beurt beëindigen"
        onPress={onEndTurnPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  randomName: {
    fontSize: 72,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
