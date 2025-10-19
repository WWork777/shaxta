import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "Качество",
            title: "Высокая калорийность и низкие примеси",
            company: "Премиальное качество угля",
            type: "марка D/DГ, калор. 6500–6950",
            description: "Марка D/DГ с высокой калорийностью и низкими примесями. Работает предсказуемо, снижает издержки на очистку. Стабильная премия к рынку."
        },
        {
            year: "Логистика",
            title: "Промышленная база и железная дорога",
            company: "Инфраструктура к отгрузке",
            type: "2 УСО, ж/д и квоты на восток",
            description: "Две фабрики и собственная ж/д уже в работе. Отгрузка сегодня, есть квоты на восток.Объёмы наращиваются быстро."
        },
        {
            year: "Спрос",
            title: "Оффтейк на внутренний и экспортный рынки уже есть.",
            company: "Спрос и продажи",
            type: "РФ, КЗ, Азербайджан, Китай, Индия",
            description: "Покупатели есть на внутреннем рынке и экспорт. График отгрузок выдерживаем. Готовы подписать дополнительные объёмы."
        },
        {
            year: "Капитал",
            title: "Инвестиции идут в рост объёмов, а не в эксперименты.",
            company: "Инвест-вход",
            type: "доля 49% или 100% пакета",
            description: "Капитал идёт в добычу и оборотку. Простая структура входа, прозрачные правила. Масштаб даёт быстрый прирост кэша."
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