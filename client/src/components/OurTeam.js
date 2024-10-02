import { ourTeam } from "../assets/data/ourTeam"

function OurTeam() {
    const members = ourTeam
  return (
    <div className="pad1">
        <h1 className="text-[40px] font-medium font-neuething text-deep_text_color">Meet Our Team</h1>

        <div className="flex gap-4 tablet:flex-col">
            {
                members.map((item, idx) => (
                    <div key={idx} className="flex flex-1 flex-col gap-4">
                        <img src={item.img} className="w-full" />

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <h3 className="font-normal text-[24px] small-pc:text-[18px] text-deep_text_color font-neuething">
                                    {item?.name}
                                </h3>

                                <p className="text-deep_text_color text-[14px] tablet:text-[13px] font-normal">
                                    {item?.role}
                                </p>

                            </div>

                            <span className="flex items-center gap-4">
                                {
                                    item.socials.map((social, socialIdx) => (
                                        <a 
                                            href={social.link}
                                            className="p-2 rounded-full bg-deep_text_color text-white"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >   
                                            {social.icon}
                                        </a>
                                    ))
                                }
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurTeam