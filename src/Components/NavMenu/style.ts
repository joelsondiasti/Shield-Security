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
            }
        }

        article{
            background-color: #fff;
            color: #000;

            .ContentTabsInfo{
                display: flex;
                color: #000;
                background-color: #fff;



                article{
                    display: flex;
                    flex-direction: column;
                    margin: 0 auto;

                    justify-content: center;
                    margin-left: 2.5rem;
                    margin-top: 2rem;
                    cursor: pointer;

                    div{
                        background-color: #05f140ff; 
                        text-align: center;
                        align-items: center;
                        height: 10rem;
                        padding-top: 3.5rem;
                        padding-left:1rem ;
                        padding-right:1rem ;
                        border-radius: 100%;

                        h2, span{
                            background-color: #05f140ff

                        }
                    }

                    h2, span{
                        color: #000;
                    }
            
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
