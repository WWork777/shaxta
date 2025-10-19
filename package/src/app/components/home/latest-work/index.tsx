"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type WorkItem = {
    image: string;
    title: string;
    client: string;          // короткий подзаголовок под названием
    description?: string;    // длинный текст для модалки
    points?: string[];       // маркированный список в модалке
    images?: string[];       // если хочешь несколько картинок в модалке
};

const LatestWork = () => {
    const [workData, setWorkData] = useState<WorkItem[]>([]);
    const [selected, setSelected] = useState<WorkItem | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/work-data");
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setWorkData(data?.workData || []);
            } catch (e) {
                console.error("Error fetching work-data:", e);
            }
        };
        fetchData();
    }, []);

    // блочим скролл страницы, когда открыта модалка
    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [selected]);

    return (
        <section>
            <div className="bg-softGray">
                <div className="container">
                    <div className="py-16 xl:py-32">
                        {/* шапка */}
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16 pt-7">
                            <h2>Ключевые материалы</h2>
                            <p className="text-xl text-orange-500 leading-none whitespace-nowrap">( 04 )</p>
                        </div>


                        {/* 4 карточки */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 xl:gap-y-12">
                            {workData?.slice(0, 4).map((value, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelected(value)}
                                    className="text-left flex flex-col gap-3 xl:gap-4 cursor-pointer"
                                >
                                    {/* ← group только здесь */}
                                    <div className="relative rounded-lg overflow-hidden group aspect-[600/430]">
                                        <img
                                            src={value.image}
                                            alt={value.title}
                                            width={600}
                                            height={430}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                        />

                                        {/* блюр и кнопка на ховере только над фото */}
                                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity
                                                        bg-black/35 backdrop-blur-sm">
                                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                                                        bg-white/85 text-gray-900 font-medium shadow">
                                                Подробнее
                                                <img src="/images/icon/right-arrow-icon.svg" alt="" className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Подписи */}
                                    <div className="flex flex-col gap-1">
                                        <h5 className="truncate">{value.title}</h5>
                                        <p className="text-gray-600">{value.client}</p>

                                        {/* Нижняя строка «Подробнее →» */}
                                        <div className="mt-1 inline-flex items-center gap-2 text-gray-700 hover:text-gray-900">
                                            <span className="text-base">Подробнее</span>
                                            <img src="/images/icon/right-arrow-icon.svg" alt="" className="h-4 w-4" />
                                        </div>
                                    </div>
                                </button>

                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
                    onClick={() => setSelected(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="relative isolate z-[1010] bg-white rounded-2xl shadow-2xl
                        w-[80vw] max-w-[520px] lg:max-w-[44vw] 
                        h-[60vh] grid grid-rows-[auto_1fr] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* крестик всегда выше всего */}
                        <button
                            onClick={() => setSelected(null)}
                            aria-label="Закрыть"
                            className="absolute top-3 right-3 z-[200] w-10 h-10 rounded-full 
                                        bg-white/95 shadow ring-1 ring-black/5 hover:bg-gray-100 transition"
                        >
                            ✕
                        </button>

                        {/* верх: компактное фото (28–30vh); любой ваш оранжевый декор делайте с z-[5] */}
                        {/* <div className="relative bg-gray-100 h-[28vh] sm:h-[30vh] z-[10]">
                            <div className="absolute inset-0">
                                {selected.images?.length ? (
                                    <Image src={selected.images[0]} alt={selected.title} fill className="object-contain" />
                                ) : (
                                    <Image src={selected.image} alt={selected.title} fill className="object-contain" />
                                )}
                            </div>
                        </div> */}

                        {/* низ: текст слева с ограниченной шириной */}
                        <div className="h-[calc(78vh-28vh)] sm:h-[calc(78vh-30vh)] overflow-y-auto p-6">
                            <div className="text-left space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900">{selected.title}</h3>
                                    {selected.client && (
                                        <p className="text-sm text-gray-500 mt-1 max-w-[62ch]">
                                            {selected.client}
                                        </p>
                                    )}
                                </div>

                                {selected.description && (
                                    <p className="text-gray-700 leading-relaxed max-w-[65ch]">
                                        {selected.description}
                                    </p>
                                )}

                                {selected.points?.length ? (
                                    <ul className="grid gap-2 sm:grid-cols-2 text-gray-800
                                            text-[13.5px] leading-[1.35] sm:text-[15px] sm:leading-[1.45]">
                                        {selected.points.map((p, i) => (
                                            <li key={i} className="pl-5 relative max-w-[62ch]">
                                                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-orange-500" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </section>
    );
};

export default LatestWork;
