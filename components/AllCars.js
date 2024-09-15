import CarCard from "./CarCard";

export default function AllCars({ cars }) {
  return (
    <section className="" id="AllCar">
      <div className="container pt-12 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cars?.map((el, i) => (
          <CarCard key={i} car={el} />
        ))}
      </div>
    </section>
  );
}
