import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import { Auth0Provider } from './providers/Auth0Provider';
import { AuthorizedApolloProvider } from './providers/ApolloProvider';
import LobbyScreen from './screens/LobbyScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Auth0Provider>
          <AuthorizedApolloProvider>
            <LobbyScreen />
          </AuthorizedApolloProvider>
        </Auth0Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
