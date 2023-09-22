import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/dataFetcher';


export const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const endpoint = '/orders';

    fetchData(endpoint)
      .then((response) => {
        setData(response);
        console.log('items', data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log('orders', data);
  }, [data]); 
  return <div>Home Page</div>;
}