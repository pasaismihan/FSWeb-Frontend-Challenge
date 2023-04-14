import React from "react";
import Workintech from "../Workintech.png";
import RandomJokes from "../RandomJokes.png";
import Journey from "../Journey.png";

const Projects = ({ language }) => {
  return (
    <div className="font-Inter  ml-leftspace mr-[125px] xlg:mr-rightspace mb-[140px] ">
      <h1 className="text-[48px] max-lg:text-center mb-[36px] dark:text-darktitle mt-[42px] font-semibold">
        {language ? "Projects" : "Projeler"}
      </h1>
      <div className="flex justify-between max-xxl:flex-wrap max-lg:justify-center ">
        <div className="w-[300px]">
          <img src={Workintech} alt=".." />
          <h2 className="text-text dark:text-darktext text-[30px] font-medium my-[18px]">
            Workintech
          </h2>
          <p className="text-[14px] text-generaltext dark:text-darkgeneraltext">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="my-[18px] flex justify-start">
            <button className="border-[1px] border-line dark:border-[#8F88FF] px-[18px] py-[3px] dark:bg-[#383838] rounded-[4px] text-line dark:text-[#8F88FF] font-medium">
              React
            </button>
            <button className="border-[1px] border-line dark:border-[#8F88FF] px-[18px] py-[3px] dark:bg-[#383838] rounded-[4px] mx-[6px] text-line dark:text-[#8F88FF] font-medium">
              Redux
            </button>
            <button className="border-[1px] border-line dark:border-[#8F88FF] px-[18px] py-[3px] dark:bg-[#383838] rounded-[4px] text-line dark:text-[#8F88FF] font-medium">
              Axios
            </button>
          </div>
          <div className="flex justify-between">
            <a
              href="https://github.com/pasaismihan"
              className="text-line dark:text-darkline underline text-[16px] font-medium"
            >
              Github
            </a>
            <a
              href="http://localhost:3001/"
              className="text-line dark:text-darkline underline text-[16px] font-medium"
            >
              {language ? "View Site" : "Siteyi Görüntüle"}
            </a>
          </div>
        </div>
        <hr className=" max-xlg:my-[42px] max-xlg:border-hr max-xlg:border-[1px] max-xlg:w-[300px]" />
        <div className="w-[300px]">
          <img src={RandomJokes} alt=".." />
          <h2 className="text-text dark:text-darktext text-[30px] font-medium my-[18px]">
            {language ? "Random Jokes" : "Rastgele Şakalar"}
          </h2>
          <p className="text-[14px] text-generaltext dark:text-darkgeneraltext">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="my-[18px] flex justify-start">
            <button className="border-[1px] border-line dark:border-[#8F88FF] px-[18px] py-[3px] dark:bg-[#383838] rounded-[4px] text-line dark:text-[#8F88FF] font-medium">
              React
            </button>
            <button className="border-[1px] border-line dark:border-[#8F88FF] px-[18px] py-[3px] dark:bg-[#383838] rounded-[4px] mx-[6px] text-line dark:text-[#8F88FF] font-medium">
              Redux
            </button>
            <button className="border-[1px] border-line dark:border-[#8F88FF] px-[18px] py-[3px] dark:bg-[#383838] rounded-[4px] text-line dark:text-[#8F88FF] font-medium">
              Axios
            </button>
          </div>
          <div className="flex justify-between">
            <a
              href="https://github.com/pasaismihan"
              className="text-line dark:text-darkline underline text-[16px] font-medium"
            >
              Github
            </a>
            <a
              href="http://localhost:3001/"
              className="text-line dark:text-darkline underline text-[16px] font-medium"
            >
              {language ? "View Site" : "Siteyi Görüntüle"}
            </a>
          </div>
        </div>
        <hr className=" max-xlg:my-[42px] max-xlg:border-hr max-xlg:border-[1px] max-xlg:w-[300px]" />
        <div className="w-[300px]">
          <img src={Journey} alt=".." />
          <h2 className="text-text dark:text-darktext text-[30px] font-medium my-[18px]">
            {language ? "Journey" : "Seyahat"}
          </h2>
          <p className="text-[14px] text-generaltext dark:text-darkgeneraltext">
            A simple, customizable, minimal setup cookie plugin that allows your
            users to select which cookies to accept or decline. This was created
            with vanilla JS, SCSS and Parcel Bundler and is available as a NPM
            package and the git repository makes any type of customization to
            code and themes possible.
          </p>
          <div className="my-[18px] flex justify-start">
            <button className="border-[1px] border-line dark:border-[#8F88FF] px-[18px] py-[3px] dark:bg-[#383838] rounded-[4px] text-line dark:text-[#8F88FF] font-medium">
              React
            </button>
            <button className="border-[1px] border-line px-[18px] dark:border-[#8F88FF] py-[3px] dark:bg-[#383838] rounded-[4px] mx-[6px] text-line dark:text-[#8F88FF] font-medium">
              Redux
            </button>
            <button className="border-[1px] border-line px-[18px] dark:border-[#8F88FF] py-[3px] dark:bg-[#383838] rounded-[4px] text-line dark:text-[#8F88FF] font-medium">
              Axios
            </button>
          </div>
          <div className="flex justify-between">
            <a
              href="https://github.com/pasaismihan"
              className="text-line dark:text-darkline underline text-[16px] font-medium"
            >
              Github
            </a>
            <a
              href="http://localhost:3001/"
              className="text-line dark:text-darkline underline text-[16px] font-medium"
            >
              {language ? "View Site" : "Siteyi Görüntüle"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
