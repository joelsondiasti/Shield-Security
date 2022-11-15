
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 90%;
    margin: 0 auto;


    header{
      display: flex;
      flex-direction: row;
      background-color: #339989;
      padding: 1rem;
      align-items: center;
      justify-content: space-between;
      

      border-radius: 0 0 1rem 1rem;
      
      div{
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;

      }

      ul{
        display: flex;
        flex-direction: row ;
        gap: 1rem;
        
      }

      div, div img,
      div h1, nav,
      ul, ul li{
        background-color: #339989;
        color: #fff;

        font-weight: 400;
      }

     
    }
`
export default Container