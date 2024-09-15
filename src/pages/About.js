import React from "react";
import Team1 from "../assets/images/Team1.png"
import Team3 from "../assets/images/Team3.png"
import Team4 from "../assets/images/Team4.png"
import Team5 from "../assets/images/Team5.png"
import linkedin from "../assets/images/linkedIn-nk.png"
import x from "../assets/images/x-nk.png"
import elephant from "../assets/images/elephant.png"
import { FaArrowRightLong } from "react-icons/fa6";


const About = () => {
  return (
    <div className="w-full ">
      <div>
        <div className="  bg-grey2 px-[69px]  ">
          <div className="flex justify-between pb-[41px] pt-[124px]">
            <div className="w-[120px] h-[58px] border-[0.8px] rounded-md border-primary items-center justify-center p-[10px]">
              <p className="text-center text-2xl leading-[2.13rem]">About</p>
            </div>
            <div className="w-[624px] ">
              <h2 className="text-7xl font-bold ">NewKindred</h2>
              <p className="text-base">
                We partner with businesses to build great brands, develop great
                products, create stores for themselves, and shape their brand
                experiences
              </p>
            </div>
          </div>
        </div>
          {/* second Section */}

          <div className="px-[69px] bg-white">
            <div className="pt-[43px] pb-[66px] grid grid-cols-2 gap-x-[216px] gap-y-[16px]">
              <p>
                In our world saturated with information, where voices and brands compete for attention daily, 
                the art of storytelling often gets drowned out, leaving narratives that lack clarity and authenticity.
              </p>
              <p>
                However, within this chaos lies a space where truth is palpable, 
                resolution is accurate, and authenticity is relatable. 
                It's where brands can genuinely express themselves, forging true connections with their audience.
              </p>
              <p>
                What then defines a compelling narrative? 
                It's the fusion of resolution, authenticity, and consistency. Yet, many brands are losing that voice. 
              </p>
            </div>
          </div>
        

        {/* Featured Image */}
        <div>
          <img
            src={elephant}
            alt="Elephant"
          />
        </div>
        <div className="bg-white px-[69px]">
          <h2 className="text-[40px] pt-[69px] pb-[42px]">Meet Our Team</h2>
          <div className="flex gap-x-[15px] ">
            
            {/* Team member1 */}
            <div className="">
              <img
                src={Team1}
                alt="Team1"
                className="bg-[#383D38]"

              />
              <h3 className="text-[24px] ">
                Ajayi Toyese Vlad
              </h3>
              <p className="text-[14px] ">Brand & Graphic Design Associate</p>
              <div className="py-[16px] flex gap-x-[16px]">
                <img
                  src= {x}
                  alt= "x"
                />

                <img
                  src= {linkedin}
                  alt= "LinkedIn"
                />
              </div>
            </div>

            {/* Team member 2 */}
            <div className="">
              <img
                src={Team3}
                alt="Team3"
                className="bg-[#383D38]"
              />
              <h3 className="text-[24px] ">
                Haris Adeyemo
              </h3>
              <p className="text-[14px] ">Brand & Graphic Design Associate</p>
              <div className="py-[16px] flex gap-x-[16px]">
                <img
                  src= {x}
                  alt= "x"
                />

                <img
                  src= {linkedin}
                  alt= "LinkedIn"
                />
              </div>
            </div>

            {/* Team member 3 */}
            <div className="">
              <img
                src={Team4}
                alt="Team4"
                className="bg-[#383D38]"

              />
              <h3 className="text-[24px] ">
                    Christy Douglas
              </h3>
              <p className="text-[14px] ">Brand & Graphic Design Associate</p>
              <div className="py-[16px] flex gap-x-[16px]">
                <img
                  src= {x}
                  alt= "x"
                />

                <img
                  src= {linkedin}
                  alt= "LinkedIn"
                />
              </div>
            </div>

            {/* Team member 4 */}
            <div className="">
              <img
                src={Team5}
                alt="Team5"
                className="bg-[#383D38]"

              />
              <h3 className="text-[24px] ">
                Ajayi Toyese Vlad
              </h3>
              <p className="text-[14px] ">Brand & Graphic Design Associate</p>
              <div className="py-[16px] flex gap-x-[16px]">
                <img
                  src= {x}
                  alt= "x"
                />

                <img
                  src= {linkedin}
                  alt= "LinkedIn"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="w-[129px] text-white m-[48px] bg-[#4F48EC] rounded px-[24px] py-[16px]">Shuffle</button>
          </div>
          <div className="">
            <div className="pt-[43px] pb-[66px] grid grid-cols-2 gap-x-[216px] gap-y-[16px]">
              <div className="flex flex-col gap-3">
                <p>
                  At NewKindred, we specialize in building these spaces. Through our approach, we challenge businesses to embody their true essence and become <span className="font-bold">storytellers.</span>  
                </p>
                <p>
                  Our mission is crystal clear to guide businesses in building genuine, relatable brands.
                </p>
              </div>
              <div>
                <p>
                  NewKindred is a Full Service Creative Agency, We partner with and assist businesses in building great brands, telling their stories, and becoming storytellers. 
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="bg-grey2 pl-[70px] pt-[74px] pb-[119px]">
          <h2 className="text-7xl ">Ready to Work ? </h2>
          <button className=" mt-[24px] border rounded border-primary flex px-[27px] py-[17px]">
            <p className="text-lg text-primary flex justify-center items-center">Start a project <span className="ml-[10px]"><FaArrowRightLong /></span></p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
