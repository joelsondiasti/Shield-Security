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
        
        border-radius: 0rem 1rem 1rem 0rem;

        .Tabs{
            display: flex;
            flex-direction: column;
            
            .infoTabs{
                background-color:  #141419;
                padding: 1rem;
                border-right: 3px solid;
                width: 10rem;
                height: 5rem;
                cursor: pointer;
            }
        }

        article{
            background-color: #fff;
            color: #000;

            .ContentTabsInfo{
                display: flex;
                color: #000;
                background-color: #fff;
                margin: 0 auto;
                
                
                article h1,section h1, aside h1{
                    background-color: #fff;
                    color: #000;
                    font-weight: 600;

                }
                
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
