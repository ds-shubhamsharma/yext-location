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
import DataFetch from "../components/dataFetch";
import Footer from "../components/footer";
import Header from "../components/header";
import LocationData from "../components/locationData";
import "../index.css";

export const config: TemplateConfig = {};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `index.html`;
};

// export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
//   return [`index-old/${document.id.toString()}`];
// };

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
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

const LocatorPage: Template<TemplateRenderProps> = ({ document }) => {
  const {} = document;

  return (
    <>
      <Header />
      <Banner />
      <div className="centered-container">
        <div className="section">
          <div style={styles.scrollview}>
          <DataFetch />

          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10"></div>
          <LocationData />

        </div>
      </div>
      <Footer />
    </>
  );
};
export default LocatorPage;

const styles = {
  scrollview: {
    height: "580px",
    width: "450px",
    // border:"0px solid black",
    overflow: "auto",
  },
};
