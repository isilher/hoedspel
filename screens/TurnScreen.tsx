import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator } from 'react-native'
import { sample } from 'lodash'
import { View, Text, Button } from "../components/Themed"
import { GameContext } from '../providers/GameProvider'
import { gql, useMutation } from '@apollo/client'
import { Auth0Context } from '../providers/Auth0Provider'
import { Alert } from '../components/Alert'

const END_TURN = gql`
  mutation takeTurn($game: Int!, $userId: uuid!) {
    update_games(
      where: { id: { _eq: $game } }
      _set: { active_player_id: null }
    ) {
      returning {
        id
        names {
          name
        }
      }
    }
  }
`

const CLAIM_NAME = gql`
  mutation claimName($name: Int!, $userId: uuid!) {
    update_names(where: {id: {_eq: $name}}, _set: {claimed: true, claimer_id: $userId}) {
      returning {
        id
      }
    }
}
`;

export const TurnScreen = () => {
  const { game } = useContext(GameContext)
  const { auth0Id } = useContext(Auth0Context)
  const [randomAvailableName, setRandomAvailableName] = useState()
  // const randomAvailableName = sample(game.names)
  const [endTurn] = useMutation(END_TURN, {
    variables: { game: game.id, userId: auth0Id },
    refetchQueries: ['getMyGame']
  })
  const [claimName, { loading }] = useMutation(CLAIM_NAME, {
    variables: { name: randomAvailableName?.id, userId: auth0Id },
    refetchQueries: ["getMyGame"],
  });

  useEffect(() => {
    setRandomAvailableName(sample(game.names))
  }, [game.names])

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
      {!!randomAvailableName && (
        <Button
          disabled={loading}
          color="#BA7CC6"
          title="🎉 Geraden!"
          onPress={onClaimNamePress}
        />
      )}

      <View style={styles.container}>
        {loading && <ActivityIndicator />}
        {!!randomAvailableName && !loading && (
          <Text style={styles.randomName}>{randomAvailableName?.name}</Text>
        )}
        {!randomAvailableName && !loading && (
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
        disabled={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 15,
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
