import React from 'react';
import { genNonDuplicateID } from '../../utils/common';
import { BorderBox, BorderContent, BorderSvgContainer } from '../styled/BorderBox';
import { useResize } from '../../hooks/useResize';

export interface BorderBox1Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @description 边框圆角
     */
    borderRadius?: number;
    /**
     * @description 边框宽度
     */
    borderWidth?: number;
    /**
     * @description 渐变颜色
     */
    colors?: string[];
    /**
     * @description 动画持续时间
     */
    duration?: number;
}

const BorderBox1: React.FC<BorderBox1Props> = (props) => {
    const { children, borderRadius = 3, borderWidth = 3, colors = ['#5ddcff', '#4e00c2'], duration = 4 } = props;
    let { domRef, domSize } = useResize();
    const symbolId = genNonDuplicateID();
    const startColor = colors[0];
    const endColor = colors[1];

    return <BorderBox className='e-border-box-1' ref={domRef}>
        <BorderSvgContainer height={domSize.height} width={domSize.width}>
            <defs>
                <linearGradient id={symbolId} x1='50%' y1='0%' x2='75%' y2='100%' >
                    <stop offset='0%' stopColor={startColor}>
                        <animate
                            attributeName='stop-color'
                            values={`${endColor};${startColor};${endColor}`} dur={`${duration}s`}
                            repeatCount='indefinite'>
                        </animate>
                    </stop>
                    <stop offset='100%' stopColor={endColor}>
                        <animate
                            attributeName='stop-color'
                            values={`${startColor};${endColor};${startColor}`}
                            dur={`${duration}s`}
                            repeatCount='indefinite'>
                        </animate>
                    </stop>
                </linearGradient>
            </defs>
            <rect
                x={borderWidth}
                y={borderWidth}
                rx={borderRadius}
                height={domSize.height > 0 ? domSize.height - borderWidth * 2 : 0}
                width={domSize.width > 0 ? domSize.width - borderWidth * 2 : 0}
                stroke={`url("#${symbolId}")`}
                fill='transparent'
                strokeWidth={borderWidth}
            />
        </BorderSvgContainer>
        <BorderContent>
            {children}
        </BorderContent>
    </BorderBox>;
};

export default BorderBox1;