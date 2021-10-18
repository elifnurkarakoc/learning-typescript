import styled from "styled-components"
import { DefaultTheme } from "styled-components"

interface ImageProps {
    theme: DefaultTheme;
}

const Image = styled.img<ImageProps>`
    width: 100px;
    height: 1oopx;
`;


export default Image;