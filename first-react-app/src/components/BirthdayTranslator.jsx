import { useState } from "react";

const phrases = new Map([
    ['English', 'Happy Birthday'],
    ['German', 'Alles Gute zum Geburtstag'],
    ['Spanish', 'Feliz Cumpleaños'],
    ['French', 'Joyeux Anniversaire']
]);

// ****REACT BASICS - STATE - TWO STATE VARIABLES - SLIDE 61****
// function BirthdayTranslator() {
    
//     const [currentLanguage, setCurrentLanguage] = useState('English');
    
//     const [phrase, setPhrase] = useState(phrases.get('English'))
   
//     const handleChangeLanguage = (lang) => {
//         setCurrentLanguage(lang);
//         setPhrase(phrases.get(lang));
//     }
    
//     return (
//         <div className="BirthdayTranslator componentBox">
//             <h3>{phrase}! ({currentLanguage})</h3>

//             <button onClick={() =>
//                 handleChangeLanguage('English')}>English</button>
            
//             <button onClick={() =>
//                 handleChangeLanguage('German')}>German</button>
            
//             <button onClick={() =>
//                 handleChangeLanguage('Spanish')}>Spanish</button>

//             <button onClick={() => 
//                 handleChangeLanguage('French')}>French</button>
                
//         </div>
//     )
// }

// ****REACT BASICS - STATE - TWO STATE VARIABLES INTO ONE OBJECT - SLIDE 62****

// function BirthdayTranslator() {
//     const [currentPhrase, setCurrentPhrase] = useState(
//         {lang: 'english', phrase: 'Happy Birthday'}
//     )
    
//     const handleChangeLanguage = (newlang) => {
//         setCurrentPhrase({lang: newlang, phrase: phrases.get(newlang)})
//     }
    
//     return (
    
//         <div className="BirthdayTranslator componentBox">

//             <h3>{currentPhrase.phrase}! ({currentPhrase.lang})</h3>

//             <button onClick={() =>
//                 handleChangeLanguage('English')}>English</button>
        
//             <button onClick={() =>
//                 handleChangeLanguage('German')}>German</button>
        
//             <button onClick={() =>
//                 handleChangeLanguage('Spanish')}>Spanish</button>

//             <button onClick={() =>
//                 handleChangeLanguage('French')}>French</button>
    
//         </div>
//     )
// }

// ****REACT BASICS - STATE - AVOID REDUNDANCY RULE - SLIDE 64****

function BirthdayTranslator() {
    
    const [currentLanguage, setCurrentLanguage] = useState('English');
    
    const handleChangeLanguage = (newlang) => {
        setCurrentLanguage(newlang)
    }
    
    return (
        <div className="BirthdayTranslator componentBox">
            
            <h3>{phrases.get(currentLanguage)}!
                ({currentLanguage})</h3>
            
            <button onClick={() =>
                handleChangeLanguage('English')}>English</button>
            
            <button onClick={() =>
                handleChangeLanguage('German')}>German</button>
            
            <button onClick={() =>
                handleChangeLanguage('Spanish')}>Spanish</button>

            <button onClick={() =>
                handleChangeLanguage('French')}>French</button>
        
        </div>
    )
}
   

export default BirthdayTranslator