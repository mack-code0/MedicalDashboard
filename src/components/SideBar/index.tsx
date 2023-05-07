import styled from "styled-components"
import SIZES from "../../assets/SIZES"
import { ReactComponent as Logo } from "./images/Logo.svg"
import { useState } from "react"
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons"
import { ReactComponent as HomeIcon } from "./icons/Home.svg"
import { ReactComponent as ReportsIcon } from "./icons/Reports.svg"
import { ReactComponent as GoalsIcon } from "./icons/Goals.svg"
import { ReactComponent as LogoutIcon } from "./icons/Logout.svg"
import { ReactComponent as RemindersIcon } from "./icons/Reminders.svg"
import { ReactComponent as SettingsIcon } from "./icons/Settings.svg"

export default function SideBar() {
    const [activeTab, setActiveTab] = useState("Dashboard")
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const tabHandler = (tab: string) => {
        setActiveTab(tab)
    }

    return <Styles className={`${!sidebarOpen && "close-sidebar"} px-3`}>
        <div className="top-section pt-5 w-100">
            <div className="logo-box">
                <Logo className="logo mt-n3" />
            </div>

            <div className="py-5 w-100">
                <button onClick={() => tabHandler("Dashboard")} className={`${activeTab === "Dashboard" && "active"} link-btn`}>
                    <HomeIcon className="icon" /> Dashboard
                </button>
                <button onClick={() => tabHandler("Campaigns")} className={`${activeTab === "Campaigns" && "active"} link-btn`}>
                    <ReportsIcon className="icon" /> Reports
                </button>
                <button onClick={() => tabHandler("Reports")} className={`${activeTab === "Reports" && "active"} link-btn`}>
                    <GoalsIcon className="icon" /> Goals
                </button>
                <button onClick={() => tabHandler("Analytics")} className={`${activeTab === "Analytics" && "active"} link-btn`}>
                    <RemindersIcon className="icon" /> Reminders
                </button>
                <button onClick={() => tabHandler("Inbox")} className={`${activeTab === "Inbox" && "active"} link-btn`}>
                    <SettingsIcon className="icon" /> Settings
                </button>
            </div>
        </div>

        <div className="bottom-section d-flex align-items-center">
            <button onClick={() => { }} className={`link-btn`}>
                <LogoutIcon className="icon" /> Logout
            </button>
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
    background: ${props => props.theme.colors.cardBg};
    z-index: 1;
    transition: all 0.2s;
    box-shadow: none;
    margin-left: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

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
        height: 85%;
        overflow-y: scroll;
        ::-webkit-scrollbar{
            display: none;
        }

        .logo-box{
        width: 100%;

            .logo{
                width: 100%;
            }
        }
    }

    .link-btn{
        all: unset;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 16px 15px;
        margin-top: 17px;
        color: ${props => props.theme.colors.textGrey};
        transition: all 0.2s;
        width: 170px;
        border-radius: 12px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;

        &.active,
        :hover{
            background: ${props => props.theme.colors.activeSidebarBg};
            color: ${props => props.theme.colors.activeSidebarText};
            
            .icon{
                fill: ${props => props.theme.colors.activeSidebarText};
            }
        }

        .icon{
            margin-right: 20px;
            fill: ${props => props.theme.colors.textGrey};
        }
    }
    
    .bottom-section{
        height: 15%;
        width: 100%;
    }
`