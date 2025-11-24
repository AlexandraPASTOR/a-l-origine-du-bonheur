import { faqData } from "../data/faqData";
import { useState } from "react";

function Faq () {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggleFaq = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section id="faq" className="p-4 bg-(--block-color)/20 pb-16 md:px-10 lg:px-20">
          
      <h2 className="text-(--secondary-color) text-3xl font-bold py-4">Vos questions, mes réponses</h2>
        
              <div className="flex flex-col gap-4 text-center mt-8 md:w-3/4 lg:w-2/3 xl:w-1/2 md:mx-auto">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-(--primary-color) rounded-xl p-4 cursor-pointer transition duration-300 ease-in-out shadow-[3px_3px_6px_rgba(0,0,0,0.32)]"
            onClick={() => toggleFaq(item.id)}
          >
            <div className="relative">
             <span
                className="absolute left-0 text-(--secondary-color) text-2xl font-bold transition-transform duration-300 -mt-2"
              >
               {
                  activeId === item.id ? "–" : "+"
                }
              </span>
              <h3 className="font-semibold text-(--text-color) whitespace-pre-line px-8 text-center">
                {item.question}
              </h3>
              
            </div>

                        <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeId === item.id ? "max-h-96 mt-3" : "max-h-0"
              }`}
            >
               <div className="w-2/3 mx-auto mb-4 mt-1 border-t border-gray-300"></div>
              <p className="text-sm leading-relaxed whitespace-pre-line px-4 md:px-8 lg:px-12">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
        
        </section>
    )
}

export default Faq