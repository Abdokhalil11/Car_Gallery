import Landing from "@/components/Landing";
import Catalogue from "@/components/Catalogue";
import { getCars } from "@/utils";
import AllCars from "@/components/AllCars";
import ShowMore from "@/components/ShowMore";
export default async function Home({ searchParams }) {
  //{ model: 'corolla', manufacture: 'Toyota' }
  const data = await getCars({ ...searchParams });
  const isEmpty = !Array.isArray(data) || data.length < 1;

  return (
    <>
      <Landing />
      <Catalogue />
      {!isEmpty ? (
        <AllCars cars={data} />
      ) : (
        <div>
          <h2 className="text-center font-bold text-gray-600">Oops, No result</h2>
          <p>{data?.message}</p>
        </div>
      )}
      <ShowMore
        pageNumber={searchParams.limit || 10}
        isNext={(searchParams.limit || 10) > data.length}
      />
    </>
  );
}
