import * as React from "react";
import StaticMap from "./static-map";

const LocationData = () => {
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
            <StaticMap latitude={items.cityCoordinate.latitude} longitude={items.cityCoordinate.longitude} />
          </>
        );
      })}
    </>
  );
};

export default LocationData;
