import "./widgetSm.css";
import {Visibility} from "@material-ui/icons"

const WidgetSm=() => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                New Join Members
                <ul className="widgetSmList">
                    <li className="widgetSmListItem">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.737xw:0.493xh;0.263xw,0.0276xh&resize=480:*" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Tushar Kumar</span>
                            <span className="widgetSmUserTitle">FullStack Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.737xw:0.493xh;0.263xw,0.0276xh&resize=480:*" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Tushar Kumar</span>
                            <span className="widgetSmUserTitle">FullStack Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.737xw:0.493xh;0.263xw,0.0276xh&resize=480:*" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Tushar Kumar</span>
                            <span className="widgetSmUserTitle">FullStack Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.737xw:0.493xh;0.263xw,0.0276xh&resize=480:*" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Tushar Kumar</span>
                            <span className="widgetSmUserTitle">FullStack Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                </ul>
            </span>
        </div>
    )
}

export default WidgetSm