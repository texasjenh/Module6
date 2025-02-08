import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import PropsDisplayer from './components/PropsDisplayer'
import City from './components/City'
import Address from './components/Address'
import Pet from './components/Pet'
import Greeting from './components/Greeting'
import FullName from './components/FullName'
import ComplexComment from './components/ComplexComment'
import FancyBox from './components/FancyBox'
import MoviesList from './components/MovieList'
import BigCats from './components/BigCats'
import LoginForm from './components/LoginForm'
import MoodChanger from './components/MoodChanger'
import Emoji from './components/Emoji'
import BirthdayTranslator from './components/BirthdayTranslator'
import Weather from './components/weather'
import ExplodingBomb from './components/ExplodingBomb'
import Calculator from './components/Calculator'


// function App() {
//   const [count, setCount] = useState(0)

//     return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 4)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//     )
// }

// ****REACT BASICS - JSX - SLIDE 16****

// const spiderman = {
//     name: 'Spiderman', 
//     alterEgo: 'Peter Parker',
//     catchPhrase: 'With great power comes great responsibility'
// };
// SINGLE PARENT <DIV> ELEMENT
// const spideyJSX = (<div>
//     <h3>{spiderman.name}</h3>
//     <blockquote>{spiderman.catchPhrase}</blockquote>
//     <cite>{spiderman.alterEgo}</cite>
// </div>);

// SINGLE PARENT FRAGMENT <> ELEMENT
// const spideyJSXFragment = (<>
//     <h3>{spiderman.name}</h3>
//     <blockquote>{spiderman.catchPhrase}</blockquote>
//     <cite>{spiderman.alterEgo}</cite>
// </>);

// ****REACT BASICS - COMPONENT - SLIDE 19****
// function ExampleComponent() {
//     return (
//         <div className="ExampleComponent componentBox">
//             <h1>My Example Component</h1>
//             <p>My first React component!</p>
//         </div>
//     )
// }

// function ExampleComponent2() {
//     return (
//         <div className="ExampleComponent componentBox">
//             <h1>My Example Component 2</h1>
//             <p>My second React component!</p>
//         </div>
//     )
// }

// ****REACT BASICS - RENDERING COMPONENTS - SLIDE 21****
// function Welcome(props) {
//     return (
//         <div className="Welcome">
//             <h3>Welcome {props.name}!</h3>
//             {props.children}
//         </div>
//     )
// }

// ****REACT BASICS - STYLING A COMPONENT - SLIDE 22****
// function Welcome(props) {
//     return (
//         <div className="Welcome componentBox">
//             <h3>Welcome {props.name}!</h3>
//             {props.children}
//         </div>
//     )
// }

// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: { 
//         name: 'Hello Kitty',
//         avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/220px-Hello_kitty_character_portrait.png',
//     },
// };

function App() {
    return (
        <div className="App">
            {/* {spideyJSX}
            {spideyJSXFragment} */}
            {/* <ExampleComponent/>
            <ExampleComponent2/> */}
            {/* <Welcome name="students">
                <p>Children of Welcome Component</p>
            </Welcome> */}
            {/* <PropsDisplayer/> */}
            {/* <PropsDisplayer myProp="First Prop"/>  */}
            {/* <PropsDisplayer prop1="first" prop2="second" prop3={3}/> */}
            {/* <PropsDisplayer name="Harry Sytles" age={29}/> */}
            {/* <PropsDisplayer pets={["cat", "dog", "turtle"]}/> */}
            {/* <City name="Sydney"/> */}
            {/* <City name="Melbourne" state="VIC"/> */}
            {/* <City name="Chicago" state="Illinois" country="USA"/> */}
            {/* <Address street="Congress Ave" state="Texas" /> */}
            {/* <City name="Newcastle">
                <div>Newcastle is a harbour city in the Australian state of New South Wales.</div>
                <div><strong>Population:</strong> 322,278 (2016)</div>
            </City> */}
            {/* <Pet type="Siamese" name="Maisie" color="Cream"/> */}
            {/* <Greeting name="John">
                <p>Welcome to Software Enginnering</p>
            </Greeting> */}
            {/* <FullName first="Kendrick" last="Lamar" /> */}
            {/* <FullName first="Kendrick" middle="Lamar" last="Duckworth" /> */}
            
            {/* <ComplexComment author={comment.author}
                date={comment.date}
                text={comment.text}
            /> */}

            {/* <Callout title="Nested React Component"
                message="Simple message with a fancy box applied via composition">
                <FullName first="Elon" last="Musk"/>
            </Callout>
           */}

            {/* <MoviesList /> */}

           {/* <BigCats /> */}

            {/* <MoodChanger /> */}

            {/* <Emoji /> */}

            {/* <BirthdayTranslator /> */}

            {/* <Weather /> */}

            <Calculator /> 
            
            {/* <LoginForm /> */}

            {/* <ExplodingBomb /> */}
        </div>
    )
}


export default App
