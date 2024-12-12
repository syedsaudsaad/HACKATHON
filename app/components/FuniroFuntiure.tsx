import Image from "next/image"

import React from "react";
export default function FuniroFurniture(){
    return(
        <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
            <div className="text-center relative w-full md:top-5 top-0">
                <h3 className="text-[14px] md:text-[20px] font-semibold text-Gray2">Share your setup with</h3>
                <h2 className="text-[30px] md:text-[40px] font-bold text-Gray1">#FuniroFurniture</h2>
            </div>
           <div className="flex justify-center items-center w-full "
            >
                <Image src="/images/p16.png" width={174} height={182} alt="images"></Image>
                <Image src="/images/p17.png" width={160} height={162} alt="images"></Image>
                <Image src="/images/p18.png" width={123} height={126} alt="images"></Image>
                <Image src="/images/p19.png" width={123} height={123} alt="images"></Image>
                <Image src="/images/p20.png" width={130} height={132} alt="images"></Image>
                <Image src="/images/p21.png" width={123} height={134} alt="images"></Image>
                <Image src="/images/p22.png" width={139} height={146} alt="images"></Image>
                <Image src="/images/p23.png" width={138} height={140} alt="images"></Image>
                <Image src="/images/p24.png" width={145} height={124} alt="images"></Image>
            </div>
            </div>
        
    )
}
