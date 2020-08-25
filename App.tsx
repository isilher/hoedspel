import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { Auth0Provider } from './providers/Auth0Provider';
import { AuthorizedApolloProvider } from './providers/ApolloProvider';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Auth0Provider>
          <AuthorizedApolloProvider>
            <Navigation colorScheme={colorScheme} />
          </AuthorizedApolloProvider>
        </Auth0Provider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
