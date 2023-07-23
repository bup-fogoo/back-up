export function getRandomTime() {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000);
    return `${timestamp}${randomNum}`
}
