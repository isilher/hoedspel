(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{238:function(e,t,n){"use strict";n.d(t,"a",(function(){return We}));var r=n(204),a=n(1),i=n.n(a),o=n(417),l=n(4),u=n.n(l),c=n(23),s=n.n(c),m=n(11),d=n.n(m),g=n(415),f=n(416),p=n(151);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=n(150),y=n(148),E=n.n(y),j=n(14),w=n(8),C=n(66),_=n(24),O=n.n(_),I=n(41),x=n.n(I),k=n(56),S=n(9),P=n(228),$={light:{text:"#000",background:"#fff",tint:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}};function z(e,t){var n=e.light;return n||$.light[t]}function q(e){var t=e.style,n=e.lightColor,r=e.darkColor,i=x()(e,["style","lightColor","darkColor"]),o=z({light:n,dark:r},"text");return a.createElement(k.a,O()({style:[{color:o},t]},i))}function G(e){var t=e.style,n=e.lightColor,r=e.darkColor,i=x()(e,["style","lightColor","darkColor"]),o=z({light:n,dark:r},"background");return a.createElement(S.a,O()({style:[{backgroundColor:o},t]},i))}function M(e){var t=e.color,n=void 0===t?"#BA7CC6":t,r=e.onPress,i=e.title,o=e.disabled;return a.createElement(P.a,{onPress:o?void 0:r},a.createElement(G,{style:{backgroundColor:n,width:"100%",padding:10,borderWidth:1,borderColor:"#333",alignItems:"center",justifyContent:"center"}},a.createElement(q,{style:{color:"white",fontWeight:"bold"}},i)))}var B=n(149),N=n.n(B),W=n(229),A="web"===j.a.OS?{alert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=window.confirm([e,t].filter(Boolean).join("\n"));if(r){var a=n.find((function(e){return"cancel"!==e.style}));(null==a?void 0:a.onPress)&&a.onPress()}else{var i=n.find((function(e){return"cancel"===e.style}));(null==i?void 0:i.onPress)&&i.onPress()}}}:W.a,Q=j.a.select({web:!1,default:!0}),D=v.a({useProxy:Q,path:"hoedspel"});C.b();var J=a.createContext({token:"",name:"",auth0Id:"",isAuthorized:!1}),H=function(e){var t=e.children,n=a.useState(""),r=d()(n,2),i=r[0],o=r[1],l=a.useState(""),c=d()(l,2),s=c[0],m=c[1],g=a.useState(""),f=d()(g,2),p=f[0],h=f[1],b=a.useState(!1),y=d()(b,2),j=y[0],w=y[1],C=v.b({redirectUri:D,clientId:"Gj9Y0KJGtJNCm1SZrUqRODvIc84dwrAY",responseType:"id_token",scopes:["openid","profile"],extraParams:{nonce:"NONCE"}},{authorizationEndpoint:"https://dev-5hh3kz1x.eu.auth0.com/authorize"}),_=d()(C,3),O=_[0],I=_[1],x=_[2];return a.useEffect((function(){if(I){I.error&&A.alert("Authentication error",null==O?void 0:O.state),window.alert(I.type);var e=I.params.id_token;a=e,u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.awrap(N.a.setItem("@token",a));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("could not save token");case 8:case"end":return e.stop()}}),null,null,[[0,5]],Promise);var t=E()(e),n=t.nickname,r=t.sub;window.alert(I.params.id_token),o(n),m(e),h(r),w(!0)}var a}),[I]),a.useEffect((function(){!function(){var e,t,n,r;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(N.a.getItem("@token"));case 3:null!==(e=a.sent)&&(t=E()(e),n=t.nickname,r=t.sub,o(n),m(s),h(r),w(!0)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("could not retrieve token");case 10:case"end":return a.stop()}}),null,null,[[0,7]],Promise)}()}),[]),a.createElement(G,{style:T.container},a.createElement(J.Provider,{value:{token:s,name:i,auth0Id:p,isAuthorized:j}},j?t:a.createElement(G,{style:T.buttonContainer},a.createElement(q,{style:{marginBottom:50,fontSize:100}},"\ud83c\udfad"),a.createElement(M,{disabled:!O,title:"Log in",onPress:function(){return x({useProxy:Q})}}))))},T=w.a.create({container:{flex:1},buttonContainer:{justifyContent:"center",alignItems:"center",height:"100%"}}),L=n(13),F=function(e){var t=e.children,n=Object(a.useContext)(J),r=n.token,o=(n.auth0Id,function(e,t){var n=new L.HttpLink({uri:"https://sweeping-jay-28.hasura.app/v1/graphql",headers:{Authorization:"Bearer "+e}});return new L.ApolloClient({link:n,cache:new L.InMemoryCache})}(r));return i.a.createElement(L.ApolloProvider,{client:o},t)},V=n(28),R=n.n(V),K=n(112),U=n(113),Y=n(237),Z=n(42),X=function(){return i.a.createElement(G,{style:ee.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"})},ee=w.a.create({separator:{marginVertical:30,height:1,width:"80%"}});function te(){var e=R()(["\n  mutation joinGame($game: Int!, $userId: String!) {\n    update_users(where: {auth0_id: {_eq: $userId}}, _set: {game_id: $game}) {\n      returning {\n        game_id\n        id\n      }\n    }\n  }\n"]);return te=function(){return e},e}function ne(){var e=R()(["\n  mutation createGame($name: String!, $userId: String!) {\n    insert_games(objects: {name: $name, host_id: $userId}) {\n      returning {\n        name\n        id\n      }\n    }\n  }\n"]);return ne=function(){return e},e}function re(){var e=R()(["\n  query getOpenGames {\n    games(where: {started: {_eq: false}}) {\n      id\n      name\n      players {\n        name\n      }\n    }\n  }\n"]);return re=function(){return e},e}var ae=Object(L.gql)(re()),ie=Object(L.gql)(ne()),oe=Object(L.gql)(te()),le=function(e){var t=e.game,n=a.useContext(J).auth0Id,r=Object(L.useMutation)(oe,{refetchQueries:["getOpenGames","getMyGame"]}),i=d()(r,1)[0];return a.createElement(G,{style:ce.gameListItem},a.createElement(G,null,a.createElement(q,{style:ce.title},t.name),a.createElement(q,null,t.players.map((function(e){return e.name})).join(", "))),a.createElement(G,null,a.createElement(M,{color:"#BA7CC6",title:"meedoen",onPress:function(){i({variables:{game:t.id,userId:n}})}})))};function ue(){var e,t=a.useState(""),n=d()(t,2),r=n[0],i=n[1],o=a.useContext(J),l=o.name,u=o.auth0Id,c=Object(L.useQuery)(ae,{pollInterval:5e3}),s=c.loading,m=c.data,g=Object(L.useMutation)(oe,{refetchQueries:["getOpenGames","getMyGame"]}),f=d()(g,1)[0],p=Object(L.useMutation)(ie,{refetchQueries:["getOpenGames"],onCompleted:function(e){var t,n;f({variables:{game:null==e||null==(t=e.insert_games)||null==(n=t.returning[0])?void 0:n.id,userId:u}})}}),h=d()(p,1)[0],b=null!=(e=null==m?void 0:m.games)?e:[];return a.createElement(G,{style:ce.container},a.createElement(q,{style:ce.title},"Hoi ",l,"!"),a.createElement(X,null),a.createElement(q,{style:ce.title},"Kies een spel om aan mee te doen:"),s&&a.createElement(K.a,null),a.createElement(Y.a,{style:ce.flatList,data:b,renderItem:function(e){var t=e.item;return a.createElement(le,{game:t})},keyExtractor:function(e){return e.id.toString()}}),a.createElement(X,null),a.createElement(q,{style:ce.title},"Of maak een nieuw spel aan:"),a.createElement(G,{style:ce.row},a.createElement(U.a,{style:ce.textInput,placeholder:"Naam voor een nieuw spel",value:r,onChangeText:i}),a.createElement(M,{title:" + ",onPress:function(){h({variables:{name:r,userId:u}})}})))}var ce=w.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",paddingVertical:50,paddingHorizontal:15,height:Z.a.get("window").height},title:{fontSize:20,fontWeight:"bold",marginBottom:15},row:{flexDirection:"row",width:"100%"},gameListItem:{padding:15,borderWidth:1,borderColor:"purple",flex:1,marginVertical:5,flexDirection:"row",justifyContent:"space-between"},textInput:{padding:10,marginRight:10,borderWidth:1,borderColor:"blue",flex:1},flatList:{backgroundColor:"#FFE3EC",width:"100%",borderWidth:1,borderColor:"#FFE3EC"},playButton:{backgroundColor:"#BA7CC6",justifyContent:"center",alignItems:"center"}});function se(){var e=R()(["\n  query getMyGame($userId: String!) {\n    users(where: { auth0_id: { _eq: $userId } }) {\n      id\n      game {\n        host_id\n        id\n        name\n        players {\n          name\n          id\n          claimed_names {\n            id\n            game_id\n          }\n        }\n        names(where: { claimed: { _eq: false } }) {\n          name\n          id\n        }\n        started\n        names_frozen\n        active_player {\n          auth0_id\n          name\n          id\n        }\n      }\n    }\n  }\n"]);return se=function(){return e},e}var me=i.a.createContext({game:void 0,hosting:!1,myTurn:!1}),de=Object(L.gql)(se()),ge=function(e){var t,n=e.children,r=i.a.useContext(J).auth0Id,a=Object(L.useQuery)(de,{variables:{userId:r}}).data,o=(null==a?void 0:a.users)?a.users[0].game:void 0,l=o&&o.host_id===r,u=o&&(null==o||null==(t=o.active_player)?void 0:t.auth0_id)===r;return i.a.createElement(me.Provider,{value:{game:o,hosting:l,myTurn:u}},n)};function fe(){var e=R()(["\n  mutation resetRound($game: Int!) {\n    update_names(where: {game_id: {_eq: $game}}, _set: {claimed: false}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return fe=function(){return e},e}function pe(){var e=R()(["\n  mutation takeTurn($game: Int!, $userId: String!) {\n    update_games(where: {id: {_eq: $game}}, _set: {active_player_id: $userId}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return pe=function(){return e},e}function he(){var e=R()(["\n  mutation freezeNames($game: Int!) {\n    update_games(where: {id: {_eq: $game}}, _set: {names_frozen: true}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return he=function(){return e},e}function be(){var e=R()(["\n  mutation createName($game: Int!, $name: String!) {\n    insert_names(objects: {game_id: $game, name: $name}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return be=function(){return e},e}function ve(){var e=R()(["\n  mutation startGame($game: Int!) {\n    update_games(where: {id: {_eq: $game}}, _set: {started: true}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return ve=function(){return e},e}function ye(){var e=R()(["\n  mutation destroyGame($game: Int!) {\n    delete_games(where: {id: {_eq: $game}}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return ye=function(){return e},e}function Ee(){var e=R()(["\n  mutation leaveGame($userId: String!) {\n    update_users(where: {auth0_id: {_eq: $userId}}, _set: {game_id: null}) {\n      returning {\n        id\n        game_id\n      }\n    }\n  }\n"]);return Ee=function(){return e},e}var je=Object(L.gql)(Ee()),we=Object(L.gql)(ye()),Ce=Object(L.gql)(ve()),_e=Object(L.gql)(be()),Oe=Object(L.gql)(he()),Ie=Object(L.gql)(pe()),xe=Object(L.gql)(fe()),ke=function(){var e=Object(a.useContext)(J).auth0Id,t=Object(a.useContext)(me),n=t.game,r=t.hosting,o=Object(L.useMutation)(je,{refetchQueries:["getOpenGames","getMyGame"]}),l=d()(o,1)[0],u=Object(L.useMutation)(we,{refetchQueries:["getOpenGames","getMyGame"]}),c=d()(u,1)[0],s=Object(L.useMutation)(Ce,{refetchQueries:["getMyGame"]}),m=d()(s,1)[0],g=Object(L.useMutation)(Oe,{refetchQueries:["getMyGame"]}),f=d()(g,1)[0],p=Object(L.useMutation)(_e,{refetchQueries:["getMyGame"]}),h=d()(p,1)[0],b=Object(L.useMutation)(Ie,{refetchQueries:["getMyGame"]}),v=d()(b,1)[0],y=Object(L.useMutation)(xe,{refetchQueries:["getMyGame"]}),E=d()(y,1)[0],j=Object(a.useState)(""),w=d()(j,2),C=w[0],_=w[1],O=Object(a.useState)(0),I=d()(O,2),x=I[0],k=I[1];return i.a.createElement(G,{style:Se.container},i.a.createElement(G,null,i.a.createElement(q,{style:Se.title},"Spel: ",n.name),!n.started&&i.a.createElement(q,null,"\ud83d\udd70 Het spel is nog niet gestart."),n.started&&i.a.createElement(q,null,"\ud83d\ude80 Het spel is gestart!"),i.a.createElement(X,null),i.a.createElement(q,{style:Se.title},"Spelers:"),n.players.map((function(e){var t=(e.claimed_names||[]).filter((function(e){return e.game_id===n.id})).length;return i.a.createElement(q,{key:e.id.toString()},e.name," (",t," punten)")}))),n.started&&i.a.createElement(G,null,i.a.createElement(q,{style:Se.nameCountingTitle},"Namen in de \ud83c\udfa9: ",n.names.length,"."),!n.names_frozen&&i.a.createElement(G,null,i.a.createElement(G,{style:Se.row},i.a.createElement(U.a,{style:Se.textInput,placeholder:"Naam voor in de hoed",value:C,onChangeText:_}),i.a.createElement(M,{title:" + ",onPress:function(){h({variables:{game:n.id,name:C}}),_(""),k((function(e){return e+1}))}})),i.a.createElement(q,null,"Jij hebt er ",x," toegevoegd.")),n.names_frozen&&!n.active_player&&!!n.names.length&&i.a.createElement(M,{color:"#BA7CC6",title:"Het is mijn beurt, ik ga presenteren.",onPress:function(){v({variables:{game:n.id,userId:e}})}}),n.names_frozen&&!!n.active_player&&i.a.createElement(q,{style:Se.title},"\ud83d\udd7a ",n.active_player.name," is aan het presenteren."),n.names_frozen&&!n.names.length&&i.a.createElement(q,null,"De maker van het spel kan een nieuwe ronde starten. Vergeet niet de puntentelling op te schrijven!")),i.a.createElement(G,null,r&&!n.started&&i.a.createElement(M,{color:"#BA7CC6",title:"Starten",onPress:function(){A.alert("Spel starten","Weet je zeker dat je het spel wilt starten? Er kunnen daarna geen spelers meer bij.",[{text:"Nee, nog niet",style:"cancel"},{text:"Ja, starten maar!",onPress:function(){m({variables:{game:n.id}})}}])}}),r&&n.started&&!n.names_frozen&&i.a.createElement(M,{color:"#BA7CC6",title:"Hoed sluiten",onPress:function(){A.alert("Hoed sluiten","Weet je zeker dat je de hoed wilt sluiten? Er kunnen daarna geen namen meer bij.",[{text:"Nee, nog niet",style:"cancel"},{text:"Ja, sluiten maar!",onPress:function(){f({variables:{game:n.id}})}}])}}),r&&n.names_frozen&&!n.names.length&&i.a.createElement(M,{color:"#BA7CC6",title:"Nieuwe ronde starten",onPress:function(){A.alert("Nieuwe ronde starten","In de nieuwe ronde gaan alle namen weer terug de hoed in. Zorg dat de scores opgeschreven staan.",[{text:"Nee, nog niet",style:"cancel"},{text:"Ja, herstarten maar!",onPress:function(){E({variables:{game:n.id}})}}])}}),i.a.createElement(X,null),r&&i.a.createElement(M,{color:"#d22461",title:"Spel verwijderen",onPress:function(){A.alert("Spel verwijderen","Weet je zeker dat je het spel wilt verwijderen?",[{text:"Nee, toch niet",style:"cancel"},{text:"Ja, weg ermee",onPress:function(){c({variables:{game:n.id}})}}])}}),!r&&!n.started&&i.a.createElement(M,{color:"#d22461",title:"Spel verlaten",onPress:function(){A.alert("Spel verlaten","Weet je zeker dat je het spel wilt verlaten?",[{text:"Nee, ik blijf",style:"cancel"},{text:"Ja, ik ga",onPress:function(){l({variables:{userId:e}})}}])}})))},Se=w.a.create({container:{flex:1,justifyContent:"space-between",paddingHorizontal:15,paddingVertical:50},title:{fontSize:20,fontWeight:"bold",marginBottom:15},row:{flexDirection:"row",width:"100%",marginBottom:10},separator:{marginVertical:30,height:1,width:"80%"},gameListItem:{padding:15,borderWidth:1,borderColor:"purple",flex:1,marginVertical:5,flexDirection:"row",justifyContent:"space-between"},textInput:{padding:10,marginRight:10,borderWidth:1,borderColor:"blue",flex:1},flatList:{flex:1,backgroundColor:"#FFE3EC",width:"100%"},playButton:{backgroundColor:"#BA7CC6",justifyContent:"center",alignItems:"center"},nameCountingTitle:{fontSize:36,fontWeight:"bold",marginBottom:15}}),Pe=n(232);function $e(){var e=R()(["\n  mutation claimName($name: Int!, $userId: String!) {\n    update_names(where: {id: {_eq: $name}}, _set: {claimed: true, claimer_id: $userId}) {\n      returning {\n        id\n      }\n    }\n}\n"]);return $e=function(){return e},e}function ze(){var e=R()(["\n  mutation takeTurn($game: Int!, $userId: String!) {\n    update_games(\n      where: { id: { _eq: $game } }\n      _set: { active_player_id: null }\n    ) {\n      returning {\n        id\n        names {\n          name\n        }\n      }\n    }\n  }\n"]);return ze=function(){return e},e}var qe=Object(L.gql)(ze()),Ge=Object(L.gql)($e()),Me=function(){var e=Object(a.useContext)(me).game,t=Object(a.useContext)(J).auth0Id,n=Object(a.useState)(),r=d()(n,2),o=r[0],l=r[1],u=Object(L.useMutation)(qe,{variables:{game:e.id,userId:t},refetchQueries:["getMyGame"]}),c=d()(u,1)[0],s=Object(L.useMutation)(Ge,{variables:{name:null==o?void 0:o.id,userId:t},refetchQueries:["getMyGame"]}),m=d()(s,2),g=m[0],f=m[1].loading;Object(a.useEffect)((function(){l(Object(Pe.sample)(e.names))}),[e.names]);return i.a.createElement(G,{style:Be.container},!!o&&i.a.createElement(M,{disabled:f,color:"#BA7CC6",title:"\ud83c\udf89 Geraden!",onPress:function(){g()}}),i.a.createElement(G,{style:Be.container},f&&i.a.createElement(K.a,null),!!o&&!f&&i.a.createElement(q,{style:Be.randomName},null==o?void 0:o.name),!o&&!f&&i.a.createElement(i.a.Fragment,null,i.a.createElement(q,{style:Be.randomName},"\ud83d\udc4d"),i.a.createElement(q,{style:Be.title},"De namen zijn op! Goed gedaan."))),i.a.createElement(M,{color:"#d22461",title:"Beurt be\xebindigen",onPress:function(){if(!o)return c();A.alert("Spel verwijderen","Weet je zeker dat je je beurt wilt afsluiten?",[{text:"Nee, nog niet",style:"cancel"},{text:"Ja, klaar!",onPress:function(){c()}}])},disabled:f}))},Be=w.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",paddingVertical:50,paddingHorizontal:15},randomName:{fontSize:72,fontWeight:"bold"},title:{fontSize:20,fontWeight:"bold",marginBottom:15}}),Ne=function(){var e=Object(a.useContext)(me),t=e.game;return e.myTurn?i.a.createElement(Me,null):t?i.a.createElement(ke,null):i.a.createElement(ue,null)};function We(){return function(){var e=a.useState(!1),t=d()(e,2),r=t[0],i=t[1];return a.useEffect((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,p.b(),e.next=4,u.a.awrap(f.b(b(b({},g.a.font),{},{"space-mono":n(366)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,i(!0),p.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}()?i.a.createElement(o.a,null,i.a.createElement(H,null,i.a.createElement(F,null,i.a.createElement(ge,null,i.a.createElement(Ne,null)))),i.a.createElement(r.StatusBar,null)):null}},243:function(e,t,n){n(244),e.exports=n(406)},244:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/hoedspel/expo-service-worker.js",{scope:"/hoedspel/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},366:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"}},[[243,1,2]]]);
//# sourceMappingURL=app.ee5edc60.chunk.js.map