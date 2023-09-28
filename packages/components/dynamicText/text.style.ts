/*
 * @Autor: costa
 * @Date: 2023-09-06 16:57:53
 * @LastEditors: costa
 * @LastEditTime: 2023-09-06 17:02:54
 * @Description:
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import styled from "styled-components";

interface TextContainerProps {
    $colors: string[];
}

interface TextProps {
    $duration: number;
    $delay: number;
    $spacing: number;
}

export const TextContainer = styled.div<TextContainerProps>`
    color: ${props => props.$colors[0]};

    @keyframes text-gradient {
        to {
            color: ${props => props.$colors[1]};
        }
    }
`;

export const Text = styled.span<TextProps>`
    animation: text-gradient ${props => props.$duration}s linear ${props => props.$delay}s infinite alternate;
    margin: 0 ${props => props.$spacing}px;
`;