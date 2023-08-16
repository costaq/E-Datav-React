import styled from "styled-components";

interface BoardItemProps {
    $height: number;
    $color: string;
}

interface BoardItemIconProps {
    $fontSize: number;
    $color: string;
}

interface BoardItemLabelProps {
    $fontSize: number;
}

interface BoardItemValueProps {
    $fontSize: number;
}

interface BoardItemShadowProps {
    $color: string;
}

export const BoardItem = styled.div<BoardItemProps>`
    position: relative;
    height: ${props => props.$height}px;
    width: 100%;
    display: flex;
    align-items: center;
    color: ${props => props.$color};
    transition: all 0.3s;
    overflow: hidden;
    cursor: pointer;
    //background: #0070c342;
    padding: 0 10px;
    box-sizing: border-box;
`;

export const BoardItemIcon = styled.div<BoardItemIconProps>`
    font-family: 'electronic';
    width: 50px;
    color: ${props => props.$color};
    font-size: ${props => props.$fontSize}px;
`;

export const BoardItemLabel = styled.div<BoardItemLabelProps>`
    flex: 1;
    font-size: ${props => props.$fontSize}px;
`;

export const BoardItemValue = styled.div<BoardItemValueProps>`
    font-family: 'electronic';
    font-size: ${props => props.$fontSize}px;
`;

export const BoardItemShadow = styled.div<BoardItemShadowProps>`
        position: absolute;
        left: 0;
        bottom: 5px;
        height: 5px;
        width: 0;
        transform: translateX(-50%);
        background: radial-gradient(${props => props.$color} 5%,transparent 80%);
        animation: shadow 3s linear infinite;

        @keyframes shadow {
            0% {
                width: 20%;
            }
            50% {
                width: 200%;
            }
            100% {
                width: 20%;
            }
        }
`;