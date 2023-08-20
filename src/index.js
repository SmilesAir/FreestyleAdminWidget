import React, { Component } from "react"
const { Tab, Tabs, TabList, TabPanel } = require("react-tabs")

export class FreestyleAdminWidget extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabIndex: 0
        }
    }

    onTabsSelectedIndexChanged(index) {
        this.state.tabIndex = index
        this.setState(this.state)
    }

    render() {
        return (
            <div className="adminContainer">
                <h1>
                    Admin Panel
                </h1>
                <Tabs selectedIndex={this.state.tabIndex} onSelect={(index) => this.onTabsSelectedIndexChanged(index)}>
                    <TabList>
                        <Tab>Names</Tab>
                        <Tab>Events</Tab>
                        <Tab>Results</Tab>
                        <Tab>Points</Tab>
                        <Tab>Export</Tab>
                    </TabList>
                    <TabPanel>
                        <iframe src="https://d2mkj2exs79ufw.cloudfront.net" style={{ border: "0" }} allow="clipboard-write"/>
                    </TabPanel>
                    <TabPanel>
                        <iframe src="https://d1o7r89dcix5uk.cloudfront.net" style={{ border: "0" }} allow="clipboard-write"/>
                    </TabPanel>
                    <TabPanel>
                        <iframe src="https://d508y3x9kgnlw.cloudfront.net" style={{ border: "0" }} allow="clipboard-write"/>
                    </TabPanel>
                    <TabPanel>
                        <iframe src="https://dodpx3saezigi.cloudfront.net" style={{ border: "0" }} allow="clipboard-write"/>
                    </TabPanel>
                    <TabPanel>
                        <iframe src="https://demey0las2y6z.cloudfront.net" style={{ border: "0" }} allow="clipboard-write"/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
