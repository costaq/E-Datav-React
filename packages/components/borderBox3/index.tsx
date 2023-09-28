/*
 * @Autor: costa
 * @Date: 2023-09-28 14:41:32
 * @LastEditors: costa
 * @LastEditTime: 2023-09-28 14:55:18
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import React, { useEffect } from 'react';
import { GlobalBox } from '../styled/GlobalBox';
import { useResize } from '../../hooks/useResize';
import { BorderContainer, BorderTitle } from './border.style';

export type TextPosition = 'left' | 'center' | 'right';

export interface BorderBox3Props extends React.HTMLAttributes<HTMLDivElement> {
    /**
    * @description 边框颜色
    */
    borderColor?: string;
    /**
     * @description 边框宽度
     */
    borderWidth?: number;
    /**
     * @description 背景色
     */
    backgroundColor?: string;
    /**
     * @description 标题字体大小
     */
    fontSize?: number;
    /**
     * @description 标题字体颜色
     */
    fontColor?: string;
    /**
     * @description 标题位置
     */
    textPosition?: TextPosition;
    /**
     * @description 标题文本
     */
    text: string;
}

const BorderBox3: React.FC<BorderBox3Props> = (props) => {
    const { children, style, borderColor = '#00ecfb', borderWidth = 2, backgroundColor = '#00ecfb26', fontSize = 16, fontColor = '#000', textPosition = 'left', text = '' } = props;
    let { domRef, domSize } = useResize();
    const titleRef = React.useRef<HTMLDivElement>(null);
    const [titleSize, setTitleSize] = React.useState({ width: 0, height: 0 });

    useEffect(() => {
        const { clientWidth = 0, clientHeight = 0 } = titleRef.current || {};
        setTitleSize({ width: clientWidth, height: clientHeight });
    }, []);

    return <BorderContainer style={style} className='e-border-box-3' ref={domRef} $borderColor={borderColor} $borderWidth={borderWidth} $backgroundColor={backgroundColor}>
        <BorderTitle
            $fontColor={fontColor}
            $fontSize={fontSize}
            $textPosition={textPosition}
            $backgroundColor={borderColor}
            ref={titleRef}
            $height={titleSize.height}
            $width={titleSize.width}>
            {text}
        </BorderTitle>
        {children}
    </BorderContainer>;
};

export default BorderBox3;