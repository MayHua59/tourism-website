import CityDetailPage from "@/pages/CityDetail/CityDetailPage"

const Page =  ({ params }) => {
  const {cityId} =  params;
  return (
    <CityDetailPage cityId={cityId}/>
  )
}

export default Page