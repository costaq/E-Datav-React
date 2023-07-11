/*
 * @Autor: costa
 * @Date: 2023-07-11 14:17:45
 * @LastEditors: costa
 * @LastEditTime: 2023-07-11 15:01:26
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { useEffect, useRef, useState } from "react";

interface DomSize {
    width: number;
    height: number;
}

export function useResize() {
    const domRef = useRef<HTMLDivElement>(null);
    const [domSize, setDomSize] = useState<DomSize>({
        width: 0,
        height: 0
    });

    function handleDomSizeChange() {
        const { clientWidth = 0, clientHeight = 0 } = domRef.current || {};
        setDomSize({ width: clientWidth, height: clientHeight });
    }

    useEffect(() => {
        handleDomSizeChange();
    }, []);

    return {
        domRef,
        domSize
    }
}