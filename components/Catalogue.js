import { fuels, yearsOfProduction } from "@/constants/constants";
import CustomFilter from "./CustomFilter";
import SearchBar from "./SearchBar";

export default function Catalogue() {
  
  return (
    <section className="mt-9">
      <div className="container ">
        <div>
          <h2 className="text-3xl mb-2 font-bold">Car Catalogue</h2>
          <p className="text-gray-600">Explore out cars you might like</p>
        </div>
        <div className="flex items-center justify-between my-7 md:flex-row flex-col gap-3">
          <SearchBar />
          <div className="grid grid-cols-2 gap-3">
            <CustomFilter type="fuel" options={fuels} />
            <CustomFilter type="year" options={yearsOfProduction} />
          </div>
        </div>
      </div>
    </section>
  );
}
