/*
 * @Autor: costa
 * @Date: 2023-07-11 13:52:56
 * @LastEditors: costa
 * @LastEditTime: 2023-10-24 13:51:39
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
/**
 * 生成不重复ID
 */
export function genNonDuplicateID() {
    let idStr = Date.now().toString(36) + Math.random().toString(36).substring(3);
    return idStr
}

/** 根据参数类型转换成px*/
export function convertToPx(value: number | string) {
    return typeof value === 'number' ? `${value}px` : value;
};

// 防抖函数
export function debounce(fn: Function, delay: number) {
    let timer: any = null;
    return function (...args: any) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}