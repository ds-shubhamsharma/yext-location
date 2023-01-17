import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";

import * as React from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import Details from "../components/details";
import Footer from "../components/footer";
import Header from "../components/header";
import Hours from "../components/hours";
import StaticMap from "../components/static-map";

import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "location_data",

    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "c_customField",
      "yextDisplayCoordinate",
    ],

    filter: {
      entityTypes: ["location"],
    },

    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ? document.slug : `${document.id.toString()}`;
};

export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id.toString()}`];
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: document.description,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/x-icon",
        },
      },
    ],
  };
};

const Location: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    address,
    hours,
    mainPhone,
    yextDisplayCoordinate,
    description,
    c_customField,
  } = document;

  // const [apiData, setApiData] = React.useState([]);

  // var config = {
  //   method: "get",
  //   url: "https://liveapi-sandbox.yext.com/v2/accounts/me/entities?api_key=a0db4a91072ddad5224c6c293d85aed7&v=20230110&entityTypes=location",
  //   headers: {},
  // };
  // axios(config)
  //   .then(function (response) {
  //     setApiData(response?.data?.response?.entities);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // console.log("apiData",apiData);

  const [user, setUser] = React.useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://liveapi-sandbox.yext.com/v2/accounts/me/entities?api_key=a0db4a91072ddad5224c6c293d85aed7&v=20230110&entityTypes=location"
    );
    const data = await response.json();
    return setUser(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  // console.log('user', user)

  return (
    <>
      <Header />
      <Banner name={name} address={address} />

      {/* {user && user?.map((data:any)=>{
return (
  <>
  {console.log('data', data)}
  </>
)
      })} */}
      <div className="centered-container">
        <div className="section">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            <div>
              <Card
                title={<Details address={address} phone={mainPhone}></Details>}
                item=""
              />
            </div>
            {hours && (
              <Card title={<Hours title={name} hours={hours} />} item="" />
            )}

            {yextDisplayCoordinate && (
              <StaticMap
                latitude={yextDisplayCoordinate?.latitude}
                longitude={yextDisplayCoordinate?.longitude}
              />
            )}
            <Card
              title={<p className="text-xl font-semibold">{`About ${name}`}</p>}
              item={description}
            />
            <div>
              <div className="text-xl font-semibold">
                {<a href={c_customField?.name}>Click Here </a>}
              </div>
              {c_customField?.image?.map((img: any) => {
                return (
                  <>
                    <img src={img?.url} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Location;
