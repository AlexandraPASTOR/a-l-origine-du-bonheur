import { servicesData } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

function Services() {

    return (
        <section id="prestations" className="pb-12 p-4 bg-(--block-color)/20 md:px-10 lg:px-20">
      <h2 className="text-(--secondary-color) text-3xl font-bold py-4">Mes prestations</h2>
      
 <div className="flex flex-col gap-8 mt-8 md:grid md:grid-cols-2 xl:grid-cols-4 items-stretch">
        {servicesData.map(service => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      </section>
    )
}

export default Services;