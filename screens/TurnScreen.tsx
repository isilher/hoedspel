import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import { sample } from 'lodash'
import { View, Text, Button } from "../components/Themed"
import { GameContext } from '../providers/GameProvider'
import { gql, useMutation } from '@apollo/client'
import { Auth0Context } from '../providers/Auth0Provider'
import { Alert } from '../components/Alert'

export const END_TURN = gql`
  mutation takeTurn($game: Int!) {
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
  mutation claimName($game: Int!, $name: Int!, $userId: uuid!, $next_name: Int) {
    update_names(where: {id: {_eq: $name}}, _set: {claimed: true, claimer_id: $userId}) {
      returning {
        id
      }
    }
    update_games(where: {id: {_eq: $game }}, _set: {current_name_id: $next_name}) {
      returning {
        id
        names {
          id
        }
      }
    }
}
`;

export const TurnScreen = () => {
  const { game } = useContext(GameContext)

  const getNextNameId = () => {
    const nextName = sample(game.unclaimed_names.filter((name) => name.id !== game?.current_name?.id))
    return nextName?.id
  }

  const { isOma } = useContext(Auth0Context)
  const [endTurn] = useMutation(END_TURN, {
    variables: { game: game.id },
    refetchQueries: ['getMyGame']
  })
  const [claimName, { loading }] = useMutation(CLAIM_NAME, {
    variables: { game: game.id, name: game?.current_name?.id, userId: game?.active_player?.auth_id, next_name: getNextNameId() },
    refetchQueries: ["getMyGame"],
  });

  const onEndTurnPress = () => {
    if (!game.current_name) { return endTurn() }

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

      <Text style={{fontSize: 100, marginBottom: 30}}>🎩</Text>

      <View style={styles.container}>
        {loading && <ActivityIndicator />}
        {!!game?.current_name && !loading && (
          <>
            {isOma && <Text style={{fontSize: 32, marginBottom: 50}}>Het is jouw beurt, oma!</Text>}
            {isOma && <Text style={{fontSize: 32, marginBottom: 150}}>De naam is:</Text>}
            <Text style={styles.randomName}>{game?.current_name?.name}</Text>
          </>
        )}
        {game?.unclaimed_names?.length < 1 && !loading && (
          <View style={{flex: 1}}>
            <Text style={{ fontSize: 72, textAlign: 'center'}}>👍</Text>
            <Text style={styles.title}>De namen zijn op! Goed gedaan.</Text>
          </View>
        )}
      </View>

      {!isOma && (<View style={{ flexDirection: 'row' }}>

        <View style={{ flex: 1 }}>
          <TouchableOpacity disabled={loading} onPress={onEndTurnPress} >
            <View style={{ minHeight: 140, backgroundColor: "#d22461", padding: 10, paddingVertical: 20, borderRadius: 5, borderColor: 'purple', borderWidth: 1, justifyContent: 'space-between', alignItems: 'center'}}>

              <Text style={{fontSize: 32, marginBottom: 10}}>⌛️</Text>
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Beurt beëindigen</Text>
            </View>
          </TouchableOpacity>
        </View>

        {game?.unclaimed_names?.length > 0 && <View style={{width: 20}} />}

        {game?.unclaimed_names?.length > 0 && <View style={{ flex: 1 }}>
          <TouchableOpacity disabled={loading} onPress={() => claimName()} >
            <View style={{ minHeight: 140, backgroundColor: "#CEFA05", padding: 10, paddingVertical: 20, borderRadius: 5, borderColor: 'purple', borderWidth: 1, justifyContent: 'space-between', alignItems: 'center' }}>

              <Text style={{ fontSize: 32, marginBottom: 10 }}>🎉</Text>
              <Text style={{ textAlign: 'center', color: 'purple', fontWeight: 'bold' }}>Naam is geraden!</Text>
            </View>
          </TouchableOpacity>
        </View>}
      </View>)}
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
    maxWidth: '100%'
  },
  randomName: {
    fontSize: 42,
    fontWeight: "bold",
    maxWidth: '100%',
    textAlign: 'center',
    lineHeight: 72,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
