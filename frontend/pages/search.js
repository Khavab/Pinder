import Content from "../components/infiniteScrollComp";

export default function Search(props) {
    return (
        <>
        <div>
            <Content data={props.data} />
        </div>
        </>
    );
}

export const getStaticProps = async () => {
//   const data = await fetch(
//     "https://jsonplaceholder.typicode.com/todos?_limit=50"
//   ).then((response) => response.json());
    const data = await fetch(
        '../data/party_test.json'
    ).then((response) => response.json());
    
    return {
        props: { data }
    };
};

// import React, { useEffect, useState} from "react";
// import HeadLayout from "../components/headLayout";
// import axios from "axios";

// export default function Search() {
//     //const [data, getData] = useState('');
//     const data = require('../data/party_test.json');

//     // useEffect( () => {
//     //     getAllData();
//     //   }, []);
      
//     //   const getAllData = () => {
//     //     axios.get(`../data/part_test.json`)
//     //     .then(res => {
//     //       const persons = res.data;
//     //       getData(persons);
//     //       console.log(persons)
//     //     })
//     //   .catch(error => console.error(`Error: ${error}`));
//     //   }

//     return (
//         <div>
//         <HeadLayout></HeadLayout>

//         <a>{JSON.stringify(data)}</a>

//         </div>
//     )
// }