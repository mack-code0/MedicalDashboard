import styled from "styled-components"
import SIZES from "../../assets/SIZES"
import { ReactComponent as Logo } from "./images/Logo.svg"
import { ReactComponent as DashboardIcon } from "./icons/DashboardIcon.svg"
import { ReactComponent as CampaignsIcon } from "./icons/CampaignsIcon.svg"
import { ReactComponent as ReportsIcon } from "./icons/ReportsIcon.svg"
import { ReactComponent as AnalyticsIcon } from "./icons/AnalyticsIcon.svg"
import { ReactComponent as InboxIcon } from "./icons/InboxIcon.svg"
import { ReactComponent as SettingIcon } from "./icons/SettingIcon.svg"
import { ReactComponent as AvatarArrowDownIcon } from "./icons/AvatarArrowDown.svg"
import { useState } from "react"
import { Avatar } from "antd"
import bodyBg from "../../assets/images/bodyBg.png"
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons"


export default function SideBar() {
    const [activeTab, setActiveTab] = useState("Dashboard")
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const tabHandler = (tab: string) => {
        setActiveTab(tab)
    }

    return <Styles className={`${!sidebarOpen && "close-sidebar"} pt-5 px-3`}>
        <div className="top-section">
            <div className="d-flex align-items-start">
                <div className="logo-box">
                    <Logo className="logo mt-n3" />
                </div>
                <div className="logo-text-box ml-2">
                    <h6 className="mb-0">PAM</h6>
                    <small>( Purchase account management )</small>
                </div>
            </div>

            <div className="links-section py-5">
                <button onClick={() => tabHandler("Dashboard")} className={`${activeTab === "Dashboard" && "active"} link-btn`}>
                    <DashboardIcon className="icon" />Dashboard
                </button>
                <button onClick={() => tabHandler("Campaigns")} className={`${activeTab === "Campaigns" && "active"} link-btn`}>
                    <CampaignsIcon className="icon stroked" />Campaigns
                </button>
                <button onClick={() => tabHandler("Reports")} className={`${activeTab === "Reports" && "active"} link-btn`}>
                    <ReportsIcon className="icon stroked" />Reports
                </button>
                <button onClick={() => tabHandler("Analytics")} className={`${activeTab === "Analytics" && "active"} link-btn`}>
                    <AnalyticsIcon className="icon stroked" />Analytics
                </button>
                <button onClick={() => tabHandler("Inbox")} className={`${activeTab === "Inbox" && "active"} link-btn`}>
                    <InboxIcon className="icon stroked" />Inbox
                </button>
                <button onClick={() => tabHandler("Setting")} className={`${activeTab === "Setting" && "active"} link-btn`}>
                    <SettingIcon className="icon stroked" />Setting
                </button>
            </div>
        </div>

        <div className="bottom-section d-flex align-items-center">
            <div className="profile-card d-flex align-items-center">
                <div>
                    <Avatar size={40} src="https://xsgames.co/randomusers/avatar.php?g=male" />
                </div>
                <p className="name mx-auto">Erfan Rezaii</p>
                <AvatarArrowDownIcon />
            </div>
        </div>
        <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="control">
            {sidebarOpen
                ? <DoubleLeftOutlined />
                : <DoubleRightOutlined />}
        </button>
    </Styles>
}

const Styles = styled.div`
    width: ${SIZES.sidebarWidth}px;
    height: 100vh;
    position: fixed;
    background: url(${bodyBg});
    z-index: 1;
    transition: all 0.2s;
    box-shadow: none;
    margin-left: 0;

    .control{
        all: unset;
        cursor: pointer;
        padding: 17.4233px 17.4809px;
        background: linear-gradient(93.58deg, #363E52 -2%, #2B3242 117.56%);
        box-shadow: inset 8.74047px 9.71163px 18.4521px rgba(61, 73, 100, 0.3);
        border-top-right-radius: 13.5963px;
        border-bottom-right-radius: 13.5963px;
        color: #fff;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14.5386px;
        display: none;
        margin-left: ${SIZES.sidebarWidth}px;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.2s;
    }

    @media only screen and (max-width: 992px) {
        box-shadow: 42px -84px 83px 20px rgba(0, 0, 0, 0.48);
        .control{
            display: flex;
            align-items: center;
        }
        &.close-sidebar{
            box-shadow: none;
            margin-left: -${SIZES.sidebarWidth}px;
            width: 0;
        }
    }

    .top-section{
        height: 80%;
        overflow-y: scroll;
        ::-webkit-scrollbar{
            display: none;
        }

        .logo-box{
        width: 50px;

        .logo{
            width: 100%;
        }
        }

        .logo-text-box{
            h6{
                font-style: normal;
                font-weight: 700;
                font-size: 24.9674px;
                color: #FFFFFF;
            }
            small{
                font-style: normal;
                font-weight: 400;
                font-size: 12.4837px;
                color: #fff;
            }
        }

        .links-section{
            .link-btn{
                all: unset;
                cursor: pointer;
                color: #fff;
                display: flex;
                align-items: center;
                padding: 25px 10px;
                margin-top: 10px;
                border-radius: 16.3366px;
                font-family: 'Rubik';
                font-style: normal;
                font-weight: 400;
                font-size: 15.3366px;
                color: #8B8C91;
                transition: all 0.2s;
                width: 200px;

                &.active,
                :hover{
                    color: #fff;
                    background: linear-gradient(269.74deg, rgba(255, 255, 255, 0.21) -254.09%, rgba(255, 255, 255, 0) 99.84%);
                    
                    .icon{
                        fill: #fff;

                        &.stroked{
                            fill: none;
                            stroke: #fff;
                        }
                    }
                }

                .icon{
                    margin-right: 20px;
                    fill: #8B8C91;

                    &.stroked{
                        fill: none;
                        stroke: #8B8C91;
                    }
                }
            }
        }
    }
    
    .bottom-section{
        height: 20%;
        width: 100%;
        
        .profile-card{
            width: 100%;
            background: linear-gradient(95.71deg, #394359 -14.7%, #232731 123.09%);
            box-shadow: 5px 9px 54px rgba(17, 188, 169, 0.06);
            border-radius: 12px;
            padding: 15px;

            .name{
                margin-bottom: 0;
                color: #fff;
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
            }
        }
    }
`