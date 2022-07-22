import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons";

const FeaturedInfo=() => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,300</span>
                    <span className="featuredMoneyRate">-8
                        <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared To last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,300</span>
                    <span className="featuredMoneyRate">-11
                        <ArrowUpward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared To last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,300</span>
                    <span className="featuredMoneyRate">+8.6
                        <ArrowDownward className="featuredIcon positive" /></span>
                </div>
                <span className="featuredSub">Compared To last Month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo