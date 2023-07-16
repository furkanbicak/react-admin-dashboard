import { ChartBox } from '../../components/chartBox/ChartBox';
import { TopBox } from '../../components/topBox/TopBox';
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';
import './home.scss';
export const Home = () => {
  return (
    <div className="home">
      <div className='box box1'>
        <TopBox />
      </div>
      <div className='box box2'><ChartBox {...chartBoxUser} /></div>
      <div className='box box3'><ChartBox {...chartBoxProduct}/></div>
      <div className='box box4'>Box 3</div>
      <div className='box box5'><ChartBox {...chartBoxConversion}/></div>
      <div className='box box6'><ChartBox {...chartBoxRevenue}/></div>
      <div className='box box7'>Box 7</div>
      <div className='box box8'>Box 8</div>
      <div className='box box8'>Box 9</div>
    </div>
  )
}
