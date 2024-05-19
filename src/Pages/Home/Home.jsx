import Banner from "./Banner"
import Category from "./Category"
import PopularManu from '../../Components/PopularManu/PopularManu'
import ChefRecommends from "./ChefRecommends"
import Featured from "./Featured"
import Review from "./Review"
import { Helmet } from "react-helmet-async"

const Home = () => {
  return (
    <div>
       <Helmet>
            <title>Bistro | Home</title>
        </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularManu></PopularManu>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Review></Review>
    </div>
  )
}

export default Home
