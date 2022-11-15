import styled from 'styled-components'

const App = styled.div`

  display: flex;
  

  div{  
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 90%;
    margin: 0 auto;

  
    main{
      width: 90%;
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      align-content: center;

      section{
        display: grid;
        grid-template-columns: 1fr 25rem;
        gap: 5rem;
        align-items: center;

        div{
          display: flex;
          gap: 1rem;
          text-align: justify ; 
          
          h1{
            font-size: 2rem;
            font-weight: 600;
            font-style: italic;

            color: #05f140ff;
          }


          a{
            width: 100%;
            padding: 1rem;
            border-radius: 1rem;

            text-align: center;
            background-color: #05f140ff;
            color: #000;
            font-weight: 400;
            font-size: 1.5rem;
            transition: 1s;

            :hover{
              border-radius: 1.5rem;
              transform: scale(1.05);
            }
          }
        }
      }
    }

    footer{}

  }
`



export default App
