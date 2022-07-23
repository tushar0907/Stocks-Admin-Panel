import "./widgetLg.css";

export default function WidgetLg() {
    const Button=({type}) => {
        return <button className={"widgetLgButton "+type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Arora</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://pyxis.nymag.com/v1/imgs/0a8/5d1/3139b0b2fc427ff34fe5394bd1625d8527-2019-critics-joker.rsquare.w700.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Prabhat R</span>
                    </td>
                    <td className="widgetLgDate">27 Jul 2022</td>
                    <td className="widgetLgAmount">$222.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://i0.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2019/05/Lucifer-Recap-Amenadiel-Main.jpg?ssl=1"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Akash Kumar</span>
                    </td>
                    <td className="widgetLgDate">4 Aug 2022</td>
                    <td className="widgetLgAmount">$402.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://cdn.mos.cms.futurecdn.net/PabJFgLVqABki76HHvPY7P.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Praveen Qumar</span>
                    </td>
                    <td className="widgetLgDate">15 August 2022</td>
                    <td className="widgetLgAmount">$10.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}