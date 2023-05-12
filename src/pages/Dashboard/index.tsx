import { Row, Col } from "antd"
import styled from "styled-components"
import GreetingsCard from "./subComponents/GreetingsCrd"

export default function Dashboard() {
    return <Styles className="py-5 container-fluid">
        <Row>
            <Col xs={24} md={17}>
                <Row gutter={[30, 30]}>
                    <GreetingsCard />
                </Row>
            </Col>
            <Col xs={0} md={7}>
            </Col>
        </Row>
    </Styles>
}

const Styles = styled.div`
width: 100%;
`
