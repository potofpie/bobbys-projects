import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import './index.scss';
import { App } from './components/App';
import { 
      GRAPHCSM_URL,
      REACT_APP_APIKEY,
      REACT_APP_AUTHDOMAIN,
      REACT_APP_PROJECTID,
      REACT_APP_STORAGEBUCKET,
      REACT_APP_MESSAGINGSENDERID,
      REACT_APP_APPID,
      REACT_APP_MEASUREMENTID 
} from './constants' 
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINGSENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MEASUREMENTID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const httpLink = new HttpLink({uri: GRAPHCSM_URL, });
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
