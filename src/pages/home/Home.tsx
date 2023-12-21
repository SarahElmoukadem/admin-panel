import './home.scss'
import LineChartBlock from '../../components/chartsComponents/lineChartBlock/LineChartBlock'
import BarChartBlock from '../../components/chartsComponents/barChartBlock/BarChartBlock'
import CustomStraightAnglePieChart from '../../components/chartsComponents/customStraightAnglePieChart/CustomStraightAnglePieChart'
import PieChartBlock from '../../components/chartsComponents/pieChartBlock/PieChartBlock'
import AreaChartBlock from '../../components/chartsComponents/areaChartBlock/AreaChartBlock'
import TotalUserBlock from '../../components/totalBlocks/totalUserBlock/TotalUserBlock'
import TotalPostsBlock from '../../components/totalBlocks/totalPostsBlock/TotalPostsBlock'
import TotalProductsBlock from '../../components/totalBlocks/totalProductsBlock/TotalProductsBlock'
import TotalCartsBlock from '../../components/totalBlocks/totalCartsBlock/TotalCartsBlock'

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