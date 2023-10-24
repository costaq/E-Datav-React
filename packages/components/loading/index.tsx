import React from "react";
import { LoadingBall, LoadingCircle, LoadingContainer } from "./loading.style";

/*
 * @Autor: costa
 * @Date: 2023-10-24 13:28:18
 * @LastEditors: costa
 * @LastEditTime: 2023-10-24 13:42:15
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @description 边框颜色
     */
    borderColor?: string;
    /**
     * @description 尺寸，即宽高
     */
    size?: number;
}

const Loading: React.FC<LoadingProps> = (props) => {
    const { style, children, borderColor = '#1e80ff', size = 120 } = props;

    return <LoadingContainer style={style} className="e-loading">
        <LoadingCircle $borderColor={borderColor} $size={size}>
            <LoadingBall $color={borderColor} />
            {children}
        </LoadingCircle>
    </LoadingContainer>;
}

export default Loading;