import React from "react";

const Footer = ({ language }) => {
  return (
    <div className="font-Inter   mb-[140px] h-[409px] bg-bg dark:bg-[#141414]">
      <div className="ml-leftspace  mr-rightspace ">
        <h1 className="text-[42px] text-title dark:text-darktitle  pt-[85px] pb-[63px] font-semibold w-[540px]">
          {language
            ? "Let’s work together on your next product."
            : "Bir sonraki ürününüz üzerinde birlikte çalışalım."}
        </h1>
        <div className="flex justify-between max-lg:flex-wrap ">
          <a
            href="/"
            className="text-footergmail  text-[20px] dark:text-darkhr underline max-lg:mb-[63px]"
          >
            👉 pasaismihan0@gmail.com
          </a>
          <div>
            <a href="/" className="text-[18px] dark:text-[#E1E1FF]">
              {language ? "Personal Blog" : "Kişisel Blog"}
            </a>
            <a
              href="/"
              className="text-[18px] mx-[20px] text-footergithub dark:text-darkfootergithub"
            >
              Github
            </a>
            <a
              href="/"
              className="text-[18px] text-footerlinkedin dark:text-darkfooterlinkedin"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
