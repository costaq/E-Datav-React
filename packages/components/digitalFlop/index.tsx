/*
 * @Autor: costa
 * @Date: 2023-05-09 14:54:25
 * @LastEditors: costa
 * @LastEditTime: 2023-05-10 15:11:22
 * @Description: 数字翻牌器
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { animation } from '../../utils/animation';
import './index.scss';

export interface DigitalFlopProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
    * @description 终止值
    */
    value?: number;
    /**
     * @description 小数点保留几位
     */
    decimals?: number;
    /**
     * @description 持续时间
     */
    duration?: number;
    /**
     * @description 字体大小
     */
    fontSize?: number;
    /**
     * @description 字体库 内置 electronic
     */
    fontFamily?: string;
    /**
     * @description 字体颜色
     */
    color?: string;
    /**
     * @description 千位分隔符
     */
    separator?: string;
}

const DigitalFlop: React.FC<DigitalFlopProps> = (props) => {
    const { value = 1000, decimals = 0, duration = 3000, fontSize = 50, fontFamily = 'electronic', color = '#000', separator = '' } = props;
    const startVal = useRef(0);
    const [displayVal, setDisplayVal] = useState('0');

    const styles = useMemo(() => ({
        fontFamily,
        fontSize: `${fontSize}px`,
        color
    }), [fontFamily, fontSize, color]); 

    const formatVal = (val: number) => {
        const num = val.toFixed(decimals);
        const numStr = String(num);
        const x = numStr.split('.');
        // 整数部分
        let x1 = x[0];
        // 小数点部分
        const x2 = x.length > 1 ? `.${x[1]}` : '';
        // 数字后面是三位数字
        const rgx = /(\d+)(\d{3})/;
        // 有分隔符并且非数字
        if (separator && typeof separator !== 'number') {
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + separator + '$2');
            }
        }
        return `${x1}${x2}`;
    }

    useEffect(() => {
        start();
    }, [value]);

    // 开始动画
    const start = () => {
        animation(duration, startVal.current, value, (val) => {
            setDisplayVal(formatVal(val));
        });
        startVal.current = value;
    }

    return <span className='e-digital-flop' style={styles}>{displayVal}</span>;
}

export default DigitalFlop;