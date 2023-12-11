/*
 * @Autor: costa
 * @Date: 2023-12-11 14:51:03
 * @LastEditors: costa
 * @LastEditTime: 2023-12-11 15:51:59
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GaugeContainer, GaugeText, Graduate } from "./gaugeChart.style";
import { useResize } from '../../hooks/useResize';
import { animation } from '../../utils/animation';
import { GlobalFontStyle } from '../styled/GlobalStyle';

export interface GaugeChartProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @description 百分比值
     */
    value?: number;
    /**
     * @description 数值字体大小
     */
    valueFontSize?: number;
}

const GaugeChart: React.FC<GaugeChartProps> = (props) => {
    const { style, value = 0, valueFontSize = 30 } = props;
    let { domRef, domSize } = useResize();
    const startVal = useRef(0);
    const [displayVal, setDisplayVal] = useState<string>('0%');

    useEffect(() => {
        start();
    }, [value]);

    // 计算角度
    const calcDeg = (i: number) => {
        return i / 100 * 360;
    }

    // 宽高的最小值
    const minSize = useMemo(() => Math.min(domSize.width, domSize.height), [domSize]);

    // 动画开始
    const start = () => {
        animation(1000, startVal.current, value, (val) => {
            setDisplayVal(formatVal(val));
        });
        startVal.current = value;
    }

    const formatVal = (val: number) => {
        return `${(+val).toFixed(0)}%`;
    };

    return <>
        <GlobalFontStyle />
        <GaugeContainer ref={domRef} style={style}>
            {
                Array.from({ length: 100 }).map((item, i) =>
                    <Graduate
                        key={i}
                        $parentSize={minSize}
                        $deg={calcDeg(i)}
                        $bg={value > i ? `hsl(${calcDeg(i)}, 100%, 50%)` : '#000'}
                    />
                )
            }
            <GaugeText $fontSize={valueFontSize} $color={`hsl(${calcDeg(value)}deg, 100%, 50%)`}>
                {displayVal}
            </GaugeText>
        </GaugeContainer>
    </>;
}

export default GaugeChart;
