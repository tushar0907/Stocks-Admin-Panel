import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import Chart from "../../components/chart/Chart"
import "./home.css"

const Home=() => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart />
        </div>
    )
}

export default Home