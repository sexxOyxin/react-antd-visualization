import React, { useEffect, useState } from 'react'

export default function Scene1() {
  const [value, setValue] = useState();
  const queryData = () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setValue(`获得随机数${(Math.random()*6).toFixed(4)}`);
        resolve();
      }, 1000);
    });
  };

  useEffect(() => {
    queryData();
    const fetchData = async () => {
      const aa = await queryData();
      console.log('aa: ', aa);
    };
    fetchData();
  }, []);
  return (
    <div>Scene1-{value}</div>
  )
}
