import './home.scss'
import LineChartBlock from '../../components/lineChartBlock/LineChartBlock'
import BarChartBlock from '../../components/barChartBlock/BarChartBlock'
import CustomStraightAnglePieChart from '../../components/customStraightAnglePieChart/CustomStraightAnglePieChart'
import PieChartBlock from '../../components/pieChartBlock/PieChartBlock'
import AreaChartBlock from '../../components/areaChartBlock/AreaChartBlock'
import TotalUserBlock from '../../components/totalUserBlock/TotalUserBlock'
import TotalPostsBlock from '../../components/totalPostsBlock/TotalPostsBlock'
import TotalProductsBlock from '../../components/totalProductsBlock/TotalProductsBlock'
import TotalCartsBlock from '../../components/totalCartsBlock/TotalCartsBlock'

const Home = () => {
  return (

    <div className='home'>



      <div className="block block6">
        <TotalUserBlock />
      </div>

      <div className="block block6">
        <TotalPostsBlock />
      </div>

      <div className="block block6">
        <TotalProductsBlock />
      </div>

      <div className="block block6">
        <TotalCartsBlock />
      </div>


      <div className="block block1">
        <LineChartBlock />

      </div>

      <div className="block block2">
      <BarChartBlock />

      </div>

      <div className="block block3">
        <AreaChartBlock />

      </div>

      <div className="block block4">
        <PieChartBlock />

      </div>

      <div className="block block5">
        <CustomStraightAnglePieChart />

      </div>


    </div>
  )
}

export default Home