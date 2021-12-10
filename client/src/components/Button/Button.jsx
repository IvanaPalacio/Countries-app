import styled from 'styled-components'

export const Button = styled.button`
background: #003580;
color: white;
cursor: pointer;
font-size: 12px;
margin: 3em;
padding: 4px 12px;
border: 3px solid #003580;
border-radius: 5px;
transition: all .2s ease;

&:hover{
    background-color: var(--btn-color-background);
    border: 3px solid var(--btn-color-background);    
    color: #003580;
}
`
export default Button 