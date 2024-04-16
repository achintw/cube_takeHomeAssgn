import React from 'react'
import { IconType } from 'react-icons'
import { AiFillFileText } from 'react-icons/ai'
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri'
import { Location, Link, useLocation } from 'react-router-dom'

function sidebar() {

const location = useLocation()

  return (
    <aside>
        <h2>Logo.</h2>
        <DivOne location={location}/>
        

    </aside>
  )
}

const DivOne = ({ location }: locationPropType) => {
    const components = [];
  
    // Loop to create 1000 components
    for (let i = 0; i < 1000; i++) {
      // Define the information you want to pass as a query parameter
      const componentInfo = {
        index: i,
        name: `Customer ${i+1}`,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae harum voluptates nisi maxime, quos a aut fuga, voluptas, excepturi voluptatum dolorem adipisci iste omnis! Sit repellat laborum inventore repudiandae."
      };
  
      components.push(
        <div key={i} className='somediv'>
        <Link to={`/admin/assgn?search=${encodeURIComponent(JSON.stringify(componentInfo.index))}`} className='linky' style={
        {  backgroundColor: location.pathname.includes("/admin/assgn") && location.search.includes(`search=${i}`) ? "rgba(0,115,255,0.1)" : "white" }
    }>
          <h5>{componentInfo.name}</h5>
          <p>{componentInfo.description}</p>
          {/* Add your other JSX elements here */}
          </Link>
        </div>
      );
    }
  
    return <>{components}</>;
  };

const DivTwo = ({location}:locationPropType) => (
    <div>
            <h5>Charts</h5>
            <ul>
                <Li 
                    url="/admin/chart/bar" 
                    text="Bar" 
                    Icon={FaChartBar} 
                    location={location}
                />

                <Li 
                    url="/admin/chart/pie" 
                    text="Pie" 
                    Icon={FaChartPie} 
                    location={location}
                />

                <Li 
                    url="/admin/chart/line" 
                    text="Line" 
                    Icon={FaChartLine} 
                    location={location}
                />

            </ul>
        </div>
)

const DivThree = ({location}:locationPropType) => (
    <div>
            <h5>Apps</h5>
            <ul>
                <Li 
                    url="/admin/stopwatch" 
                    text="Stopwatch" 
                    Icon={FaStopwatch} 
                    location={location}
                />

                <Li 
                    url="/admin/coupons" 
                    text="Coupons" 
                    Icon={RiCoupon3Fill} 
                    location={location}
                />

                <Li 
                    url="/admin/toss" 
                    text="Toss" 
                    Icon={FaGamepad} 
                    location={location}
                />
            </ul>
        </div>
)




// Declaring prop types
interface LiPropTypes{
    url: string
    text: string
    location: Location
    Icon: IconType
}

interface locationPropType{
    location: Location
}




// Making component to be reused
const Li = ({url, text, location, Icon}: LiPropTypes) => (
    <li style={
        { backgroundColor: location.pathname.includes(url) ? "rgba(0,115,255,0.1)" : "white" }
    }>
        <Link to={url} style={
            { color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black" }
        }>
            <Icon/>
            {text}
        </Link>
    </li>
)

export default sidebar