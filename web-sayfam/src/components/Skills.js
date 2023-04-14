import React from "react";

const Skills = ({ language }) => {
  return (
    <div className="font-Inter mt-[60px] xlg:mt-[124px] ml-leftspace mr-[125px] xlg:mr-rightspace ">
      <h1 className="text-[48px] max-xlg:text-center max-xlg:mb-[20px] max-xlg:mr-[20px] font-semibold dark:text-darktitle text-title">
        {language ? "Skills" : "Yetenekler"}
      </h1>
      <div className="flex justify-between max-xlg:flex-col max-xlg:items-center">
        <div>
          <h2 className="my-[15px] text-[30px] text-text dark:text-darktext max-xlg:text-center font-medium">
            Java Script
          </h2>
          <p className="text-generaltext dark:text-darkgeneraltext text-[12px] w-[185px] max-xlg:w-[300px] xl:w-[300px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="mx-[50px]">
          <h2 className="my-[15px] text-[30px] text-text dark:text-darktext max-xlg:text-center font-medium">
            React.Js
          </h2>
          <p className="text-generaltext dark:text-darkgeneraltext text-[12px] w-[185px] max-xlg:w-[300px] xl:w-[300px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div>
          <h2 className="my-[15px] text-[30px] text-text dark:text-darktext max-xlg:text-center font-medium">
            Node.Js
          </h2>
          <p className="text-generaltext dark:text-darkgeneraltext text-[12px] w-[185px] max-xlg:w-[300px] xl:w-[300px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <hr className="my-[42px] border-hr dark:border-darkhr border-[1px]" />
      <h2 className="text-[48px] font-semibold max-xlg:text-center max-xlg:mb-[30px] text-title dark:text-darktitle">
        {language ? "Profile" : "Profil"}
      </h2>
      <div className="flex justify-between max-xlg:flex-wrap max-xlg:justify-center">
        <div className="flex justify-between max-xlg:ml-[70px]">
          <div>
            <h3 className="text-[30px] text-text dark:text-darktext font-medium mb-[21px] max-xlg:w-[100px] max-xlg:mx-auto ">
              {language ? "Profile" : "Profil"}
            </h3>
            <p className="text-[18px] dark:text-white font-semibold leading-[36px]">
              {language ? "Date Of Birth" : "Doğum Yılı"}
            </p>
            <p className="text-[18px] font-semibold dark:text-white leading-[36px]">
              {language ? "City Of Residence" : "İkamet Şehri"}
            </p>
            <p className="text-[18px] font-semibold dark:text-white leading-[36px] mb-[20px]">
              {language ? "Educational Status" : "Eğitim Durumu"}
            </p>
            <p className="text-[18px] font-semibold dark:text-white leading-[36px]">
              {language ? "Preferred Role" : "Tercih Ettiği Rol"}
            </p>
          </div>
          <div className="w-[231px] mt-[67px] ml-12 dark:text-white">
            <p className="text-[18px] leading-[36px] dark:text-white ">
              09.21.1994
            </p>
            <p className="text-[18px] leading-[36px] mb-1 dark:text-white">
              Antalya
            </p>
            <p className="text-[18px]leading-[36px] mb-[5px]  dark:text-white">
              {language
                ? "Celal Bayar University Engineering 2018"
                : "Celal Bayar Üniversitesi Mühendislik 2018"}
            </p>
            <p className="text-[18px] leading-[36px] dark:text-white">
              Frontend, UI
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-[30px] max-xlg:w-[150px] max-xlg:mx-auto text-text dark:text-darktext font-medium max-xlg:my-[30px] mb-4">
            {language ? "About Me" : "Hakkımda"}
          </h3>
          <p className="text-generaltext dark:text-darkgeneraltext text-[18px] w-[300px] xl:w-[558px] max-xlg:ml-[20px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
        </div>
      </div>
      <hr className="my-[42px] border-hr dark:border-darkhr border-[1px]" />
    </div>
  );
};

export default Skills;
