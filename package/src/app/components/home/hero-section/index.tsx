import Image from "next/image"

const index = () => {
    return (
        <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
            <div className="container">
                <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
                    <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
                        <div>
                            <div className="flex items-center gap-8">
                                <h1>Инвестируйте в шахту в Кузбассе
                                </h1>
                                {/* <div className="wave">
                                    <Image src={"/images/home/banner/wave-icon.svg"} alt="wave-icon" width={62} height={62} className="" />
                                </div> */}
                            </div>
                            <h2 className="text-secondary font-normal max-w-md xl:max-w-xl text-xl md:text-2xl mt-2">
                                Стабильный доход на 50 лет
                            </h2>
                        </div>
                        <p className="text-secondary font-normal max-w-md xl:max-w-xl">РФ, Казахстан, Азербайджан, Даже в условиях санкций и сжатой кредитной базы актив остаётся рентабельным за счёт себестоимости, качества и отсутствия долговой нагрузки.</p>
                    </div>
                    <Image src={"/images/home/banner/hero01.jpg"} alt="banner-img" width={685} height={650} className="block lg:hidden" />
                </div>
            </div>
            <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
                <Image src={"/images/home/banner/hero01.jpg"} alt="banner-img" width={685} height={650} className=" absolute right-0 top-0 z-1 rounded-l-[10px]" />
            </div>
        </section>
    )
}

export default index