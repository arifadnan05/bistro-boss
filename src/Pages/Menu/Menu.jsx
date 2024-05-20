import { Helmet } from "react-helmet-async"
import Cover from "../Shared/Cover"
import menuBanner from '../../assets/menu/banner3.jpg'
import menuDessert from '../../assets/menu/dessert-bg.jpeg'
import menuPizza from '../../assets/menu/pizza-bg.jpg'
import menuSalad from '../../assets/menu/salad-bg.jpg'
import menuSoup from '../../assets/menu/soup-bg.jpg'
import useMenu from "../../hooks/useMenu"
import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import MenuCategory from "./MenuCategory"

const Menu = () => {
  const [menu] = useMenu()
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');
  const pizza = menu.filter(item => item.category === 'pizza');
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover
        img={menuBanner}
        title={'our menu'}
        description={'Would you like to try a dish?'}
      ></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* Offer category */}
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert category */}
      
      <MenuCategory title={'dessert'} img={menuDessert} items={dessert}></MenuCategory>
      {/* pizza Category */}
      
      <MenuCategory title={'pizza'} img={menuPizza} items={pizza}></MenuCategory>
      {/* salad category */}

      <MenuCategory title={'salad'} img={menuSalad} items={salad}></MenuCategory>
      {/* soup category */}

      <MenuCategory title={'soup'} img={menuSoup} items={soup}></MenuCategory>
    </div>
  )
}

export default Menu
