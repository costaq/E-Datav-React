/*
 * @Autor: costa
 * @Date: 2023-07-11 16:41:44
 * @LastEditors: costa
 * @LastEditTime: 2023-07-18 14:31:05
 * @Description: 水位图
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import React, { useEffect, useRef, useState } from 'react';
import { genNonDuplicateID } from '../../utils/common';
import { BoxContainer, BoxContent, WaterWave } from './boxContainer';
import { animation } from '../../utils/animation';

export interface WaterLevelPondProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @description 宽度，若不传值，则为100%
     */
    height?: number;
    /**
     * @description 高度，若不传值，则为100%
     */
    width?: number;
    /**
     * @description 当前值
     */
    value: number;
    /**
     * @description 小数点保留几位
     */
    decimals?: number;
    /**
     * @description 持续时间
     */
    duration?: number;
    /**
     * @description 字体字号
     */
    fontSize?: number;
    /**
     * @description 字体颜色
     */
    fontColor?: string;
    /**
     * @description 背景色
     */
    backgroundColor?: string;
    /**
     * @description 波浪颜色
     */
    waveColors?: Array<string>;
}

const WaterLevelPond: React.FC<WaterLevelPondProps> = (props) => {
    const { style, value, decimals = 0, duration = 3000, fontSize = 36, fontColor = '#fff', backgroundColor = 'transparent', waveColors = ['#41a9e3', '#b0e0ff'] } = props;
    const [displayVal, setDisplayVal] = useState<number>(0);
    const [startVal, setStartVal] = useState<number>(0);
    const symbolId = genNonDuplicateID();

    useEffect(() => {
        start();
    }, []);

    useEffect(() => {
        start();
    }, [value]);

    const start = () => {
        animation(duration, startVal, value, (value) => {
            setDisplayVal(+value.toFixed(decimals));
            if (value === props.value) {
                setStartVal(value);
            }
        });
    }

    return <BoxContainer style={style} className='e-water-level-pond'>
        <BoxContent $fontSize={fontSize} $fontColor={fontColor} $backgroundColor={backgroundColor}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{ display: 'none' }}>
                <symbol id={symbolId}>
                    <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                    <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                    <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                    <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                </symbol>
            </svg>
            <div className="percent">
                <div className="value">{displayVal}</div>
                <div className="suffix">%</div>
            </div>
            <WaterWave $value={displayVal} $waveColors={waveColors}>
                <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
                    <use href={`#${symbolId}`}></use>
                </svg>
                <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
                    <use href={`#${symbolId}`}></use>
                </svg>
            </WaterWave>
        </BoxContent>
    </BoxContainer>;
};

export default WaterLevelPond;