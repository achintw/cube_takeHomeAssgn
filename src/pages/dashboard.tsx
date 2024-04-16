import React from 'react'
import Sidebar from '../components/sidebar'
import { BsSearch } from 'react-icons/bs'
import { FaRegBell } from 'react-icons/fa'
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi'


const userImg = "https://i.pinimg.com/originals/b2/ea/a0/b2eaa0d4918d54021f9c7aa3fc3d3cf3.jpg"

function dashboard() {
  return (
    <div className='adminContainer'>
      <Sidebar/>
      <main className='dashboard'>
        <div className="bar">
          <BsSearch/>
          <input type="text" placeholder='Search for data, users, docs' />
          <FaRegBell/>
          <img src={userImg} alt="" />
        </div>

        <section className="widgetContainer">
          <WidgetItem/>
        </section>
      </main>
    </div>
  )
}


interface widgetItemPropTypes{
  heading: string
  value: number
  percent: number
  color: string
  isAmount?: boolean
}

const WidgetItem = ({heading, value, percent, color, isAmount}: widgetItemPropTypes) => {
  <article className='widget'>
    <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{isAmount ? `$${value}` : value}</h4>
        { percent>0 ? 
          <span className='green'><HiTrendingUp/>+{percent}%{" "}</span> : 
          <span className='red'><HiTrendingDown/>+{percent}%{" "}</span>
        }
    </div>
  </article>
}

export default dashboard