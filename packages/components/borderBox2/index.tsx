/*
 * @Autor: costa
 * @Date: 2023-07-26 14:11:40
 * @LastEditors: costa
 * @LastEditTime: 2023-08-10 13:22:52
 * @Description: 边框组件2
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import React from 'react';
import { GlobalBox } from '../styled/GlobalBox';
import { useResize } from '../../hooks/useResize';
import { BorderContainer } from './borderContainer';

export interface BorderBox2Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @description 边框颜色
     */
    borderColor?: string;
    /**
     * @description 边框宽度
     */
    borderWidth?: number;
    /**
     * @description 边框线长度
     */
    lineWidth?: number;
    /**
     * @description 背景色
     */
    backgroundColor?: string;
}

const BorderBox2: React.FC<BorderBox2Props> = (props) => {
    const { children, style, borderColor = '#4cc7f3', borderWidth = 2, lineWidth = 10, backgroundColor = 'rgba(76, 199, 243, 0.15)' } = props;
    let { domRef, domSize } = useResize();

    return <GlobalBox style={style} className='e-border-box-2' ref={domRef}>
        <BorderContainer $borderColor={borderColor} $borderWidth={borderWidth} $lineWidth={lineWidth} $backgroundColor={backgroundColor}>
            {children}
        </BorderContainer>
    </GlobalBox>;
};

export default BorderBox2;