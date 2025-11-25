import Slider from "react-slick";

type ServiceDetails = {
    citation?: string;
    fullDescription: string;
    photos?: string[];
};

type ModalDetailsProps = {
    details: ServiceDetails;
};

function ModalDetails({ details }: ModalDetailsProps) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
  };

   return (
    <section className="space-y-4 overflow-y-auto max-h-[70vh] pr-2">
      {details?.citation && (
        <p className="italic text-(--secondary-color) text-xs text-center whitespace-pre-line">
          {details.citation}
        </p>
      )}

      <p className="whitespace-pre-line leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: details.fullDescription }}>
      </p>

{/* SLIDER */}
      {details?.photos && details.photos.length > 0 && (
        <div className="mt-4">
          <Slider {...sliderSettings}>
            {details.photos.map((src, idx) => (
              <div key={idx} className="px-2">
                <img
                  src={src}
                  alt="photo soin"
                  className="rounded-lg w-full max-h-60 md:max-h-80 lg:max-h-90 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
}

export default ModalDetails;