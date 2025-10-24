"use client";
<<<<<<< HEAD

import Image from "next/image";
=======
import Image from "next/image"
>>>>>>> e6822f8dff086773df1787d4e30f27b710bbbbe1
import { useEffect, useState } from "react";

const EducationSkills = () => {
    const [educationData, setEductionData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
<<<<<<< HEAD
                const res = await fetch("/api/page-data");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setEductionData(data?.educationData);
            } catch (error) {
                console.error("Error fetching services:", error);
=======
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setEductionData(data?.educationData);
            } catch (error) {
                console.error('Error fetching services:', error);
>>>>>>> e6822f8dff086773df1787d4e30f27b710bbbbe1
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="border-t border-softGray overflow-hidden">
                <div className="container relative z-10">
<<<<<<< HEAD
                    <Image
                        src={"/images/home/education-skill/edu-skill-vector.svg"}
                        alt="vector"
                        width={260}
                        height={170}
                        className="no-print absolute top-0 left-0 transform -translate-y-1/2"
                    />
                    <div className="relative z-10 py-16 md:py-20">
=======
                    <Image src={"/images/home/education-skill/edu-skill-vector.svg"} alt="vector" width={260} height={170} className="no-print absolute top-0 left-0 transform -translate-y-1/2" />
                    <div className="relative z-10 py-16 md:py-32">
>>>>>>> e6822f8dff086773df1787d4e30f27b710bbbbe1
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
                            <h2>Подтверждения и параметры</h2>
                            <p className="text-xl text-orange-500 leading-none whitespace-nowrap">( 03 )</p>
                        </div>
<<<<<<< HEAD

                        <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-10 xl:gap-20">
                            {/* ЛЕВАЯ КОЛОНКА — СПИСОК */}
                            <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                                {educationData?.education?.map((value: any, index: number) => (
                                    <div key={index} className="flex items-start gap-6">
                                        <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                                            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                                        </div>
                                        <div className="flex-1 flex flex-col gap-2">
                                            <h5>{value?.title}</h5>
                                            <p className="font-normal">{value?.description}</p>
                                        </div>
                                    </div>
                                ))}

                                {/* CTA ПОСЛЕ 3-ГО ПУНКТА */}
                                {Array.isArray(educationData?.education) &&
                                    educationData.education.length >= 3 && (
                                        <div className="mt-6">
                                            {/* НОВАЯ, ЧИСТАЯ КНОПКА — без оверлеев/групп */}
                                            <a
                                                href="tel:+79039073334"
                                                className="
                          inline-flex items-center justify-center
                          rounded-full px-6 py-3 md:px-7 md:py-4
                          text-base md:text-lg
                          text-white
                          shadow-sm
                          transition-all
                          bg-black hover:bg-neutral-900 active:translate-y-[1px]
                          focus:outline-none focus:ring-2 focus:ring-black/20
                        "
                                                style={{ backgroundColor: "#000" }} // страховка от глобальных стилей
                                            >
                                                Позвонить
                                            </a>

                                            {/* Подпись под кнопкой (просто текст) */}
                                            {/* <p className="mt-3 text-sm md:text-base text-gray-600">
                        Полную презентацию, сертификаты и лицензии отправим по звонку / NDA.
                      </p> */}
                                        </div>
                                    )}
                            </div>

                            {/* ПРАВАЯ КОЛОНКА — КАРТИНКА */}
                            <div className="w-full lg:flex-1">
                                <div className="relative w-full lg:h-[300px] xl:h-[260px] rounded-lg overflow-hidden border border-softGray">
                                    <Image
                                        src="/images/home/my type figma/20071 (1).jpg"
                                        alt="Инфраструктура и логистика"
                                        fill
=======
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
>>>>>>> e6822f8dff086773df1787d4e30f27b710bbbbe1
                                        className="object-cover"
                                        priority
                                    />
                                </div>
<<<<<<< HEAD
                            </div>
                            {/* /ПРАВАЯ КОЛОНКА */}
=======
                                {/* подпись — можно убрать */}
                                {/* <p className="mt-3 text-center text-black font-normal">
                                    Инфраструктура и логистика
                                </p> */}
                            </div>


>>>>>>> e6822f8dff086773df1787d4e30f27b710bbbbe1
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
        </section>
    );
};

export default EducationSkills;
=======
        </section >
    )
}

export default EducationSkills
>>>>>>> e6822f8dff086773df1787d4e30f27b710bbbbe1
