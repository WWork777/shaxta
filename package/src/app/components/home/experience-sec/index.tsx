import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Качество",
            title: "Высокая калорийность и низкие примеси",
            company: "Стабильное качество угля",
            type: "марка D/DГ, калор. 6500–6950",
            description: "Д/ДГ 6500–6950 ккал, P 0,009%, зола 2,6–5%, Fe₂O₃ ≤ 0,3%, Al₂O₃ ≤ 1,2% — предсказуемая металлургическая рецептура и премия к стандартному рынку."
        },
        {
            year: "Логистика",
            title: "Единый технологический контур",
            company: "Отправляем «день-в-день»",
            type: "добыча → сухое обогащение (2 УСО) → собственная станция → отгрузка",
            description: "2 линии сухой сепарации, собственная ж/д станция (≈210 тыс. т/мес) и 19,2 км путей. Отгрузка возможна в день обращения, наращивание объёмов — быстро."
        },
        {
            year: "Спрос",
            title: "Долгосрочные контракты на внутренний рынок и экспорт",
            company: "Контракты и география",
            type: "РФ, КЗ, Азербайджан, Китай, Индия",
            description: "100% сбыта закрыто действующими договорами поставки. Покупатели — на внутреннем и внешнем рынке. Отгрузка — сразу, инфраструктура готова."
        },

        {
            year: "Маржа",
            title: "До 50% выхода сортового концентрата 8+ мм",
            company: "Сортовой продукт после обогащения",
            type: "После сепарации продаётся в разы дороже энергетического угля",
            description: "Сухая сепарация даёт высокий выход фракции 8+ мм при низкой себестоимости и без водной обработки. Экологичность процесса + премиальная цена на сортовой концентрат обеспечивают высокую маржу и устойчивый денежный поток."
        },

        {
            year: "Капитал",
            title: "Направление инвестиций",
            company: "Инвест-вход",
            type: "Проходка новых горных выработок и пополнение оборотных средств",
            description: "Инвестиции направляются на проходку новых горных выработок и пополнение оборотных средств. Залогов и обременений нет. Расчётная окупаемость — 4,5 года."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Почему это выгодно</h2>
                        <p className="text-xl text-orange-500 leading-none whitespace-nowrap">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;