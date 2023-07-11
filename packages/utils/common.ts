/**
 * 生成不重复ID
 */
export function genNonDuplicateID() {
    let idStr = Date.now().toString(36) + Math.random().toString(36).substring(3);
    return idStr
}