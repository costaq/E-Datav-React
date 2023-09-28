import styled from "styled-components";

interface BorderContainerProps {
    $borderColor: string;
    $borderWidth: number;
    $backgroundColor: string;
}

interface BorderTitleProps {
    $backgroundColor: string;
    $height: number;
    $textPosition: string;
    $width: number;
    $fontSize: number;
    $fontColor: string;
}

export const BorderContainer = styled.div<BorderContainerProps>`
    --color: ${props => props.$borderColor};
    border-radius: 20px;
    position: relative;
    width: 100%;
    height: 100%;
    border: ${props => props.$borderWidth}px solid var(--color);
    background-color: ${props => props.$backgroundColor};
    box-shadow: 0 0 15px var(--color), 0 0 15px var(--color) inset;
`;

export const BorderTitle = styled.div<BorderTitleProps>`
    --height: ${props => props.$height === 0 ? 'auto' : props.$height + 'px'};
    --width: ${props => props.$width === 0 ? 'auto' : props.$width + 'px'};
    --color: ${props => props.$backgroundColor};
    color: ${props => props.$fontColor};
    background-color: ${props => props.$backgroundColor};
    position: absolute;
    top: calc(var(--height) * -0.5);
    left: ${props => props.$textPosition === 'left' ? 'calc(var(--height) * 1.5)' : (props.$textPosition === 'center' ? '50%': 'auto')};
    right: ${props => props.$textPosition === 'right' ? 'calc(var(--height) * 1.5)': 'auto'};
    height: var(--height);
    font-weight: bold;
    line-height: var(--height);
    font-size: ${props => props.$fontSize}px;
    filter: drop-shadow(0 0 8px var(--color));
    padding: 0 10px;
    transform: ${props => props.$textPosition === 'center' ? 'translateX(calc(var(--width) * -0.5))': ''};

    &::before {
        content: '';
        position: absolute;
        right: 100%;
        display: inline-block;
        width: 0;
        height: 0;
        border-top: ${props => props.$textPosition === 'right' ? '': 'var(--height) solid var(--color)'};
        border-bottom: ${props => props.$textPosition === 'right' ? 'var(--height) solid var(--color)' : ''};
        border-left: var(--height) solid transparent;
    }

    &::after {
        content: '';
        position: absolute;
        left: 100%;
        display: inline-block;
        width: 0;
        height: 0;
        border-top: ${props => props.$textPosition === 'left' ? '': 'var(--height) solid var(--color)'};
        border-right: var(--height) solid transparent;
        border-bottom: ${props => props.$textPosition === 'left' ? 'var(--height) solid var(--color)': ''};
    }
`;