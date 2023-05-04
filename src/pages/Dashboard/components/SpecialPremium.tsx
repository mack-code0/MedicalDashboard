import { Col, Row } from "antd"
import styled from "styled-components"
import { ReactComponent as Image } from "../images/SpecialPremiumImage.svg"
import { ReactComponent as CartIcon } from "../icons/CartIcon.svg"
import { ReactComponent as FeatureIcon } from "../icons/FeatureIcon.svg"

export default function SpecialPremium() {
    return <Styles className="py-5 px-3 px-sm-4 px-md-5">
        <Row gutter={[20, 20]} className="align-items-center">
            <Col xs={24} md={15}>
                <div className="left">
                    <h5>Special premium account!</h5>
                    <p className="my-4">With a special premium account, you can do very interesting things!
                        By purchasing this account, special features will be activated for you that you will be amazed to see!</p>
                    <div className="d-flex flex-column flex-md-row">
                        <button className="mr-0 mr-md-4 mb-3 mb-md-0">Account purchase <CartIcon className="ml-3" /></button>
                        <button>View features <FeatureIcon className="ml-3" /></button>
                    </div>
                </div>
            </Col>
            <Col className="text-center" xs={24} md={9}>
                <Image className="img-fluid" />
            </Col>
        </Row>
    </Styles>
}

const Styles = styled.div`
    background: rgba(46, 50, 60, 0.6);
    border-radius: 29.1349px;
    margin-bottom: 80px;

    .left{
        h5{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 32.0484px;
            line-height: 38px;
            color: #fff;
        }
        p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16.5098px;
        line-height: 29px;     
        color: #FFFFFF 
      }
      button{
        all: unset;
        cursor: pointer;
        padding: 19.4233px 17.4809px;
        background: linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%);
        box-shadow: inset 8.74047px 9.71163px 18.4521px rgba(61, 73, 100, 0.3);
        border-radius: 13.5963px;
        color: #fff;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14.5386px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
`