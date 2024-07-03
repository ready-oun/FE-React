# 1. Node.js

- 자바스크립트 런타임.
- Node.js 나오기 전까지는 자바스크립트 실행은 `브라우저 기반`임.
- 현재는 어떤 곳에서도 실행이 가능한 환경. => 대중화의 밑거름.

## 1.1. 개발방법

- 모듈과 모듈 시스템의 개념으로 개발을 진행.
  - **모듈** : 재사용이 가능한 형태의 소스나 파일. 따라서, 재사용 가능한 모듈들이 모여서 하나의 시스템.
- react 에서도 **모듈 기반의 개발**을 진행하게 됨.
  - 앞으로 사용되는 것은 ES(ECMAScript) 모듈 시스템으로 사용하게 됨. `package.json`에서 `type` 을 `module` 로 설정.

## 1.2. 재사용성

- `export` 키워드를 사용해서 외부에서 사용될 수 있는 공유.
- 관련있는 기능이나 정보들은 하나의 javascript 파일에서 관리하게 됨.
  - `SRP` 가 적용된것과 동일.
- 사용될 곳에서는 공유된 것을 `import`를 해서 사용해야 함.
  - `import * as circle from "./circle.js";`
- `import` 종류
  - 개별 내보내기 : `export` 를 함수명, 상수 앞에 붙여서 사용
  - 개별 불러오기 : `import { PI, getArea } from "./circle.js";`
  - 전부 불러오기 : `import * as circle from "./circle.js";`
  - 기본값으로 보내기 : `export` 와 함께 `default` 키워드 사용.
    - 기본값으로 보내기를 하면 불어 올때 중괄호를 사용하지 않아도 됨.
    - 그리고, 자유롭게 이름을 지정해서 사용할 수 있음.

## 1.3. 라이브러리 사용

- 외부 패키지(라이브러리)를 설치해서, 사용.
  - ex) `Lodash` : 배열 및 객체를 다루는데 특화된 기능을 제공하는 라이브러리.
- 설치 명령어
  - `npm i lodash` 입력 후 실행. ( npm : node package manager, i : install )
- 외부 라이브러리 검색 사이트
  - https://www.npmjs.com/
  - https://lodash.com/docs/4.17.15

---

# 2. 리액트

- node.js 의 라이브러리

## 특징

a. 컴포넌트 기반의 유연성( 기본 웹 페이지 VS 컴포넌트 )
b. 쉽고 간단한 업데이트( 선언형 프로그래밍 )
c. 빠른 업데이트( Virtual DOM )

## 2.a. 컴포넌트 기반의 유연성( 기본 웹 페이지 VS 컴포넌트 )

- Header 가 모든 웹페이지에 포함되는 것을 가정.

  - 웹 페이지가 100개, 한 군데에서 Header 을 수정, 99 군데를 수정해야 함.

- Header 와 같은 재사용이 가능한 부분을 컴포넌트로 작성.

  - 하나의 Header 컴포넌트로 모든 페이지에서 사용이 되도록 함. (react)

- 수정이 발생 하더라도 하나의 컴포넌트만 수정하면, 모든 페이지에 반영이 됨.

- 컴포넌트는 함수형태로 구현해서 호출해서 사용.
  - 호출해서 반환되는 값은 Header 태그가 반환됨. => react 컴포넌트

## 2.b. 쉽고 간단한 업데이트( 선언형 프로그래밍 )

- javascript

  - 개발자 주도 프로그래밍.
  - 명령형 프로그래밍( 개발자가 처음에서 끝까지 모두 코드로 구현 )
  - 모든 과정 하나 하나를 설명. 코드가 길어지고 복잡해짐.

- react

  - 선언형 프로그래밍.( 컴포넌트는 재사용, 함수 호출하듯이 사용 )
  - Header 자리에 후보군 3개가 있다고 가장.
  - Header1 : 1, Header2 : 2, Header3 : 3

  - state 변수(컴포넌트)를 1, 2, 3 중에서 하나로 설정(선언)
  - => 해당되는 Header 가 화면에 적용되어 표시됨.
  - => 화면제어가 간편해짐.

