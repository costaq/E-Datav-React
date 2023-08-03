import styled from "styled-components";

type TabContainerProps = {
    $id: string;
    $length: number;
}

type TabItemProps = {
    $id: string;
    $width: number;
    $height: number;
    $margin: number;
    $duration: number;
    $backgroundColor: string;
}

type TabItemContentProps = {
    $fontSize: number;
    $fontColor: string;
}

export const TabItem = styled.div<TabItemProps>`
    position: relative;
    height: ${props => props.$height}px;
    width: ${props => props.$width}px;
    float: left;
    margin: ${props => props.$margin}px;
    cursor: pointer;

    &.active {
        rect {
            stroke-dasharray:${props => props.$width + props.$height}; 
            animation: blinker-active-${props => props.$id} ${props => props.$duration}s linear infinite;
        }
    }

    &:hover {
        rect {
            animation: blinker-hover-${props => props.$id} ${props => props.$duration}s linear infinite;
        }
    }

    rect {
        height: ${props => props.$height}px;
        width: ${props => props.$width}px;
        fill: ${props => props.$backgroundColor};
        stroke-dasharray: 0 10000;
        stroke-dashoffset: 0;
        stroke-width: 3px;
    }
`;

export const TabContainer = styled.div<TabContainerProps>`
    position: relative;
    width: 100%;
    height: 100%;

    @keyframes blinker-hover-${props => props.$id} {
        0% { stroke-dashoffset: 0; stroke-dasharray: 0 10000; }
        50% { stroke-dasharray:${props => props.$length}; }
        100% { stroke-dashoffset: -${props => props.$length * 2}; stroke-dasharray: 10000 0;}
    }

    @keyframes blinker-active-${props => props.$id} {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -${props => props.$length * 2};}
    }
`;

export const TabContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const ItemContent = styled.div<TabItemContentProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => props.$fontSize}px;
    color: ${props => props.$fontColor};
`;

export const ItemBorder = styled.svg`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const ItemText = styled.span`
    margin: 0 5px;
`;

export const ItemIcon = styled.span``;