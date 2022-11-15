import styled from "styled-components";

const NavsBar = styled.div`
    display: flex;
   flex-direction: column;
    width: 100%;

   .Content{
        display: flex;
        gap: 2rem;
        width: 100%;
        background-color: #fff;
        border: 3px solid #05f140ff;
        border-radius: 0rem 1rem 1rem 0rem;

        .Tabs{
            display: flex;
            flex-direction: column;
            .infoTabs{
                background-color:  #141419;
                padding: 1rem;
                border-right: 3px solid #05f140ff;
                
            }
        }

        article{
            background-color: #fff;
            color: #000;

            .ContentTabsInfo{
                color: #000;
                background-color: #fff;
            }
        }

        .Tabs, .infoTabs, .ContentTabs,
         .ContentTabsInfo {
            
            color: #fff;
            font-size: 1.5rem;
            font-weight: 400;

        }

   }
`

export default NavsBar
