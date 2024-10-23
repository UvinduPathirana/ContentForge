// Basic next.js component


const Header = () => {
    return (
        <div className="h-[103px] px-[162px] py-6 bg-[#191919] justify-between items-center inline-flex">
            <div className="w-[178.91px] h-[50px] relative">
                <div className="w-[112.82px] h-[17.16px] left-[62.73px] top-[16.36px] absolute">
                </div>
                <div className="w-[50px] h-[50px] left-0 top-0 absolute">
                    <div className="w-[33.33px] h-[16.67px] left-[16.67px] top-[33.33px] absolute">
                    </div>
                    <div className="w-[16.67px] h-[33.33px] left-0 top-[16.67px] absolute">
                    </div>
                    <div className="w-[33.33px] h-[16.67px] left-0 top-0 absolute">
                    </div>
                    <div className="w-[16.67px] h-[33.33px] left-[33.33px] top-0 absolute">
                    </div>
                </div>
            </div>
            <div className="rounded-xl justify-start items-center gap-10 flex">
                <div className="px-6 py-3.5 bg-[#141414] rounded-[10px] border border-[#333333] justify-start items-center gap-2.5 flex">
                    <div className="text-white text-lg font-medium font-['Inter'] leading-[27px]">Home</div>
                </div>
                <div className="text-[#7e7e80] text-lg font-normal font-['Inter'] leading-[27px]">News</div>
                <div className="text-[#7e7e80] text-lg font-normal font-['Inter'] leading-[27px]">Podcasts</div>
                <div className="text-[#7e7e80] text-lg font-normal font-['Inter'] leading-[27px]">Resources</div>
            </div>
            <div className="px-5 py-3.5 bg-[#ffd019] rounded-[10px] justify-start items-center gap-2.5 flex">
                <div className="text-[#141414] text-lg font-medium font-['Inter'] leading-[27px]">Contact Us</div>
            </div>
        </div>
    )
}