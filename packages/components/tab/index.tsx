import React, { useEffect, useMemo, useState } from 'react';
import { TabContent, TabContainer, TabItem, ItemBorder, ItemIcon, ItemText, ItemContent } from './tab.style';
import { genNonDuplicateID } from '../../utils/common';
import { useResize } from '../../hooks/useResize';

export type TabItemValue = string | number;

export type TabItem = {
    /**
     * @description 显示值
     */
    label: string;
    /**
     * @description 选中值
     */
    value: TabItemValue;
    /**
     * @description 图标
     */
    icon?: React.ReactNode;
}

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @description 当前值
     */
    value?: TabItemValue;
    /**
     * @description tab item项
     */
    items: TabItem[];
    /**
     * @description 列数
     */
    columns?: number;
    /**
     * @description 间距
     */
    margin?: number;
    /**
     * @description 字号
     */
    fontSize?: number;
    /**
     * @description 字体颜色
     */
    fontColor?: string;
    /**
     * @description 背景颜色
     */
    backgroundColor?: string;
    /**
     * @description 动画持续时间
     */
    duration?: number;
    /**
     * @description 边框渐变颜色
     */
    borderColors?: string[];
    /**
     * @description 选中值改变事件
     */
    onTabChange: (value: TabItemValue) => void;
}

const Tab: React.FC<TabProps> = (props) => {
    const { style, items, columns = 3, margin = 10, fontColor = '#fff', fontSize = 16, duration = 3, value, backgroundColor = 'transparent', borderColors = ['#1CE3B6', '#1F38F1', '#F95A5A'] } = props;
    const { domRef, domSize } = useResize();
    const [selectedValue, setSelectedValue] = useState<TabItemValue>();
    const symbolId = genNonDuplicateID();

    useEffect(() => {
        initSelectedValue();
    }, []);

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    useEffect(() => {
        initSelectedValue();
    }, [items]);

    // 行数
    const rows = useMemo(() => Math.ceil(items.length / columns), [columns]);

    // 每一项的宽高
    const itemSize = useMemo(() => {
        return {
            width: domSize.width > 0 ? domSize.width / columns - margin * 2 : 0,
            height: domSize.height > 0 ? domSize.height / rows - margin * 2 : 0
        }
    }, [domSize]);

    //React.MouseEvent<SVGSVGElement | undefined, MouseEvent>
    const handleClick = (value: TabItemValue) => {
        const { onTabChange } = props;
        setSelectedValue(value);
        onTabChange(value);
    }

    // 初始化选中值
    const initSelectedValue = () => {
        if (value) {
            setSelectedValue(value);
        }
        else if (items && items.length > 0) {
            setSelectedValue(items[0].value);
        }
    }

    return <TabContainer $id={symbolId} $length={itemSize.width + itemSize.height} style={style} className='e-tabs'>
        <TabContent ref={domRef}>
            {
                items.map(item => (
                    <TabItem className={selectedValue === item.value ? 'active' : ''}
                        key={`${item.value}`} $margin={margin} $width={itemSize.width} $height={itemSize.height} $duration={duration}
                        $backgroundColor={backgroundColor} $id={symbolId}
                        onClick={() => handleClick(item.value)}>
                        <ItemBorder version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
                            <defs>
                                {/* 模糊 */}
                                <filter id={`svg-blur-${symbolId}`} x="0" y="0" width={itemSize.width} height={itemSize.height}>
                                    <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
                                    <feGaussianBlur in="offOut" result="blurout" stdDeviation="5" />
                                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                                </filter>
                                {/* 渐变颜色 */}
                                <linearGradient id={`svg-gradient-${symbolId}`} gradientUnits="userSpaceOnUse" x1="0%" y1="100%" x2="100%" y2="0%">
                                    {
                                        borderColors.map((color, index) => <stop key={index} offset={`${index / (borderColors.length - 1) * 100}%`} stopColor={color} />)
                                    }
                                </linearGradient>
                            </defs>
                            <rect filter={`url(#svg-blur-${symbolId})`} stroke={`url(#svg-gradient-${symbolId})`} rx="10"></rect>
                        </ItemBorder>
                        <ItemContent $fontColor={fontColor} $fontSize={fontSize}>
                            <ItemIcon>{item.icon}</ItemIcon>
                            <ItemText>{item.label}</ItemText>
                        </ItemContent>
                    </TabItem>
                ))
            }
        </TabContent>
    </TabContainer>;
};

export default Tab;