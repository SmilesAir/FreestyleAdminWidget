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
                            Export and Download All Data
                        </h1>
                        <div>
                            <button onClick={() => this.exportAndDownloadAllData(false)}>Development</button>
                            <button onClick={() => this.exportAndDownloadAllData(true)}>Production</button>
                        </div>
                    </div>
                    <div className="section">
                        <h1>
                            Player Name Tools
                        </h1>
                        <iframe src="d2mkj2exs79ufw.cloudfront.net" style={{ height: "68em", border: "0" }} allow="clipboard-write"/>
                    </div>
                    <div className="section">
                        <h1>
                            Event Summary Tools
                        </h1>
                        <iframe src="d1o7r89dcix5uk.cloudfront.net" allow="clipboard-write"/>
                    </div>
                    <div className="section">
                        <h1>
                            Event Results Tools
                        </h1>
                        <iframe src="d508y3x9kgnlw.cloudfront.net" style={{ height: "45em", border: "0" }} allow="clipboard-write"/>
                    </div>
                    <div className="section">
                        <h1>
                            Points Tools
                        </h1>
                        <iframe src="dodpx3saezigi.cloudfront.net" style={{ height: "57em", border: "0" }} allow="clipboard-write"/>
                    </div>
                    <div className="section">
                        <h1>
                            Export All Data to JSON
                        </h1>
                        <iframe src="demey0las2y6z.cloudfront.net" style={{ height: "57em", border: "0" }} allow="clipboard-write"/>
                    </div>
                </div>
            </div>
        )
    }
}
