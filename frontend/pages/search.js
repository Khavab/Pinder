import React, { useEffect, useState} from "react";
import HeadLayout from "../components/headLayout";
import axios from "axios";

export default function Search() {
    const [data, getData] = useState('');

    useEffect( () => {
        getAllData();
      }, []);
      
      const getAllData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          getData(persons);
          console.log(persons)
        })
      .catch(error => console.error(`Error: ${error}`));
      }

    return (
        <div>
        <HeadLayout></HeadLayout>

        <a>{JSON.stringify(data)}</a>

        </div>
    )
}