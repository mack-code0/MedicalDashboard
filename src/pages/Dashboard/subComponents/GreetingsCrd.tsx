import { Col, Row } from "antd"
import styled from "styled-components"
import { RightOutlined } from "@ant-design/icons"
import { ReactComponent as HeroImage } from "../images/GreetingsCardImage.svg"

export default function GreetingsCard() {
    return <Col span={24}>
        <Styles className="align-items-center">
            <Col xs={24} md={17}>
                <div className="left-section">
                    <h4><span>Hello</span> Tassy Omah,</h4>
                    <p className="col-12 col-md-8 p-0">Have a nice day and don’t forget to take care of your health!</p>
                    <a href="">Learn More <RightOutlined className="ml-2" /></a>
                </div>
            </Col>
            <Col xs={24} md={7}>
                <div className="right-section">
                    <HeroImage />
                </div>
            </Col>
        </Styles>
    </Col>
}

const Styles = styled(Row)`
    background: ${props => props.theme.colors.dashboard.greetingCard.bg};
    border-radius: 10px;
    position: relative;
    padding: 20px 30px;

    h3{}

    .left-section{
        h4{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 700;
            color: ${props => props.theme.colors.dashboard.greetingCard.h4};
            span{
                font-weight: 400;
                color: ${props => props.theme.colors.dashboard.greetingCard.h4Span}
            }
        }
        p{
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
            color: ${props => props.theme.colors.dashboard.greetingCard.p};
        }
        a{
            display: flex;
            align-items: center;
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            color: ${props => props.theme.colors.dashboard.greetingCard.a};
        }
    }
`