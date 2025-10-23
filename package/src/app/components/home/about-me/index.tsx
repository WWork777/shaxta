import Image from "next/image";

const AboutMe = () => {
    return (
        <section>
            <div className="relative bg-softGray py-10 md:py-32">
                <div className="absolute top-0 w-full px-9">
                    {/* <Image
                        src="/images/home/about-me/resume-bg-img.svg"
                        alt="resume-bg-img"
                        width={1200}
                        height={348}
                        className="w-full"
                    /> */}
                </div>

                <div className="relative z-10">
                    <div className="container">
                        <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
                            <h2>О шахте</h2>
                            <p className="text-xl text-primary">( 01 )</p>
                        </div>

                        <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
                            <div className="w-[303px] h-[440px]  hidden lg:flex rounded-[10px] overflow-hidden">
                                <Image
                                    src="/images/home/banner/shaxta02.jpg"
                                    alt="about-banner"
                                    width={303}
                                    height={440}
                                    className="w-full h-full"
                                />
                            </div>

                            <div className="w-full lg:max-w-2xl flex-1">
                                <p>
                                    Шахта в Кузбассе с подтверждёнными балансовыми запасами 97,3 млн тонн (потенциал с учётом ресурсов — до 277,5 млн тонн). Добываемый уголь марки D/DГ высокого и стабильного качества: 6 500–6 950 ккал (АР), зольность 2,6–5%, фосфор около 0,009%.
                                    <br />
                                    Инфраструктура готова к работе: 2 установки сухой сепарации (УСО), собственная железнодорожная станция с пропускной способностью порядка ≈210 тыс. тонн в месяц, 19,2 км контактной сети.
                                    <br />
                                    Сбыт выстроен: поставки на внутренний рынок (Россия, Казахстан, Азербайджан) и экспортные направления — Китай, Индия. Возобновление добычи возможно в течение 2–3 месяцев после выполнения регламентов и переподписания технической документации.                                </p>

                                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                                    {[
                                        { count: "97+", label: "млн тонн" },
                                        { count: "5 лет", label: "Окупаемость" },
                                        { count: "100%", label: "Ликвидность" },
                                    ].map((item, i) => (
                                        <div key={i}>
                                            <h3>{item.count}</h3>
                                            <p className="text-base md:text-lg text-black">{item.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                                    <div className="flex items-center gap-3.5">
                                        {/* <Image
                                            src="/images/icon/lang-icon.svg"
                                            alt="lang-icon"
                                            width={30}
                                            height={30}
                                        /> */}
                                        <p className="text-base xl:text-xl text-black">Документы по запросу и NDA.</p>
                                    </div>
                                    {/* <div className="flex flex-wrap justify-center items-center gap-2.5">
                                        {["English", "Hindi", "Malayalam"].map((lang) => (
                                            <p
                                                key={lang}
                                                className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                                            >
                                                {lang}
                                            </p>
                                        ))}
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
