import cleanUpFunction from "./utils/cleanup";
import initFunc from "./utils/init";

initFunc();

const testYourLoginHere = () => {
    const answer = 1 + 4;
    return answer;
}

console.log(testYourLoginHere());

cleanUpFunction();