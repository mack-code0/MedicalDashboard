import styled from "styled-components"
import AnalyticsCard from "./components/AnalyticsCard"
import { Row } from "antd"
import SpecialPremium from "./components/SpecialPremium"
import TopSection from "./components/TopSection"

export default function Dashboard() {
    return <Styles className="py-5 container-fluid">
        <TopSection />
        <SpecialPremium />
        <Row gutter={{ xl: 100 }}>
            <AnalyticsCard
                amount="1000"
                title="all followers"
                downTrend={true}
                percentage={1.2}
                type="Followers"
            />

            <AnalyticsCard
                amount="125k"
                title="total earning"
                downTrend={false}
                percentage={2.12}
                type="Earnings"
            />

            <AnalyticsCard
                amount="64K"
                title="all users"
                downTrend={false}
                percentage={12.5}
                type="Followers"
            />
        </Row>
    </Styles>
}

const Styles = styled.div`
width: 100%;
`
