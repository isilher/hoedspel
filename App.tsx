import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import { Auth0Provider } from './providers/Auth0Provider';
import { AuthorizedApolloProvider } from './providers/ApolloProvider';
import LobbyScreen from './screens/LobbyScreen';
import { GameProvider, GameContext } from './providers/GameProvider';
import { GameScreen } from './screens/GameScreen';
import { TurnScreen } from './screens/TurnScreen';
import { View } from "./components/Themed";

const AppContent: React.FC = () => {
  const { game, myTurn } = useContext(GameContext)

  if(!!myTurn) return <TurnScreen />
  if(!!game) return <GameScreen />

  return <LobbyScreen />
}

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Auth0Provider>
          <AuthorizedApolloProvider>
            <GameProvider>

                <AppContent />

            </GameProvider>
          </AuthorizedApolloProvider>
        </Auth0Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
