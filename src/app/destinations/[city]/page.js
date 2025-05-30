import CityDetailPage from "@/pages/CityDetail/CityDetailPage"

const Page =  ({ params }) => {
  const {city} =  params;
  return (
    <CityDetailPage cityId={city}/>
  )
}

export default Page