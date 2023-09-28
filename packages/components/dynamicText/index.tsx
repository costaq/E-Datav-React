import React from "react";
import { useMemo } from "react";
import { Text, TextContainer } from "./text.style";

export interface DynamicTextProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @description 文字
     */
    text: string;
    /**
     * @description 左右间距
     */
    spacing?: number;
    /**
     * @description 文本渐变颜色，只支持两种颜色，第一个为起始颜色，第二个为结束颜色
     */
    colors?: string[];
}

const DynamicText: React.FC<DynamicTextProps> = (props) => {
    const { style, text, spacing = 5, colors = ['#fff', '#1e80ff'] } = props;

    const spans = useMemo(() => {
        return text.split('');
    }, [text]);

    const speed = useMemo(() => {
        return 1 / spans.length;
    }, [spans]);

    return <TextContainer className="e-dynamic-text" $colors={colors} style={style}>
        {spans.map((txt, index) => {
            return <Text key={`${spans.length}${index}`} $spacing={spacing} $duration={spans.length * speed} $delay={index * speed}>{txt}</Text>
        })}
    </TextContainer>;
}

export default DynamicText;