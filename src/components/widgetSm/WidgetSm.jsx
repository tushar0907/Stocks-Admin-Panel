import "./widgetSm.css";
import {Visibility} from "@material-ui/icons"

const WidgetSm=() => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">
                New Joined Members
                <ul className="widgetSmList">
                    <li className="widgetSmListItem">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=0.737xw:0.493xh;0.263xw,0.0276xh&resize=480:*" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Tusshar Kumar</span>
                            <span className="widgetSmUserTitle">S.Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://theubj.com/wp-content/uploads/2022/04/p09t1hg0.jpg" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Praveen Qumar</span>
                            <span className="widgetSmUserTitle">Engineer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://img.mensxp.com/media/content/2021/Dec/Header-MH_61ab403ec7b48.jpeg" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Prabhat Ranjan</span>
                            <span className="widgetSmUserTitle">Developer</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon" />
                            Display
                        </button>
                    </li>
                    <li className="widgetSmListItem">
                        <img src="https://tv-fanatic-res.cloudinary.com/iu/s--Pjr_a5A3--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1483226357/poor-amenadiel-lucifer-season-2-episode-11.jpg" alt="" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Akash Kumar</span>
                            <span className="widgetSmUserTitle">Content Writer</span>
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