- 컴포넌트 기반의 화면 제어를 react가 지원함.

### 자바스크립트 객체

#### 1. 객체의 종류

- 내장객체
- javascript 에서 미리 객체 정의되어 있는 API.
- 개발자가 쉽게 사용할 수 있도록 미리 만들어진 객체.

  - => windows 객체(중요)

- DOM(Document Object Model) 객체
- document 객체(중요)

- 웹브라우저 객체
- location, history 등의 객체

- 사용자 정의 객체

#### 2. DOM(Document Object Model)

- javascript 와 같은 프로그래밍 언어로 웹 문서에 접근하고 제어할 수 있도록 웹 문서를 체계적으로 정리하는 방법.
- DOM 에서는 웹 문서를 하나의 객체로 정의하고, 웹 문서를 이루는
  모든 요소(Tag, node)를 각각의 객체로 정의해서 관리.

- **DOM tree ( DOM node tree )** : document - html - head and body ....
  - document node
  - DOM tree 의 최사위 root node 임.
  - Html 문서당 document 객체는 유일함.
  - DOM 트리의 node 들에 접근하기 위한 진입점.
  - 전역객체 window의 document 프로퍼티에 바인딩되어 있음.

#### 3. DOM 에서 node(웹 요소, tag)에 접근 - API 를 사용.

- `querySelector()`, 대상이 하나의 요소
- `querySelectorAll()`, 대상이 여러 요소
- `getElement* ()`, 대상을 선택자를 사용해서 접근
  - `getElementById()`, Id 로 요소 접근
  - `getElementByClassName()`, 여러 요소가 대상
  - `getElementByTagName()`, 여러 요소가 대상을

#### 4. Node(요소, tag) List

- `querySelectorAll()` API 함수를 사용해서 반환되는 정보.
- 요소 추가 및 삭제는 Node List 를 기준으로 반영됨.

#### 5. 노드 추가 및 수정을 위해서 제공되는 함수(API)

- `createElement()`
- `appendChild()`
- `createAttribute()`
- `setAttributeNode()`
- `remove()`
- `removeChild()`

#### 6. document 객체(DOM)에 img tag(node, 요소) 를 추가 하는 사례

- img tag 를 **요소 노드**로 신규 생성.
  - `let newImg = document.createElement("img");`
- img tag 의 src 속성을 설정하기위해서 **속성 노드**를 신규로 생성.
  - `let srcNode = document.createAttribute("src");`
  - `srcNode.value = "images/wall.jpg";`
- img tag 의 node 와 src 속성 node 를 **연결**.
  - `newImg.setAttributeNode(srcNode);`

======== img tag node 구성 ========

- html 문서에서 img tag와 연결될 부모 노드에 연결.

  - => 완성된 html 문서가 됨.

  - `document.body.appendChild(newImg);`

======== html document 구성 완료 ========

## 2.c. 빠른 업데이트(Virtual DOM)

- **브라우저 화면 업데이트 단계**

  - `( HTML, CSS ) -> 렌드 트리 -> 레이 아웃 -> 페인팅`

  - `렌드 트리` : DOM 과 DOM 요소에 스타일 정보를 적용.
  - `레이 아웃` : DOM 정보를 바탕으로 화면(모니터)상의 위치정보(px)를 계산.
  - `페인팅` : document 의 요소를 화면에 실제로 출력.

- **브라우저 DOM, Virtual DOM**
  - Virtual DOM 을 활용해서 document 의 수정, 추가, 삭제 와 관련된 모든 변경 사항을 브라우저의 DOM에 적용하지 않고,
  - react 의 Virtual DOM( 브라우저 DOM 의 복사본 ) 에 적용하고,
  - 적용이 완료되면, 한 번에 브라우저 DOM 에 적용을 하는 방법으로 렌더링 속도를 개선함.