"use client";
import Image from "next/image"
import { useEffect, useState } from "react";

const EducationSkills = () => {
    const [educationData, setEductionData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setEductionData(data?.educationData);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="border-t border-softGray overflow-hidden">
                <div className="container relative z-10">
                    <Image src={"/images/home/education-skill/edu-skill-vector.svg"} alt="vector" width={260} height={170} className="no-print absolute top-0 left-0 transform -translate-y-1/2" />
                    <div className="relative z-10 py-16 md:py-32">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                            <h2>Подтверждения и параметры</h2>
                            <p className="text-xl text-orange-500 leading-none whitespace-nowrap">( 03 )</p>
                        </div>
                        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-10 xl:gap-20">
                            <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                                {educationData?.education?.map((value: any, index: any) => {
                                    return (
                                        <div key={index} className="flex items-start gap-6">
                                            <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                                                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                            </div>
                                            <div className="flex-1 flex flex-col gap-2">
                                                <h5>{value?.title}</h5>
                                                <p className="font-normal">{value?.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            {/* ПРАВАЯ КОЛОНКА — ОДНА БОЛЬШАЯ КАРТИНКА */}
                            <div className="w-full lg:flex-1">
                                <div className="relative w-full lg:h-[370px] xl:h-[320px] rounded-lg overflow-hidden border border-softGray">
                                    <Image
                                        src="/images/home/my type figma/20071 (1).jpg" // твой файл из /public
                                        alt="Инфраструктура и логистика"
                                        fill                   // картинка растягивается по контейнеру
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                {/* подпись — можно убрать */}
                                {/* <p className="mt-3 text-center text-black font-normal">
                                    Инфраструктура и логистика
                                </p> */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default EducationSkills