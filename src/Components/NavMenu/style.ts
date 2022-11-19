import styled from "styled-components";

const NavsBar = styled.div`
   width: 100%;
    
   
   .container{
        display: flex;
        flex-direction: column;
        background-color: #d9d9d9;
        border-radius: 1rem 1rem 1rem 1rem;
        align-items: center;
        padding-bottom: 1rem;
        
        .tabs{
            display: flex;
            justify-content: space-evenly;
            align-self: center;
            width: 90%;
            background-color: #f9f9f9;
            border-radius: 1rem 1rem 1rem 1rem;
            margin-bottom: 1rem;
            
            
            .nameTabs{
                color: #000;
                background-color: #f9f9f9;
                border-radius: 1rem 1rem 1rem 1rem;
                padding: 1rem;
                font-weight: 900;
                transition: 0.4s;

                :focus{
                    color: #339989;
                    text-decoration: underline;
                }
            }
        }

        .ContentTabs{
            background-color: #d9d9d9;

            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            align-self: center;
            

            section{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                text-align: justify;
                width: 70%;

                margin-left: 1rem;
                margin-right: 1rem;

                h1{
                    align-self: center;
                }

                button{
                    background-color: #05f140ff;
                    padding: 1rem;
                    border-radius: 1rem;
                    transition: 1s;

                    :hover{
                        background-color: #03dd3a;
                        border-radius: 1.2rem;
                    }
                }
            }


            section, h1, p, button{
                background-color: #d9d9d9;
                color: #010101;
                font-weight: 400;
            }
        }
    }

    img{
        height: 10rem;
        width: 10rem;
        background-color: #d9d9d9;
    }
`

export default NavsBar
