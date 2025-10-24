import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Качество",
            title: "Высокая калорийность и низкие примеси",
            company: "Стабильное качество угля",
            type: "марка D/DГ, калор. 6500–6950",
            description:
                "Д/ДГ 6500–6950 ккал, P 0,009%, зола 2,6–5%, Fe₂O₃ ≤ 0,3%, Al₂O₃ ≤ 1,2% — предсказуемая металлургическая рецептура и ценовая премия к стандартному рынку."
        },
        {
            year: "Логистика",
            title: "Единый технологический комплекс",
            company: "Отправляем «день-в-день»",
            type: "добыча → переработка → погрузка → отправка",
            description:
                "2 линии сухой сепарации, собственная ж/д станция (≈210 тыс. т/мес) и 19,2 км путей."
        },
        {
            year: "Спрос",
            title: "Долгосрочные контракты на внутренний рынок и экспорт",
            company: "Контракты и география",
            type: "РФ, КЗ, Азербайджан, Китай, Индия",
            description:
                "100% сбыта закрыто действующими договорами поставки. Покупатели — на внутреннем и внешнем рынке. Отгрузка — сразу, инфраструктура готова."
        },
        {
            year: "Маржа",
            title: "До 50% выхода сортового концентрата",
            company: "Сортовой продукт после обогащения",
            type: "",
            description:
                "Низкая себестоимость на установках сухой сепарации (без воды), экологичность процесса и небольшая глубина залегания (100–400 м) делают добычу и переработку заметно выгоднее конкурентов."
        },
        {
            year: "Капитал",
            title: "Направление инвестиций",
            company: "Инвест-вход",
            type: "Проходка новых горных выработок и пополнение оборотных средств",
            description:
                "Инвестиции направляются на проходку новых горных выработок и пополнение оборотных средств. Залогов и обременений нет. Расчётная окупаемость — 4,5 года."
        }
    ];

    return (
        <section>
            <div className="pt-16 md:pt-24 pb-8 md:pb-10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Почему это выгодно</h2>
                        <p className="text-xl text-orange-500 leading-none whitespace-nowrap">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
                            >
                                <div>
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className="relative">
                                    {index < experiences.length && (
                                        <div
                                            className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'
                                                } bg-softGray`}
                                        ></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div
                                            className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                                }`}
                                        >
                                            {index === 1 && <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}

                        {/* --- CTA: цена (внутри рамки) + кнопки (снаружи) --- */}
                        <div className="mt-10 rounded-xl border border-softGray p-5 md:p-6 bg-white/70">
                            <p className="text-base md:text-lg leading-relaxed">
                                <span className="font-semibold text-black">Стоимость продажи доли бизнеса 49+1%</span> —{" "}
                                <span className="font-semibold text-black">3,5 млрд рублей</span>. Возможна продажа до{" "}
                                <span className="font-semibold text-black">70% акций</span>. <br /> Чтобы получить полную презентацию с подробным
                                описанием — <span className="font-semibold text-black">позвоните Дмитрию</span>.
                            </p>
                        </div>

                        {/* Кнопки вне рамки, в ряд (на мобилке — переносятся) */}
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <a
                                href="tel:+79039073334"
                                className="rounded-full px-5 py-2.5 text-[15px] font-medium text-white bg-black hover:bg-gray-900 transition"
                                aria-label="Позвонить Дмитрию"
                            >
                                Позвонить
                            </a>

                            <a
                                href="https://wa.me/79039073334?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8E%20%D0%BF%D0%BE%20%D1%88%D0%B0%D1%85%D1%82%D0%B5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full px-5 py-2.5 text-[15px] font-medium text-white bg-[#25D366] hover:brightness-95 transition"
                                aria-label="Написать в WhatsApp"
                            >
                                WhatsApp
                            </a>

                            <a
                                href="https://t.me/dmserhill"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full px-5 py-2.5 text-[15px] font-medium text-white bg-[#229ED9] hover:brightness-95 transition"
                                aria-label="Написать в Telegram"
                            >
                                Telegram
                            </a>
                        </div>
                        {/* --- /CTA --- */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;
