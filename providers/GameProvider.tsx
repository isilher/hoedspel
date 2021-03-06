import React, { useEffect } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { Auth0Context } from "./Auth0Provider";

export interface IGameContext {
  game?: unknown
  hosting: boolean
  myTurn: boolean
}

export const GameContext = React.createContext<IGameContext>({
  game: undefined,
  hosting: false,
  myTurn: false
});

const GET_MY_GAME = gql`
  query getMyGame($userId: uuid!) {
    users(where: { auth_id: { _eq: $userId } }) {
      id
      game {
        host_id
        id
        name
        current_name {
          id
          name
        }
        players {
          name
          id
          claimed_names {
            id
            game_id
          }
        }
        unclaimed_names:names(where: { claimed: { _eq: false } }) {
          name
          id
        }
        names {
          name
          id
        }
        started
        names_frozen
        active_player {
          auth_id
          name
          id
        }
      }
    }
  }
`;

export const GameProvider: React.FC = ({ children }) => {
  const { auth0Id } = React.useContext(Auth0Context)
  const {data} = useQuery(GET_MY_GAME, { variables: { userId: auth0Id }, fetchPolicy: 'network-only', pollInterval: 2000})
  const game = data?.users ? data.users[0].game : undefined
  const hosting = game && game.host_id === auth0Id
  const myTurn = game && game?.active_player?.auth_id === auth0Id

  return (
    <GameContext.Provider value={{ game, hosting, myTurn }}>
      {children}
    </GameContext.Provider>
  )
}
