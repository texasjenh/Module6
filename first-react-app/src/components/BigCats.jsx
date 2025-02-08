// import { useState } from 'react'
// import './BigCat.css'

// const cats = [
//     { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://images.pexels.com/photos/6404904/pexels-photo-6404904.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://images.pexels.com/photos/7598287/pexels-photo-7598287.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://images.pexels.com/photos/28587139/pexels-photo-28587139/free-photo-of-jaguar-swimming-in-the-amazon-rainforest.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://images.pexels.com/photos/46254/leopard-wildcat-big-cat-botswana-46254.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://images.pexels.com/photos/17806363/pexels-photo-17806363/free-photo-of-schneeleopard-am-beobachten-koniglich.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg?auto=compress&cs=tinysrgb&w=600' },
//    ]

// function SingleCat ({name, latinName, image}) {
//     return (
//         <li>
//             <img src={image} width="500" alt={name}/>
//             <h2>{name}</h2>
//             <em>({latinName})</em>
//         </li>
//     )
// }

// function BigCats () {
    // const catList = cats.map(cat => (
    //     <li key={cat.id}>
    //         <h3>{cat.name}</h3>
    //         <em>({cat.latinName})</em>
    //     </li>
    // ))

// const [currentCats, setCurrentCats] = useState(cats)

// const handleSortCats = () => {
//     let newCats = [...currentCats];
//     newCats.sort((cat1,cat2) => cat1.latinName < cat2.latinName ? -1 : 1);
//     setCurrentCats(newCats);
// }

// const catList = currentCats.map(cat => (
//         <SingleCat 
//             image={cat.image}
//             name={cat.name} 
//             latinName={cat.latinName} 
//             key={cat.id}
//         />
//     ))

//     return (
//         <div className="BigCats FancyBox">
//             <h2>Big Cats</h2>
//             <ul>{catList}</ul>
//             <div>
//                 <button onClick={handleSortCats}>Sort by Alpha</button>
//             </div>
//         </div>
//     )
// }

// ****EXERCISE 4****

// import { useState } from 'react'
// import './BigCat.css'

// const cats = [
//     { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://images.pexels.com/photos/6404904/pexels-photo-6404904.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://images.pexels.com/photos/7598287/pexels-photo-7598287.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://images.pexels.com/photos/28587139/pexels-photo-28587139/free-photo-of-jaguar-swimming-in-the-amazon-rainforest.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://images.pexels.com/photos/46254/leopard-wildcat-big-cat-botswana-46254.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://images.pexels.com/photos/17806363/pexels-photo-17806363/free-photo-of-schneeleopard-am-beobachten-koniglich.jpeg?auto=compress&cs=tinysrgb&w=600' },
//     { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg?auto=compress&cs=tinysrgb&w=600' },
// ];

// function SingleCat ({name, latinName, image}) {
//     return (
//         <li>
//             <img src={image} width="500" alt={name}/>
//             <h2>{name}</h2>
//             <em>({latinName})</em>
//         </li>
//     )
// }

// function BigCats () {

//     const [currentCats, setCurrentCats] = useState(cats)

//     const handleSortCats = () => {
//         let newCats = [...currentCats];
//         newCats.sort((cat1,cat2) => cat1.latinName < cat2.latinName ? -1 : 1);
//         setCurrentCats(newCats);
//     }
    
//     const handleReverseCats = () => {
//         let newCats = [...currentCats];
//         newCats.reverse();
//         setCurrentCats(newCats);
//     }
    
//     const handleFilterCats = () => {
//         let newCats = currentCats.filter(cat => cat.latinName.startsWith('Panthera'));
//         setCurrentCats(newCats);
//     }
    
//     const handleResetCats = () => {
//         setCurrentCats(cats);
//     }

//     const catList = currentCats.map(cat => (
//         <SingleCat
//             name={cat.name}
//             latinName={cat.latinName}
//             key={cat.id}
//             image={cat.image}
//         />
//     ))

