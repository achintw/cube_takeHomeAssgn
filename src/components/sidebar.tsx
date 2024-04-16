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
        <DivTwo location={location}/>
        <DivThree location={location}/>

    </aside>
  )
}

const DivOne = ({location}:locationPropType) => (
    <div>
    <h5>Dashboard</h5>
    <ul>
        <Li 
            url="/admin/dashboard" 
            text="Dashboard" 
            Icon={RiDashboardFill} 
            location={location}
        />

        <Li 
            url="/admin/products" 
            text="Products" 
            Icon={RiShoppingBag3Fill} 
            location={location}
        />

        <Li 
            url="/admin/customers" 
            text="Customers" 
            Icon={IoIosPeople} 
            location={location}
        />

        <Li 
            url="/admin/transactions" 
            text="Transactions" 
            Icon={AiFillFileText} 
            location={location}
        />
    </ul>
</div>
)

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