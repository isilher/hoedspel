import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import * as React from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import * as WebBrowser from "expo-web-browser";

const auth0ClientId = "Gj9Y0KJGtJNCm1SZrUqRODvIc84dwrAY";
const authorizationEndpoint = "https://dev-5hh3kz1x.eu.auth0.com/authorize";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });
WebBrowser.maybeCompleteAuthSession();

const nonce = (Date.now() * Math.random()).toString();

export interface IAuth0Context {
  token: string;
  name: string;
  auth0Id: string;
  isAuthorized: boolean;
}

export const Auth0Context = React.createContext<IAuth0Context>({
  token: "",
  name: "",
  auth0Id: "",
  isAuthorized: false,
});

export const Auth0Provider: React.FC = ({ children }) => {
  const [name, setName] = React.useState('');
  const [token, setToken] = React.useState('');
  const [auth0Id, setAuth0Id] = React.useState('');
  const [isAuthorized, setIsAuthorized] = React.useState(false)

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      responseType: "id_token",
      scopes: ["openid", "profile"],
      extraParams: {
        nonce,
      },
    },
    { authorizationEndpoint }
  );

  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
  console.log(`Redirect URL: ${redirectUri}`);

  React.useEffect(() => {
    if (result) {
      // @ts-expect-error
      if (result.error) {
        Alert.alert(
          "Authentication error",
          // @ts-expect-error
          result.params.error_description || "something went wrong"
        );
        return;
      }

      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);
        // @ts-expect-error
        const { name, sub } = decoded;

        setName(name);
        setToken(jwtToken);
        setAuth0Id(sub);
        setIsAuthorized(true);
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Auth0Context.Provider value={{ token, name, auth0Id, isAuthorized }}>
        {isAuthorized ? children : (
          <View style={styles.buttonContainer}>
            <Button
              disabled={!request}
              title="Log in"
              onPress={() => promptAsync({ useProxy })}
            />
          </View>
        )}
      </Auth0Context.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});
