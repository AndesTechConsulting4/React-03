import React from 'react';
//import ReactDOM from 'react-dom';

export default class App extends React.Component
{
   render(){

    return <div>
     <h1> Hello from React bundled! </h1>
     <h1> Время: {new Date().toString()} </h1>
         </div>;
   }

}