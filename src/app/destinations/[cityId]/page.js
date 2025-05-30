// import CityDetailPage from "@/main-components/CityDetail/CityDetailPage"
import CityDetailPage from "../../../main-components/CityDetail/CityDetailPage";

const Page =  ({ params }) => {
  const {cityId} =  params;
  return (
    <CityDetailPage cityId={cityId}/>
  )
}

export default Page