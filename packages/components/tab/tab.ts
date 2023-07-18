import styled from "styled-components";

type TabItemProps = {
    $width: number;
    $height: number;
    $margin: number;
    $fontSize: number;
    $fontColor: string;
    $duration: number;
    $backgroundColor: string;
}

export const TabItem = styled.svg<TabItemProps>`
    position: relative;
    height: ${props => props.$height}px;
    width: ${props => props.$width}px;
    float: left;
    margin: ${props => props.$margin}px;
    cursor: pointer;

    &.active {
        rect {
            stroke-dasharray:${props => props.$width + props.$height}; 
            animation: blinker-active ${props => props.$duration}s linear infinite;
        }
    }

    &:hover {
        rect {
            animation: blinker-hover ${props => props.$duration}s linear infinite;
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
    
    text {
        fill: ${props => props.$fontColor};
        text-anchor: middle;
        dominant-baseline: middle;
        font-size: ${props => props.$fontSize}px;
    }

    @keyframes blinker-hover {
        0% { stroke-dashoffset: 0; stroke-dasharray: 0 10000; }
        50% { stroke-dasharray:${props => props.$width + props.$height}; }
        100% { stroke-dashoffset: -${props => (props.$width + props.$height) * 2}; stroke-dasharray: 10000 0;}
    }

    @keyframes blinker-active {
        0% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -${props => (props.$width + props.$height) * 2};}
    }
`;

export const TabContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const TabContent = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
`;