import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">{/* bg vector off */}</div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>О шахте</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex rounded-[10px] overflow-hidden">
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
                  Шахта в Кузбассе с{" "}
                  <span className="font-semibold text-black">подтверждёнными запасами</span> и{" "}
                  <span className="font-semibold text-black">действующей инфраструктурой</span>: две линии{" "}
                  <span className="font-semibold text-black">сухого обогащения</span> (УСО),{" "}
                  <span className="font-semibold text-black">собственная ж/д станция</span> и 19 км контактной сети,{" "}
                  <span className="font-semibold text-black">квоты на восток</span>.
                  <br />
                  Качество угля марки Д/ДГ: 6500–6950 ккал/кг (нрм), фосфор 0,009%, зола 2,6–5%, оксид железа Fe₂O₃ ≤
                  0,3%, оксид алюминия Al₂O₃ ≤ 1,2%.
                  <br />
                  Сбыт полностью подтвержден контрактами.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "97+", label: "млн тонн" },
                    { count: "4,5", label: "Лет окупаемость" },
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
                    <p className="text-base xl:text-xl text-black">Документы по запросу и NDA.</p>
                  </div>
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
