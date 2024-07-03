import * as circle from "./circle.js";
import lodash from "lodash";
/**
    Lodash는 JavaScript의 유틸리티 라이브러리로, 배열, 객체, 문자열 등의 데이터 조작을 쉽게 할 수 있게 도와줍니다.
    주요 기능으로는 배열 조작, 객체 조작, 컬렉션 조작, 문자열 조작, 유틸리티 함수 등이 있습니다.
    Lodash를 사용하면 코드의 가독성이 향상되고, 반복되는 코드를 줄일 수 있습니다.
 */
const arr = [111, 222, 111, 44, 33, 222]; // 중복된 222가 없어지게 됨
const uniqueArr = lodash.uniqBy(arr);

// console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

console.log(uniqueArr);

// console.log("index run~!!");
