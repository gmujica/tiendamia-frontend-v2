import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api/dataFetcher';
import CardComponent from '../../components/Card';

export const ItemsPage = () => {
  const [data, setData] = useState([]);

  const dataT = [
    {
      "item_id": "079d8c23-335e-4571-b6c3-499dd9f4806c",
      "title": "iphone 8",
      "description": "iphone 8 white",
      "price": "399.99",
      "quantity": 100,
      "created_at": "2023-09-20T16:55:11.885Z",
      "updated_at": "2023-09-20T16:55:11.885Z"
    },
  ];

  useEffect(() => {
    const endpoint = '/items';
  
    fetchData(endpoint)
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <div>
      <h2>Items Page</h2>
      <div>
      {data.map((item) => (
        <CardComponent 
          key={item.item_id}
          title={item.title}
          description={item.description}
          created_at={item.created_at}
          updated_at={item.updated_at}
        />
      ))}
      </div>
    </div>
  );
}
