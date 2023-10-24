/*
 * @Autor: costa
 * @Date: 2023-04-18 15:39:13
 * @LastEditors: costa
 * @LastEditTime: 2023-10-24 13:53:32
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { debounce } from '../../utils/common';

/**
 * @description full 全部拉伸 | full-width 宽度拉伸 | full-height 高度拉伸 | initial 初始化默认不拉伸
 */
type FullScreenType = 'full' | 'full-width' | 'full-height' | 'initial';

export interface FullScreenContainerProps extends React.HTMLAttributes<HTMLDivElement>  {
    /**
     * @description 大屏设计稿宽度
     */
    width?: number;
    /**
     * @description 大屏设计稿高度
     */
    height?: number;
    /**
     * @description 全屏模式
     */
    type?: FullScreenType;
}

const FullScreenContainer: React.FC<PropsWithChildren<FullScreenContainerProps>> = (props) => {
  const { children, width = 1920, height = 1080, type = 'full' } = props;

  

  useEffect(() => {
    scale();
    window.onresize = () => changeScale();
  }, []);

  useEffect(() => {
    scale();
  }, [width, height, type]);

  const scale = () => {
    const windowWidth =
      document.documentElement.clientWidth || window.screen.width;

    //X轴scale,全屏时根据设置值计算
    const xScale = windowWidth / width;

    const windowHeight =
      document.documentElement.clientHeight || window.screen.height;

    //Y轴scale,全屏时根据设置值计算
    const yScale = windowHeight / height;

    let scale = '1';
    let overflow = 'overflow: hidden';

    switch (type) {
      case 'full':
      default:
        scale = `${xScale}, ${yScale}`;
        overflow = 'overflow: hidden';
        break
      case 'full-width':
        scale = `${xScale}, ${xScale}`;
        overflow = 'overflow-y: scroll';
        break
      case 'full-height':
        scale = `${yScale}, ${yScale}`;
        overflow = 'overflow-x: scroll';
        break
      case 'initial':
        scale = '1';
        overflow = 'overflow: auto';
        break
    }

    let css = `body{transform: scale(${scale}); 
                height: ${height + 'px'}; width: ${width}px; 
                transform-origin: left top; ${overflow};}`;

    const head = document.getElementsByTagName('head')[0];

    let style = document.createElement('style');

    style.type = 'text/css';

    style.appendChild(document.createTextNode(css));

    head.appendChild(style);
  }

  const changeScale = debounce(scale, 100);

  return (
    <>{children}</>
  )
}

export default FullScreenContainer;