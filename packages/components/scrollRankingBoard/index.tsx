import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GlobalBox } from '../styled/GlobalBox';
import { useResize } from '../../hooks/useResize';
import { BoardItem, BoardItemIcon, BoardItemLabel, BoardItemShadow, BoardItemValue } from './board';

export type ScrollRankingBoardItem = {
    label: string;
    value: number;
    [key: string]: any;
}

type ScrollRankingBoardItemWithHeight = ScrollRankingBoardItem & {
    height: number;
    ranking: number;
    scroll: number;
}

interface Data {
    all: ScrollRankingBoardItemWithHeight[];
    action?: 'init' | 'reset' | 'restart';
}

export interface ScrollRankingBoardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @description 数据
     */
    items: ScrollRankingBoardItem[];
    /**
     * @description 显示的行数
     */
    rowNum?: number;
    /**
     * @description 文本字号
     */
    labelFontSize?: number;
    /**
     * @description 值字号
     */
    valueFontSize?: number;
    /**
     * @description 排名字号
     */
    rankingFontSize?: number;
    /**
     * @description: 颜色
     */
    color?: string;
    /**
     * @description 高亮颜色
     */
    highlightColors?: string[];
    /**
     * @description 高亮行数
     */
    highlightRowNum?: number;
    /**
     * @description 滚动间隔
     */
    interval?: number;
    /**
     * @description 滚动类型
     */
    type?: 'single' | 'page';
    /**
     * @description 点击行事件
     * @param item 点击的行数据
     * @param index 行索引
     */
    onRowClick?: (item: ScrollRankingBoardItem, index: number) => void;
}

const ScrollRankingBoard: React.FC<ScrollRankingBoardProps> = (props) => {
    let { domRef, domSize } = useResize();
    const { style, items, rowNum = 5, interval = 3000, type = 'single', highlightRowNum = 3, highlightColors = ['#1e80ff', '#4cc7f3', '#CDDC39'], rankingFontSize = 18, labelFontSize = 14, valueFontSize = 18, color = '#fff', onRowClick } = props;
    // 存放所有数据
    const [data, setData] = useState<Data>({ all: [] });
    // dom数据
    const [domData, setDomData] = useState<ScrollRankingBoardItemWithHeight[]>([]);
    // 平均高度
    const [avgHeight, setAvgHeight] = useState<number>(0);
    // 默认高亮颜色
    const defaultHighlightColor = highlightColors[highlightColors.length - 1];
    // 滚动行数
    const scrollNum = type === 'single' ? 1 : rowNum;
    const timer = useRef<any>(null);

    useEffect(() => {
        clearTimeout(timer.current);
        init();
    }, [domSize, items]);

    useEffect(() => {
        // 初始化 || 开始新一轮重置高度
        if (data.action === 'init' || data.action === 'restart') {
            resetHeight();
        }
        else if (data.action === 'reset') {
            // 删除前面已滚动的数据，重新开始动画
            setData({ all: data.all.slice(scrollNum), action: 'restart' });
        }
    }, [data]);

    const handleMouseEnter = () => { 
        clearTimeout(timer.current);
    }

    const handleMouseLeave = () => {
        resetHeight();
    }

    // data发生变化时，重新绑定事件，防止无法获取到最新的state
    useEffect(() => {
        domRef.current?.addEventListener('mouseenter', handleMouseEnter);
        domRef.current?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            domRef.current?.removeEventListener('mouseenter', handleMouseEnter);
            domRef.current?.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [data]);

    // 初始化
    const init = () => {
        if (domSize.height === 0 || items.length === 0) return;
        const itemHeight = domSize.height / rowNum;
        let newData = items.sort((a, b) => b.value - a.value) as ScrollRankingBoardItemWithHeight[];
        newData = newData.map((item, index) => ({ ...item, height: itemHeight, ranking: index + 1, scroll: index }));
        setDomData(newData.slice(0, rowNum));
        setData({ all: newData, action: 'init' });
        setAvgHeight(itemHeight);
    }

    // 动画通过改变高度实现
    const resetHeight = () => {
        // 若记录数小于等于显示行数, 则不滚动
        timer.current = setTimeout(() => {
            if (data.all.length <= rowNum) return;
            let newAllData = [...data.all];
            // 将即将要删除的元素高度设置为0
            newAllData.forEach((item, i) => {
                if (i < scrollNum) {
                    item.height = 0;
                }
            });
            // 将即将要删除的数据添加到最后，并将scroll属性加上行数，以便下次滚动时能够保证key值唯一
            newAllData = [...newAllData, ...newAllData.slice(0, scrollNum).map((item) => ({ ...item, height: avgHeight, scroll: item.scroll + rowNum }))];
            setDomData(newAllData.slice(0, rowNum + scrollNum));
            // 重置了高度, 重新渲染
            setData({ all: newAllData, action: 'reset' });
        }, interval);
    }

    // 行点击事件
    const handleRowClick = (item: ScrollRankingBoardItem, rowIndex: number) => {
        // 不将height属性暴露出去
        Reflect.deleteProperty(item, 'height');
        onRowClick && onRowClick(item, rowIndex);
    }

    return <GlobalBox className='e-scroll-ranking-board' ref={domRef} style={{ ...style, overflow: 'hidden' }}>
        {
            domData.map((item, index) => {
                const highlightColor = highlightRowNum >= item.ranking ? (highlightColors[item.ranking - 1] || defaultHighlightColor) : color;
                return <BoardItem key={item.label + item.scroll} $height={item.height} $color={color} onClick={() => handleRowClick(item, index)}>
                    <BoardItemIcon $fontSize={rankingFontSize} $color={highlightColor}>No.{item.ranking}</BoardItemIcon>
                    <BoardItemLabel $fontSize={labelFontSize}>{item.label}</BoardItemLabel>
                    <BoardItemValue $fontSize={valueFontSize}>{item.value}</BoardItemValue>
                    {
                        highlightRowNum >= item.ranking && <BoardItemShadow $color={highlightColor}></BoardItemShadow>
                    }
                </BoardItem>
            }
            )
        }
    </GlobalBox>;
};

export default ScrollRankingBoard;