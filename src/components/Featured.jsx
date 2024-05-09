import { featureData } from "../data";
import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <div className="py-10 align-element">
      <SectionTitle text="Featured Services" />
      <div className="py-16 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureData.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-xl bg-gray-50"
          >
            <img
              src={item.imageUrl}
              alt={item.description}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-md text-sky-600 mb-2">{item.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
