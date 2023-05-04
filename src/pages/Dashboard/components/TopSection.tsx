import { Col, Input, Row } from "antd"
import styled from "styled-components"
import { ReactComponent as SearchIcon } from "../icons/SearchIcon.svg"
import { ReactComponent as PlusIcon } from "../icons/PlusIcon.svg"

export default function TopSection() {
    return <Styles className="mb-5">
        <Row gutter={[13, 13]} className="align-items-center">
            <Col xs={24} md={10}>
                <h4>Dasboard</h4>
                <p>see your account information in here!</p>
            </Col>
            <Col className="d-flex align-items-center" xs={24} md={7}>
                <Input placeholder="can’t find something? search it here!" className="w-100" suffix={<SearchIcon />} />
            </Col>
            <Col className="d-flex align-items-center" xs={24} md={7}>
                <button className="ml-md-auto"><span className="d-none d-md-block mr-2">Make a new product</span> <PlusIcon /></button>
            </Col>
        </Row>
    </Styles>
}

const Styles = styled.div`
    h4{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 29.1349px;
        color: #FFFFFF;   
    }
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 300;
        font-size: 17.4809px;
        color: #fff;
    }
    .ant-input-affix-wrapper{
        background: #2E323C;
        border-radius: 11.654px;
        border: none;
        padding-right: 15px !important;
        box-shadow: none;
        outline: none;
        input{
            background: none;
            padding: 10px 8px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 300;
            font-size: 13.5674px;
            color: #FFFFFF;
            ::placeholder{
                font-family: 'Inter';
                font-style: normal;
                font-weight: 300;
                font-size: 13.5674px;
                color: #FFFFFF;
            }
        }
    }
    button{
        all: unset;
        cursor: pointer;
        padding: 17.4233px 17.4809px;
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
      }
`