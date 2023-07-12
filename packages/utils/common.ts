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