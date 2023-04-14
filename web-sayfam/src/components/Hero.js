import React from "react";
import github from "../github.png";
import linkedin from "../LinkedIn.png";
import me from "../wp.jpeg";

const Hero = ({ language }) => {
  return (
    <div className="font-Inter">
      <div className="flex justify-between pt-[50px] lg:pt-[100px] items-center mx-[100px] md:ml-leftspace md:mr-rightspace ">
        <p className="text-Amor dark:text-darkAmor hover:rotate-[-150deg] border rounded-full w-[45px] h-[45px] lg:w-[63.68px] lg:h-[62px] text-center bg-acikmor dark:bg-darkacikmor pt-[8px]  lg:pt-[12px] rotate-[30deg] font-bold text-[16px] lg:text-[24px]">
          P
        </p>
        <div className="block sm:hidden ">
          <div className="space-y-1 cursor-pointer ">
            <div className="bg-gray-800 dark:bg-zinc-300 hover:w-4  w-8 h-1 rounded-full"></div>
            <div className="bg-gray-800 dark:bg-zinc-300  hover:w-4 w-8 h-1 rounded-full"></div>
            <div className="bg-gray-800 dark:bg-zinc-300 hover:w-4 w-8 h-1 rounded-full"></div>
          </div>
        </div>

        <div className="hidden sm:flex items-center text-[16px] lg:text-[18px] ">
          <p className="text-generaltext dark:text-generaltext font-medium text-[18px]">
            {language ? "Skills" : "Yetenekler"}
          </p>
          <p className="text-generaltext dark:text-generaltext sm:mx-[25px]  md:mx-[50px]  lg:mr-[91.57px] lg:ml-[82.16px]  font-medium">
            {language ? "Projects" : "Projeler"}
          </p>
          <p className="border-[1.3px] py-[8px] lg:py-[12px] px-[24px] lg:px-[32px] dark:bg-white rounded-[6px] border-line text-line dark:text-line font-medium">
            {language ? "Hire Me" : "İşe Al"}
          </p>
        </div>
      </div>
      <div className="mx-[100px] md:ml-leftspace md:mr-rightspace xlg:mt-[115px] flex justify-between max-xlg:flex-wrap-reverse max-xlg:justify-center ">
        <div className="max-md:text-center">
          <div className=" hidden sm:flex items-center ">
            <hr className="w-[102px] border-line dark:border-darkline border mr-[10px]" />
            <p className="text-text dark:text-darktext">Paşa İsmihan</p>
          </div>

          <p className="dark:text-darktitle lg:text-[72px] sm:text-[48px] my-[40px] text-[24px] md:leading-[72px] text-title font-bold shrink-0">
            {language ? "Creative Thinker" : "Yaratıcı Düşünür"} <br />
            {language ? "Minimalism Lover" : "Minimalizm Sever"}
          </p>
          <p className=" sm:w-[400px] lg:w-[553px] text-generaltext dark:text-darkgeneraltext ">
            {language
              ? "Hi, I’m Paşa. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products withgreat user experiences. Let’s shake hands with me."
              : "Merhaba ben Paşa. Ben fullstack geliştiricisiyim.Eğer Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünleri oluşturacak bir Geliştirici arıyorsanız. El sıkışalım."}
          </p>
          <div className="mt-[40px] md:block flex flex-col  ">
            <button className="border  md:px-[32px] md:py-[12px] rounded-[6px] text-white dark:text-black dark:bg-darkline text-[18px] bg-line ">
              {language ? "Hire Me" : "İşe Al"}
            </button>
            <button className="mx-[12px]  max-md:m-0 border border-line dark:border-darkline md:px-[32px] md:py-[12px] dark:bg-white rounded-[6px] text-[18px] dark:text-darkline text-line max-md:my-4  ">
              <i class="fa-brands fa-github"></i> Github
            </button>
            <button className="border  border-line dark:border-darkline dark:bg-white  md:px-[32px] md:py-[12px] rounded-[6px] text-line text-[18px] dark:text-darkline">
              <i class="fa-brands fa-linkedin-in"></i> Linkedin
            </button>
          </div>
        </div>
        <img
          src={me}
          alt=".."
          className="w-[350px] h-[275px] xl:w-[476px] xl:h-[375px] rounded-[18px]  max-xl:mt-[100px]"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
