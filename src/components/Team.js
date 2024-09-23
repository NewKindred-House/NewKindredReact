import React from "react"


const Team = (props) =>{
    return (
        <div className="flex gap-x-[15px] ">
            
            {/* Team member1 */}
            <div className="">
              <img
                src={props.image}
                alt="Team1"
                className="bg-[#383D38]"

              />
              <h3 className="text-[24px] ">
                {props.name}
              </h3>
              <p className="text-[14px] ">{props.title}</p>
              <div className="py-[16px] flex gap-x-[16px]">
                <img
                  src= {props.twitter}
                  alt= "x"
                />

                <img
                  src= {props.linkedin}
                  alt= "LinkedIn"
                />
              </div>
            </div>

            
         </div>
    )
}

export default Team;
