import * as React from "react";
import CardList from "./cardList";
import Details from "./details";

const DataFetch = () => {
  const [data, setData] = React.useState<any>([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://liveapi-sandbox.yext.com/v2/accounts/me/entities?api_key=a0db4a91072ddad5224c6c293d85aed7&v=20230110&entityTypes=location"
    );
    const result = await response.json();
    return setData(result);
  };
  React.useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      {data?.response?.entities.map((items: any) => {
        return (
          <>
          <CardList name={<Details name={items.name} address={items.address} phone={items.mainPhone}/>} item={items.slug}/>
          </>
        );
      })}
    </>
  );
};

export default DataFetch;