//     return (
//         <div className='BigCats'>
//             <h2>Big Cats</h2>
//             <ul>{catList}</ul>
//             <div>
//                 <button onClick={handleSortCats}>Sort Latin Name by Alpha</button>
//                 <button onClick={handleReverseCats}>Reverse List</button>
//             </div>
//             <div>
//                 <button onClick={handleFilterCats}>Filter Panthera</button>
//                 <button onClick={handleResetCats}>Reset List</button>
//             </div>
//         </div>
//     )
// }

// ****EXERCISE 5****

import { useState } from 'react'
import './BigCat.css'


const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://images.pexels.com/photos/6404904/pexels-photo-6404904.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://images.pexels.com/photos/7598287/pexels-photo-7598287.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://images.pexels.com/photos/28587139/pexels-photo-28587139/free-photo-of-jaguar-swimming-in-the-amazon-rainforest.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://images.pexels.com/photos/46254/leopard-wildcat-big-cat-botswana-46254.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://images.pexels.com/photos/3498323/pexels-photo-3498323.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://images.pexels.com/photos/17806363/pexels-photo-17806363/free-photo-of-schneeleopard-am-beobachten-koniglich.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://images.pexels.com/photos/2541239/pexels-photo-2541239.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

function SingleCat ({name, latinName, image, onRemoveCat}) {
    return (
        <li>
            <img src={image} width="500" alt={name}/>
            <h2>{name}</h2>
            <em>({latinName})</em>
            <a href="#delete" onClick={() => onRemoveCat(id)}>
                Delete
            </a>
        </li>
    );
}

// AddCatForm Component
function AddCatForm({ onAddCat }) {
    const [name, setName] = useState("");
    const [latinName, setLatinName] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleAddCat = (e) => {
        e.preventDefault();
        if (name && latinName && imageURL) {
            onAddCat({ name, latinName, image: imageURL });
            setName("");
            setLatinName("");
            setImageURL("");
        } else {
            alert("Please fill in all fields!")
        }
    };

    return (
        <form onSubmit={handleAddCat}>
            <h3>Add New Cat</h3>
            <label>
                Name:
                <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Latin Name:
                <input
                name="latinName"
                value={latinName}
                onChange={(e) => setLatinName(e.target.value)}
                />
            </label>
            <br/>
            <label>
                Image URL:
                <input
                name="imageURL"
                value={imageURL}
                onChange={(e) => setImageURL(e.target.value)}
                />
            </label>
            <br/>
            <button type="submit">Add Cat</button>
        </form>
    );
}

function BigCats () {

    const [currentCats, setCurrentCats] = useState(cats)
    
    const handleSortCats = () => {
        const newCats = [...currentCats].sort((cat1, cat2) =>
        cat1.name.localeCompare(cat2.name)
        );
        setCurrentCats(newCats);
    };
        
    const handleReverseCats = () => {
        const newCats = [...currentCats].reverse();
        setCurrentCats(newCats);
    };
        
    const handleFilterCats = () => {
        const newCats = currentCats.filter((cat) => 
            cat.latinName.startsWith('Panthera')
        );
        setCurrentCats(newCats);
    };
        
    const handleResetCats = () => {
        setCurrentCats(cats);
    };

    const handleAddCat = (newCat) => {
        newCat.id = currentCats.reduce((maxId, cat) => Math.max(maxId, cat.id), 0) + 1;
        setCurrentCats([...currentCats, newCat])
    };

    const handleRemoveCat = (deleteId) => {
        const newCats = currentCats.filter((cat) => cat.id !== deleteId)
        setCurrentCats(newCats)
    };
    
    const catList = currentCats.map((cat) => (
        <SingleCat
            key={cat.id}
            id={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
            onRemoveCat={handleRemoveCat}
        />
    ));
    
    return (
        <div className='BigCats'>
            <h2>Big Cats</h2>
            <ul>{catList}</ul>
            <div>
                <button onClick={handleSortCats}>Sort Latin Name by Alpha</button>
                <button onClick={handleReverseCats}>Reverse List</button>
            </div>
            <div>
                <button onClick={handleFilterCats}>Filter Panthera</button>
                <button onClick={handleResetCats}>Reset List</button>
            </div>
            <AddCatForm onAddCat={handleAddCat} />
        </div>
    )
}



export default BigCats;
