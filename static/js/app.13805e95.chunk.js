(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{238:function(e,t,n){"use strict";n.d(t,"a",(function(){return We}));var r=n(204),a=n(1),i=n.n(a),o=n(417),l=n(4),u=n.n(l),s=n(23),c=n.n(s),m=n(11),d=n.n(m),g=n(415),f=n(416),h=n(151);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=n(150),y=n(148),E=n.n(y),j=n(14),w=n(8),C=n(66),_=n(24),I=n.n(_),O=n(41),x=n.n(O),k=n(56),S=n(9),P=n(228),$={light:{text:"#000",background:"#fff",tint:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}};function z(e,t){var n=e.light;return n||$.light[t]}function q(e){var t=e.style,n=e.lightColor,r=e.darkColor,i=x()(e,["style","lightColor","darkColor"]),o=z({light:n,dark:r},"text");return a.createElement(k.a,I()({style:[{color:o},t]},i))}function G(e){var t=e.style,n=e.lightColor,r=e.darkColor,i=x()(e,["style","lightColor","darkColor"]),o=z({light:n,dark:r},"background");return a.createElement(S.a,I()({style:[{backgroundColor:o},t]},i))}function M(e){var t=e.color,n=void 0===t?"#BA7CC6":t,r=e.onPress,i=e.title,o=e.disabled;return a.createElement(P.a,{onPress:o?void 0:r},a.createElement(G,{style:{backgroundColor:n,width:"100%",padding:10,borderWidth:1,borderColor:"#333",alignItems:"center",justifyContent:"center"}},a.createElement(q,{style:{color:"white",fontWeight:"bold"}},i)))}var B=n(149),W=n.n(B),N=n(229),A="web"===j.a.OS?{alert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=window.confirm([e,t].filter(Boolean).join("\n"));if(r){var a=n.find((function(e){return"cancel"!==e.style}));(null==a?void 0:a.onPress)&&a.onPress()}else{var i=n.find((function(e){return"cancel"===e.style}));(null==i?void 0:i.onPress)&&i.onPress()}}}:N.a,Q=j.a.select({web:!1,default:!0});v.a({useProxy:Q,path:"hoedspel"});C.b();var D=a.createContext({token:"",name:"",auth0Id:"",isAuthorized:!1}),J=function(e){var t=e.children,n=a.useState(""),r=d()(n,2),i=r[0],o=r[1],l=a.useState(""),s=d()(l,2),c=s[0],m=s[1],g=a.useState(""),f=d()(g,2),h=f[0],p=f[1],b=a.useState(!1),y=d()(b,2),j=y[0],w=y[1],C=v.b({redirectUri:"https://isilher.github.io/hoedspel",clientId:"Gj9Y0KJGtJNCm1SZrUqRODvIc84dwrAY",responseType:"id_token",scopes:["openid","profile"],extraParams:{nonce:"I solemnly swear to be a really random string \ud83e\udd1e"},state:"solid state",usePKCE:!1},{authorizationEndpoint:"https://dev-5hh3kz1x.eu.auth0.com/authorize"}),_=d()(C,3),I=_[0],O=_[1],x=_[2];return a.useEffect((function(){if(O){if(O.error)return void A.alert("Authentication error",null==I?void 0:I.state);if("success"===O.type){var e=O.params.id_token;a=e,u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.awrap(W.a.setItem("@token",a));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("could not save token");case 8:case"end":return e.stop()}}),null,null,[[0,5]],Promise);var t=E()(e),n=t.nickname,r=t.sub;o(n),m(e),p(r),w(!0)}}var a}),[O]),a.useEffect((function(){!function(){var e,t,n,r;u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(W.a.getItem("@token"));case 3:null!==(e=a.sent)&&(t=E()(e),n=t.nickname,r=t.sub,o(n),m(c),p(r),w(!0)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("could not retrieve token");case 10:case"end":return a.stop()}}),null,null,[[0,7]],Promise)}()}),[]),a.createElement(G,{style:H.container},a.createElement(D.Provider,{value:{token:c,name:i,auth0Id:h,isAuthorized:j}},j?t:a.createElement(G,{style:H.buttonContainer},a.createElement(q,{style:{marginBottom:50,fontSize:100}},"\ud83c\udfa9"),a.createElement(M,{disabled:!I,title:"Log in",onPress:function(){return x({useProxy:Q})}}))))},H=w.a.create({container:{flex:1},buttonContainer:{justifyContent:"center",alignItems:"center",height:"100%"}}),T=n(13),L=function(e){var t=e.children,n=Object(a.useContext)(D),r=n.token,o=(n.auth0Id,function(e,t){var n=new T.HttpLink({uri:"https://sweeping-jay-28.hasura.app/v1/graphql",headers:{Authorization:"Bearer "+e}});return new T.ApolloClient({link:n,cache:new T.InMemoryCache})}(r));return i.a.createElement(T.ApolloProvider,{client:o},t)},F=n(28),V=n.n(F),R=n(112),K=n(113),U=n(237),Y=n(42),Z=function(){return i.a.createElement(G,{style:X.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"})},X=w.a.create({separator:{marginVertical:30,height:1,width:"80%"}});function ee(){var e=V()(["\n  mutation joinGame($game: Int!, $userId: String!) {\n    update_users(where: {auth0_id: {_eq: $userId}}, _set: {game_id: $game}) {\n      returning {\n        game_id\n        id\n      }\n    }\n  }\n"]);return ee=function(){return e},e}function te(){var e=V()(["\n  mutation createGame($name: String!, $userId: String!) {\n    insert_games(objects: {name: $name, host_id: $userId}) {\n      returning {\n        name\n        id\n      }\n    }\n  }\n"]);return te=function(){return e},e}function ne(){var e=V()(["\n  query getOpenGames {\n    games(where: {started: {_eq: false}}) {\n      id\n      name\n      players {\n        name\n      }\n    }\n  }\n"]);return ne=function(){return e},e}var re=Object(T.gql)(ne()),ae=Object(T.gql)(te()),ie=Object(T.gql)(ee()),oe=function(e){var t=e.game,n=a.useContext(D).auth0Id,r=Object(T.useMutation)(ie,{refetchQueries:["getOpenGames","getMyGame"]}),i=d()(r,1)[0];return a.createElement(G,{style:ue.gameListItem},a.createElement(G,null,a.createElement(q,{style:ue.title},t.name),a.createElement(q,null,t.players.map((function(e){return e.name})).join(", "))),a.createElement(G,null,a.createElement(M,{color:"#BA7CC6",title:"meedoen",onPress:function(){i({variables:{game:t.id,userId:n}})}})))};function le(){var e,t=a.useState(""),n=d()(t,2),r=n[0],i=n[1],o=a.useContext(D),l=o.name,u=o.auth0Id,s=Object(T.useQuery)(re,{pollInterval:5e3}),c=s.loading,m=s.data,g=Object(T.useMutation)(ie,{refetchQueries:["getOpenGames","getMyGame"]}),f=d()(g,1)[0],h=Object(T.useMutation)(ae,{refetchQueries:["getOpenGames"],onCompleted:function(e){var t,n;f({variables:{game:null==e||null==(t=e.insert_games)||null==(n=t.returning[0])?void 0:n.id,userId:u}})}}),p=d()(h,1)[0],b=null!=(e=null==m?void 0:m.games)?e:[];return a.createElement(G,{style:ue.container},a.createElement(q,{style:ue.title},"Hoi ",l,"!"),a.createElement(Z,null),a.createElement(q,{style:ue.title},"Kies een spel om aan mee te doen:"),c&&a.createElement(R.a,null),a.createElement(U.a,{style:ue.flatList,data:b,renderItem:function(e){var t=e.item;return a.createElement(oe,{game:t})},keyExtractor:function(e){return e.id.toString()}}),a.createElement(Z,null),a.createElement(q,{style:ue.title},"Of maak een nieuw spel aan:"),a.createElement(G,{style:ue.row},a.createElement(K.a,{style:ue.textInput,placeholder:"Naam voor een nieuw spel",value:r,onChangeText:i}),a.createElement(M,{title:" + ",onPress:function(){p({variables:{name:r,userId:u}})}})))}var ue=w.a.create({container:{flex:1,alignItems:"center",justifyContent:"center",paddingVertical:50,paddingHorizontal:15,height:Y.a.get("window").height},title:{fontSize:20,fontWeight:"bold",marginBottom:15},row:{flexDirection:"row",width:"100%"},gameListItem:{padding:15,borderWidth:1,borderColor:"purple",flex:1,marginVertical:5,flexDirection:"row",justifyContent:"space-between"},textInput:{padding:10,marginRight:10,borderWidth:1,borderColor:"blue",flex:1},flatList:{backgroundColor:"#FFE3EC",width:"100%",borderWidth:1,borderColor:"#FFE3EC"},playButton:{backgroundColor:"#BA7CC6",justifyContent:"center",alignItems:"center"}});function se(){var e=V()(["\n  query getMyGame($userId: String!) {\n    users(where: { auth0_id: { _eq: $userId } }) {\n      id\n      game {\n        host_id\n        id\n        name\n        players {\n          name\n          id\n          claimed_names {\n            id\n            game_id\n          }\n        }\n        names(where: { claimed: { _eq: false } }) {\n          name\n          id\n        }\n        started\n        names_frozen\n        active_player {\n          auth0_id\n          name\n          id\n        }\n      }\n    }\n  }\n"]);return se=function(){return e},e}var ce=i.a.createContext({game:void 0,hosting:!1,myTurn:!1}),me=Object(T.gql)(se()),de=function(e){var t,n=e.children,r=i.a.useContext(D).auth0Id,a=Object(T.useQuery)(me,{variables:{userId:r}}).data,o=(null==a?void 0:a.users)?a.users[0].game:void 0,l=o&&o.host_id===r,u=o&&(null==o||null==(t=o.active_player)?void 0:t.auth0_id)===r;return i.a.createElement(ce.Provider,{value:{game:o,hosting:l,myTurn:u}},n)};function ge(){var e=V()(["\n  mutation resetRound($game: Int!) {\n    update_names(where: {game_id: {_eq: $game}}, _set: {claimed: false}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return ge=function(){return e},e}function fe(){var e=V()(["\n  mutation takeTurn($game: Int!, $userId: String!) {\n    update_games(where: {id: {_eq: $game}}, _set: {active_player_id: $userId}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return fe=function(){return e},e}function he(){var e=V()(["\n  mutation freezeNames($game: Int!) {\n    update_games(where: {id: {_eq: $game}}, _set: {names_frozen: true}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return he=function(){return e},e}function pe(){var e=V()(["\n  mutation createName($game: Int!, $name: String!) {\n    insert_names(objects: {game_id: $game, name: $name}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return pe=function(){return e},e}function be(){var e=V()(["\n  mutation startGame($game: Int!) {\n    update_games(where: {id: {_eq: $game}}, _set: {started: true}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return be=function(){return e},e}function ve(){var e=V()(["\n  mutation destroyGame($game: Int!) {\n    delete_games(where: {id: {_eq: $game}}) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return ve=function(){return e},e}function ye(){var e=V()(["\n  mutation leaveGame($userId: String!) {\n    update_users(where: {auth0_id: {_eq: $userId}}, _set: {game_id: null}) {\n      returning {\n        id\n        game_id\n      }\n    }\n  }\n"]);return ye=function(){return e},e}var Ee=Object(T.gql)(ye()),je=Object(T.gql)(ve()),we=Object(T.gql)(be()),Ce=Object(T.gql)(pe()),_e=Object(T.gql)(he()),Ie=Object(T.gql)(fe()),Oe=Object(T.gql)(ge()),xe=function(){var e=Object(a.useContext)(D).auth0Id,t=Object(a.useContext)(ce),n=t.game,r=t.hosting,o=Object(T.useMutation)(Ee,{refetchQueries:["getOpenGames","getMyGame"]}),l=d()(o,1)[0],u=Object(T.useMutation)(je,{refetchQueries:["getOpenGames","getMyGame"]}),s=d()(u,1)[0],c=Object(T.useMutation)(we,{refetchQueries:["getMyGame"]}),m=d()(c,1)[0],g=Object(T.useMutation)(_e,{refetchQueries:["getMyGame"]}),f=d()(g,1)[0],h=Object(T.useMutation)(Ce,{refetchQueries:["getMyGame"]}),p=d()(h,1)[0],b=Object(T.useMutation)(Ie,{refetchQueries:["getMyGame"]}),v=d()(b,1)[0],y=Object(T.useMutation)(Oe,{refetchQueries:["getMyGame"]}),E=d()(y,1)[0],j=Object(a.useState)(""),w=d()(j,2),C=w[0],_=w[1],I=Object(a.useState)(0),O=d()(I,2),x=O[0],k=O[1];return i.a.createElement(G,{style:ke.container},i.a.createElement(G,null,i.a.createElement(q,{style:ke.title},"Spel: ",n.name),!n.started&&i.a.createElement(q,null,"\ud83d\udd70 Het spel is nog niet gestart."),n.started&&i.a.createElement(q,null,"\ud83d\ude80 Het spel is gestart!"),i.a.createElement(Z,null),i.a.createElement(q,{style:ke.title},"Spelers:"),n.players.map((function(e){var t=(e.claimed_names||[]).filter((function(e){return e.game_id===n.id})).length;return i.a.createElement(q,{key:e.id.toString()},e.name," (",t," punten)")}))),n.started&&i.a.createElement(G,null,i.a.createElement(q,{style:ke.nameCountingTitle},"Namen in de \ud83c\udfa9: ",n.names.length,"."),!n.names_frozen&&i.a.createElement(G,null,i.a.createElement(G,{style:ke.row},i.a.createElement(K.a,{style:ke.textInput,placeholder:"Naam voor in de hoed",value:C,onChangeText:_}),i.a.createElement(M,{title:" + ",onPress:function(){p({variables:{game:n.id,name:C}}),_(""),k((function(e){return e+1}))}})),i.a.createElement(q,null,"Jij hebt er ",x," toegevoegd.")),n.names_frozen&&!n.active_player&&!!n.names.length&&i.a.createElement(M,{color:"#BA7CC6",title:"Het is mijn beurt, ik ga presenteren.",onPress:function(){v({variables:{game:n.id,userId:e}})}}),n.names_frozen&&!!n.active_player&&i.a.createElement(q,{style:ke.title},"\ud83d\udd7a ",n.active_player.name," is aan het presenteren."),n.names_frozen&&!n.names.length&&i.a.createElement(q,null,"De maker van het spel kan een nieuwe ronde starten. Vergeet niet de puntentelling op te schrijven!")),i.a.createElement(G,null,r&&!n.started&&i.a.createElement(M,{color:"#BA7CC6",title:"Starten",onPress:function(){A.alert("Spel starten","Weet je zeker dat je het spel wilt starten? Er kunnen daarna geen spelers meer bij.",[{text:"Nee, nog niet",style:"cancel"},{text:"Ja, starten maar!",onPress:function(){m({variables:{game:n.id}})}}])}}),r&&n.started&&!n.names_frozen&&i.a.createElement(M,{color:"#BA7CC6",title:"Hoed sluiten",onPress:function(){A.alert("Hoed sluiten","Weet je zeker dat je de hoed wilt sluiten? Er kunnen daarna geen namen meer bij.",[{text:"Nee, nog niet",style:"cancel"},{text:"Ja, sluiten maar!",onPress:function(){f({variables:{game:n.id}})}}])}}),r&&n.names_frozen&&!n.names.length&&i.a.createElement(M,{color:"#BA7CC6",title:"Nieuwe ronde starten",onPress:function(){A.alert("Nieuwe ronde starten","In de nieuwe ronde gaan alle namen weer terug de hoed in. Zorg dat de scores opgeschreven staan.",[{text:"Nee, nog niet",style:"cancel"},{text:"Ja, herstarten maar!",onPress:function(){E({variables:{game:n.id}})}}])}}),i.a.createElement(Z,null),r&&i.a.createElement(M,{color:"#d22461",title:"Spel verwijderen",onPress:function(){A.alert("Spel verwijderen","Weet je zeker dat je het spel wilt verwijderen?",[{text:"Nee, toch niet",style:"cancel"},{text:"Ja, weg ermee",onPress:function(){s({variables:{game:n.id}})}}])}}),!r&&!n.started&&i.a.createElement(M,{color:"#d22461",title:"Spel verlaten",onPress:function(){A.alert("Spel verlaten","Weet je zeker dat je het spel wilt verlaten?",[{text:"Nee, ik blijf",style:"cancel"},{text:"Ja, ik ga",onPress:function(){l({variables:{userId:e}})}}])}})))},ke=w.a.create({container:{flex:1,justifyContent:"space-between",paddingHorizontal:15,paddingVertical:50},title:{fontSize:20,fontWeight:"bold",marginBottom:15},row:{flexDirection:"row",width:"100%",marginBottom:10},separator:{marginVertical:30,height:1,width:"80%"},gameListItem:{padding:15,borderWidth:1,borderColor:"purple",flex:1,marginVertical:5,flexDirection:"row",justifyContent:"space-between"},textInput:{padding:10,marginRight:10,borderWidth:1,borderColor:"blue",flex:1},flatList:{flex:1,backgroundColor:"#FFE3EC",width:"100%"},playButton:{backgroundColor:"#BA7CC6",justifyContent:"center",alignItems:"center"},nameCountingTitle:{fontSize:36,fontWeight:"bold",marginBottom:15}}),Se=n(232);function Pe(){var e=V()(["\n  mutation claimName($name: Int!, $userId: String!) {\n    update_names(where: {id: {_eq: $name}}, _set: {claimed: true, claimer_id: $userId}) {\n      returning {\n        id\n      }\n    }\n}\n"]);return Pe=function(){return e},e}function $e(){var e=V()(["\n  mutation takeTurn($game: Int!, $userId: String!) {\n    update_games(\n      where: { id: { _eq: $game } }\n      _set: { active_player_id: null }\n    ) {\n      returning {\n        id\n        names {\n          name\n        }\n      }\n    }\n  }\n"]);return $e=function(){return e},e}var ze=Object(T.gql)($e()),qe=Object(T.gql)(Pe()),Ge=function(){var e=Object(a.useContext)(ce).game,t=Object(a.useContext)(D).auth0Id,n=Object(a.useState)(),r=d()(n,2),o=r[0],l=r[1],u=Object(T.useMutation)(ze,{variables:{game:e.id,userId:t},refetchQueries:["getMyGame"]}),s=d()(u,1)[0],c=Object(T.useMutation)(qe,{variables:{name:null==o?void 0:o.id,userId:t},refetchQueries:["getMyGame"]}),m=d()(c,2),g=m[0],f=m[1].loading;Object(a.useEffect)((function(){l(Object(Se.sample)(e.names))}),[e.names]);return i.a.createElement(G,{style:Me.container},!!o&&i.a.createElement(M,{disabled:f,color:"#BA7CC6",title:"\ud83c\udf89 Geraden!",onPress:function(){g()}}),i.a.createElement(G,{style:Me.container},f&&i.a.createElement(R.a,null),!!o&&!f&&i.a.createElement(q,{style:Me.randomName},null==o?void 0:o.name),!o&&!f&&i.a.createElement(i.a.Fragment,null,i.a.createElement(q,{style:Me.randomName},"\ud83d\udc4d"),i.a.createElement(q,{style:Me.title},"De namen zijn op! Goed gedaan."))),i.a.createElement(M,{color:"#d22461",title:"Beurt be\xebindigen",onPress:function(){if(!o)return s();A.alert("Spel verwijderen","Weet je zeker dat je je beurt wilt afsluiten?",[{text:"Nee, nog niet",style:"cancel"},{text:"Ja, klaar!",onPress:function(){s()}}])},disabled:f}))},Me=w.a.create({container:{flex:1,justifyContent:"center",alignItems:"center",paddingVertical:50,paddingHorizontal:15},randomName:{fontSize:72,fontWeight:"bold"},title:{fontSize:20,fontWeight:"bold",marginBottom:15}}),Be=function(){var e=Object(a.useContext)(ce),t=e.game;return e.myTurn?i.a.createElement(Ge,null):t?i.a.createElement(xe,null):i.a.createElement(le,null)};function We(){return function(){var e=a.useState(!1),t=d()(e,2),r=t[0],i=t[1];return a.useEffect((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.b(),e.next=4,u.a.awrap(f.b(b(b({},g.a.font),{},{"space-mono":n(366)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,i(!0),h.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}()?i.a.createElement(o.a,null,i.a.createElement(J,null,i.a.createElement(L,null,i.a.createElement(de,null,i.a.createElement(Be,null)))),i.a.createElement(r.StatusBar,null)):null}},243:function(e,t,n){n(244),e.exports=n(406)},244:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/hoedspel/expo-service-worker.js",{scope:"/hoedspel/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},366:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"}},[[243,1,2]]]);
//# sourceMappingURL=app.13805e95.chunk.js.map