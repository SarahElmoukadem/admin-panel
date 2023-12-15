import './home.scss'
import LineChartBlock from '../../components/lineChartBlock/LineChartBlock'
import BarChartBlock from '../../components/barChartBlock/BarChartBlock'
import CustomStraightAnglePieChart from '../../components/customStraightAnglePieChart/CustomStraightAnglePieChart'
import PieChartBlock from '../../components/pieChartBlock/PieChartBlock'
import AreaChartBlock from '../../components/areaChartBlock/AreaChartBlock'

const Home = () => {
  return (

    <div className='home'>

      <div className="block block1">
      <BarChartBlock />

      </div>

      <div className="block block2">
        <LineChartBlock />

      </div>

      <div className="block block3">
        <PieChartBlock />
      </div>

      <div className="block block4">
        <CustomStraightAnglePieChart />
      </div>

      <div className="block block5">
        <AreaChartBlock />
      </div>

      <div className="block block6">
        {/* <CustomStraightAnglePieChart /> */}
      </div>

      <div className="block block6">
        {/* <CustomStraightAnglePieChart /> */}
      </div>

      <div className="block block2">
        {/* <CustomStraightAnglePieChart /> */}
      </div>

    </div>
  )
}

export default Home