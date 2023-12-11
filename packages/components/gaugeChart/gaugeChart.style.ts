import styled from "styled-components";

interface GraduateProps {
    $deg: number;
    $bg: string;
    $parentSize: number;
}

interface GaugeTextProps {
    $fontSize: number;
    $color: string;
}

export const GaugeContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Graduate = styled.span<GraduateProps>`
    --bg: ${props => props.$bg};
    --sg: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    transform: rotate(${props => props.$deg}deg);

    &::after {
        content: '';
        position: absolute;
        background: var(--bg);
        width: ${props => props.$parentSize / 60}px;
        height: ${props => props.$parentSize / 20}px;
        box-shadow: 0 0 2px var(--sg), o o 4px var(--sg), o o 8px var(--sg);
        transition: all 0.8s linear;
    }
`;

export const GaugeText = styled.span<GaugeTextProps>`
    position: relative;
    color: white;
    font-size: ${props => props.$fontSize}px;
    text-shadow: 1px 1px 0 gray, 0 0 4px ${props => props.$color}, 0 0 8px ${props => props.$color};
    font-family: electronic;
`;