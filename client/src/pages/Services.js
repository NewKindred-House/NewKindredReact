import { servicesWeDo } from "../assets/data/service"
import Banner from "../components/Banner"

function Services() {
    const ourServices = servicesWeDo
  return (
    <div>
        <Banner section={'Services'} />

        <div className="pad1 font-neuething flex flex-col gap-12 mt-12">
            <div className="flex flex-col gap-6">
                <h2 className="font-medium text-[32px] tablet:text-[24px] text-deep_text_color">
                    We help businesses build strong brands, develop standout products, and craft compelling stories
                </h2>

                <p className="text-[24px] tablet:text-[18px] font-normal text-text_color ">
                    We understand that authentic storytelling often gets lost, this is why we bring clarity and authenticity back to your brand's narrative. Our mission is to team up with businesses to express their true essence and connect genuinely with their audience.
                </p>
            </div>

            <div className="w-fit">
                <div className="border-[0.8px] border-primary bg-banner_color pad2 text-deep_text_color font-medium text-[20px] tablet:text-[18px] phonetext-[16px]">
                    What we do
                </div>
            </div>

            <div className="flex flex-col">
                {
                    ourServices.map((item, idx) => (
                        <div key={idx} className="mb-12">
                            <h2 className='text-[32px] font-neuething tablet:text-[24px] font-semibold text-text_color2'>
                                {item.name}
                            </h2>

                            <div className="mt-8">
                                <ul className="flex flex-col gap-6 h-[250px] small-pc:h-auto flex-wrap">
                                    {
                                        item.points.map((point, pointId) => (
                                            <li key={pointId}>
                                                {point.text}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Services