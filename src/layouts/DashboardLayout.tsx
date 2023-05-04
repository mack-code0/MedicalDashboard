import Dashboard from "../pages/Dashboard"
import styled from "styled-components"
import SideBar from "../components/SideBar/index"
import SIZES from "../assets/SIZES"

export default function DashboardLayout() {
    return <Styles className="d-flex">
        <SideBar />
        <div className="main">
            <Dashboard />
        </div>
    </Styles>
}

const Styles = styled.div`
    overflow-x: hidden;
    .main{
        width: 100vw;
        margin-left: ${SIZES.sidebarWidth}px;
        @media only screen and (max-width: 992px) {
            margin-left: 0 !important;
        }
    }
`