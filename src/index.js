import React, { Component } from "react"

export class FreestyleAdminWidget extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="adminContainer">
                <h1>
                    Admin Panel
                </h1>
                <div>
                    <div className="section">
                        <h1>
                            Player Name Tools
                        </h1>
                        <iframe src="https://d2mkj2exs79ufw.cloudfront.net" style={{ height: "90em", border: "0" }} allow="clipboard-write"/>
                    </div>
                    <div className="section">
                        <h1>
                            Event Summary Tools
                        </h1>
                        <iframe src="https://d1o7r89dcix5uk.cloudfront.net" style={{ height: "8em", border: "0" }} allow="clipboard-write"/>
                    </div>
                    <div className="section">
                        <h1>
                            Event Results Tools
                        </h1>
                        <iframe src="https://d508y3x9kgnlw.cloudfront.net" style={{ height: "55em", border: "0" }} allow="clipboard-write"/>
                    </div>
                    <div className="section">
                        <h1>
                            Points Tools
                        </h1>
                        <iframe src="https://dodpx3saezigi.cloudfront.net" style={{ height: "60em", border: "0" }} allow="clipboard-write"/>
                    </div>
                    <div className="section">
                        <h1>
                            Export All Data to JSON
                        </h1>
                        <iframe src="https://demey0las2y6z.cloudfront.net" style={{ height: "5em", border: "0" }} allow="clipboard-write"/>
                    </div>
                </div>
            </div>
        )
    }
}
