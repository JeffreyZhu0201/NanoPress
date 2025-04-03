

export function ISO_TO_Local(origin_time: string):string {
    const date = new Date(origin_time);

    // 提取时间部分（注意月份从 0 开始，需 +1）
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 补零
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // 格式化为：YYYY-MM-DD HH:mm:ss
    const readableTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return readableTime
}