
import React from "react"
import Image from "next/image"

export default function Hero (){
    return(
        <div
        className="flex md:justify-end justify-center items-center md:h-[716px] h-[400px] bg-no-repeat bg-center bg-contain bg-[#F4F5F7]" 
        style={{
            backgroundImage: `url("/images/p5.png")`,
        }}>
            <div className="flex items-center justify-end">
            <Image
            src="/images/p5.png"
            alt="pp"
            width={1000}
            height={1000}
          ></Image>
          </div>
            <div className="bg-[#FFF3E3] flex gap-[46px] flex-col h-full md:h-fit w-fit md:mr-[58px] rounded-[10px] pl-[39px] pr-[43px] pt-[62px] pb-[37px]">
                <div>
                    <h3 className="text-[#333333] text-[16px] font-semibold">New Arrival</h3>
                    <h2 className="text-primary text-[41px] md:text-[52px] font-bold leading-[50px] md:leading-[65px] mb-[17px]">Discover Our <br />New Collection</h2>
                    <p className="font-medium md:text-[18px] text-[11px]  text-[#333333] leading-[16px] md:leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
                </div>
                <div className="bg-primary px-[72px] py-[25px] w-fit">
                   <p className="text-black font-bold text-[16px]">BUY NOW</p>
                </div>
            </div>
        </div>
    )
};