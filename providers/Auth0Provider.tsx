import * as React from "react";
import { StyleSheet, TextInput, ActivityIndicator, TouchableOpacity } from "react-native";
import { Text, View, Button } from "../components/Themed";
import AsyncStorage from '@react-native-community/async-storage';
import { gql, useMutation, useLazyQuery, useQuery } from "@apollo/client";

const NEW_USER = gql`
  mutation newUser($name: String!, $randomness: String!) {
    insert_users(objects: {name: $name, auth0_id_a: $randomness }) {
      returning {
        auth_id
        name
      }
    }
  }
`

const GET_USER = gql`
  query getUser($token: uuid!) {
    users(where: { auth_id: {_eq: $token} }) {
      auth_id
      name
      auth0_id_a
    }
  }
`;

const GET_OMA = gql`
  query getUser {
    users(where: { auth0_id_a: {_eq: "Er is maar één oma Jo"} }) {
      auth_id
      name
    }
  }
`;

export interface IAuth0Context {
  token: string;
  name: string;
  auth0Id: string;
  isAuthorized: boolean;
  isOma: boolean;
  logout: () => void;
  omaId: string;
}

export const Auth0Context = React.createContext<IAuth0Context>({
  token: "",
  name: "",
  auth0Id: "",
  isAuthorized: false,
  isOma: false,
  logout: () => {},
  omaId: ""
});

export const Auth0Provider: React.FC = ({ children }) => {
  const [name, setName] = React.useState('');
  const [token, setToken] = React.useState('');
  const [auth0Id, setAuth0Id] = React.useState('');
  const [isAuthorized, setIsAuthorized] = React.useState(false)
  const [isOma, setIsOma] = React.useState(false)

  const { data } = useQuery(GET_OMA)
  const omaId = data?.users[0].auth_id || ""

  const [newUser, { loading }] = useMutation(NEW_USER, {
    onCompleted: (response) => {
      const newUserObject = response?.insert_users?.returning[0];

      setAuth0Id(newUserObject.auth_id);
      setIsAuthorized(true);
      storeToken(newUserObject.auth_id);
    },
  });

  const [getUser, { loading: loadingUser }] = useLazyQuery(GET_USER, { onCompleted: (response) => {
      const user = response?.users[0];

      setAuth0Id(user.auth_id);
      setName(user.name);
      setIsAuthorized(true);

    if (user.auth0_id_a === "Er is maar één oma Jo") {
      setIsOma(true)
    }
    },
  });

  const  [getOma, { loading: loadingOma }] = useLazyQuery(GET_OMA, { onCompleted: (response) => {
    const oma = response?.users[0];

    setAuth0Id(oma.auth_id);
    setName(oma.name);
    setIsOma(true);
    setIsAuthorized(true);
    storeToken(oma.auth_id);
  }})

  const createNewUser = () => {
    newUser({ variables: { name, randomness: "💩" + Date.now().toString() } });
  }

  const storeToken = async (receivedToken: string) => {
    console.log(receivedToken)
    try {
      await AsyncStorage.setItem("@token", receivedToken);
    } catch (e) {
      console.log("could not save token");
    }
  };

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        getUser({variables: { token: value }})
      }
    } catch (e) {
      console.log("could not retrieve token");
    }
  };

  const destroyToken = async () => {
    try {
      AsyncStorage.removeItem("@token");
    } catch (e) {
      console.log("could not remove token");
    }
  }

  const logout = () => {
    destroyToken().then(() => {
      setAuth0Id('')
      setName('')
      setIsAuthorized(false)
      setIsOma(false)
      setToken('')
    })
  }

  React.useEffect(() => {
    if (!token) getToken()
  }, [])

  if (loadingUser) return <ActivityIndicator />

  return (
    <View style={styles.container}>
      <Auth0Context.Provider value={{ token, name, auth0Id, isAuthorized, isOma, logout, omaId }}>
        {isAuthorized ? (
          children
        ) : (
          <View style={styles.buttonContainer}>

            <Text style={{marginBottom: 50, fontSize: 100}}>🎩</Text>
            <TextInput style={styles.textInput} value={name} onChangeText={setName} placeholder="Je naam" />
            <Button
              disabled={loading || name === ''}
              title="Spelen maar!"
              onPress={createNewUser}
            />
              <TouchableOpacity
                disabled={loadingOma}
                onPress={() => getOma()}
              >
                <View style={{ borderRadius: 5, marginTop: 50, backgroundColor: '#CEFA05', padding: 10, paddingHorizontal: 25,  borderColor: 'grey', borderWidth: 1}}>

                <Text style={{ fontSize: 32 }}>👵 Ik ben oma Jo</Text>
                </View>
              </TouchableOpacity>
          </View>
        )}
      </Auth0Context.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "blue",
    marginBottom: 15
  },
});
