import styled from "styled-components"
import { Col } from "antd"
import { ReactComponent as FollowersIcon } from "../icons/FollowersIcon.svg"
import { ReactComponent as EarningsIcon } from "../icons/EarningsIcon.svg"
import { ReactComponent as DownTrendIcon } from "../icons/DownTrendIcon.svg"
import { ReactComponent as UpTrendIcon } from "../icons/UpTrendIcon.svg"

interface Props {
    type: "Earnings" | "Followers"
    amount: string
    downTrend: boolean
    percentage: number
    title: string
}
export default function AnalyticsCard({
    amount,
    title,
    downTrend,
    percentage,
    type
}: Props) {
    return <Col className="mb-4" xs={24} lg={12} xl={8}>
        <Styles className="py-3 px-4">
            <div className="d-flex justify-content-between">
                <div>
                    {type === "Followers" ? <FollowersIcon /> : <EarningsIcon />}
                    <p className="body-txt mt-3">{title}</p>
                    <h6 className="bigger">{amount}</h6>
                </div>
                <div className="d-flex flex-column justify-content-end">
                    <div className="d-flex">
                        {downTrend ? <DownTrendIcon className="mr-3" /> : <UpTrendIcon className="mr-3" />}
                        <h6>{percentage} %</h6>
                    </div>
                    <p className="body-txt text-right">this month</p>
                    <button className="see-info px-2 py-2 ml-auto">see info</button>
                </div>
            </div>
        </Styles>
    </Col>
}

const Styles = styled.div`
    width: 100%;
    background: linear-gradient(119.15deg, #2E374B -13.54%, #292F3C 118.09%);
    box-shadow: 9.71163px 11.654px 77.693px rgba(84, 135, 183, 0.08);
    border-radius: 24.7205px;

    h6{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-size: 19.7764px;
        color: #FFFFFF;

        &.bigger{
            font-size: 32px;
            margin-bottom: 0;
        }
    }
    p.body-txt{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 12.3603px;
        color: #B6B7BC;
    }

    .see-info{
        all: unset;
        cursor: pointer;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 17.7764px;
        color: #FFFFFF;
        background: #077E71;
        border-radius: 19.7764px;
    }
`