import React, { useEffect, useState} from "react";
import HeadLayout from "../components/headLayout";
import axios from "axios";


export default function Search() {
    //const [data, getData] = useState('');
    const data = require('../data/party_test.json');

    // useEffect( () => {
    //     getAllData();
    //   }, []);
      
    //   const getAllData = () => {
    //     axios.get(`../data/part_test.json`)
    //     .then(res => {
    //       const persons = res.data;
    //       getData(persons);
    //       console.log(persons)
    //     })
    //   .catch(error => console.error(`Error: ${error}`));
    //   }

    return (
        <div>
        <HeadLayout></HeadLayout>

        <a>{JSON.stringify(data)}</a>

        </div>
    )
}