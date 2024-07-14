
const getTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
    // Add feature
}
const initFunc = () => {
    // Uncomment below line to clear console every time
    console.clear();
    console.log(`Output at ${getTime()}`);

}

export default initFunc;