# MZC FE Class

## 1. 웹 개발

### 1.1 Front End

- **HTML**: 웹 문서의 뼈대
- **CSS**: 꾸밈
- **JavaScript**: 동작과 관련된 반응하도록 함

  - **라이브러리**: jQuery, Bootstrap
  - **프레임워크**: React (SPA), Vue.js, Angular

    - **SPA (Single Page Application)**: 서버와의 통신 및 클라이언트의 화면 구성 최적화
    - (HTML, CSS, JS, Data) => Data (JSON)

  - **라이브러리 vs 프레임워크**:
    - **라이브러리**: 개발자에게 주도권이 있음
    - **프레임워크**: 개발 주도권이 FW에 있음, 표준화

### 1.2 Back End

- **JavaScript**: Node.js, Express
- **Java**: Spring (FW) -> Spring Boot
- **Python**: Django (FW)
- **PHP**: CodeIgniter (FW)
- **Go**: Revel (FW)

### 1.3 클라우드

- **컨테이너**: 쿠버네티스

### 1.4 CI/CD

- **지속적인 통합** / **지속적인 배포**

### 1.5 MSA - Micro Service Architecture

- **ERP (생산, 물류, 인사, 회계)**:

  - 예전에는 하나의 프로그램 형태로 제공
  - 4개의 메뉴가 있는 프로그램, 서버가 하나
  - 4개의 메뉴에 해당되는 함수가 서로 호출되면서 비즈니스 처리

  - **현대적 접근**: 4개의 메뉴가 4개의 백엔드로 구축, 서버가 4개의 형태
  - 비즈니스 처리를 위해 4개의 서버가 서로 통신하는 형태, JSON 통신 (문자열)

  - **프로세스(컨테이너)** 간의 JSON 통신 가능
  - 컨테이너를 이해하기 위해 Docker 필요
  - 다수의 컨테이너가 생성되어 복잡해짐으로 관리 프로그램 필요 => 쿠버네티스 (설치 프로그램 형태)
  - 쿠버네티스를 클라우드로 옮겨서 사용 가능
  - AWS EKS (Elastic Kubernetes Service)

### 1.6 기타

- 일반적인 웹 개발 과정: FE + BE (4.5개월) + 클라우드: 5개월
- 프로젝트: 1개월

## 2. HTML

### 2.1 HTML

- **HTML**: 웹 문서를 만드는 언어
- **HyperText Markup Language**: 링크 표시 언어

## 3. 시맨틱 태그

### 3.1 웹 문서 구조

- **헤더, 사이드 바, 푸터 영역**을 만듬

### 3.2 태그

- `header`
- `nav`
- `main`
- `section`
- `footer`
- `article`
- `aside`
- `div` 등

## 4. Form 태그

### 4.1 Form 태그

- **Back End**와 연동되어 서버와 통신을 하게 됨 (예: 로그인 페이지)

### 4.2 속성1

- **method**:
  - **get**: 전송 데이터량의 제한 (256 ~ 4096 byte), 보안에 취약, 웹 브라우저의 URL 입력부분에 데이터가 노출됨
  - **post**: 입력한 내용의 길이에 제한이 없음, 사용자가 입력한 데이터가 노출되지 않음
- **name**: 자바스크립트로 폼을 제어할 경우에 사용되는 폼의 이름 지정
- **action**: 입력된 데이터를 전송받아서 처리해줄 서버의 프로그램 지정 (전송되는 곳은 Back End)
- **target**: 현재 윈도우가 아닌 다른 위치에서 열도록 설정

### 4.3 속성2

- **autocomplete**: 입력 항목에서 입력한 데이터가 자동 완성을 해주는 기능, 기본값은 `on`

### 4.4 항목 구성 태그

- **fieldset**: 하나의 폼(form) 안에서 여러 구역을 나누어 표시하는 경우 사용
- **legend**: fieldset 태그로 구분한 영역에 제목을 붙이는 경우 사용

### 4.5 Input 태그 (사용자 입력을 위한 태그)

- **type 속성**:

  - `text`: 한 줄짜리 텍스트 입력할 수 있는 텍스트 박스
  - `password`: 비밀번호를 입력할 수 있는 필드
  - `email`: 이메일 주소를 입력할 수 있는 필드
  - `tel`: 전화번호를 입력할 수 있는 필드
  - `checkbox`: 2개 이상 선택할 수 있는 체크박스 필드
  - `radio`: 주어진 여러 항목 중 한 개만 선택할 수 있는 라디오 버튼
  - `reset`: 입력된 내용 초기화
  - `button`: 일반적인 버튼
  - `file`: 파일을 첨부할 수 있는 버튼
  - `hidden`: 사용자에게 보이지 않지만 서버로 넘겨주는 값이 있는 필드

- **중요 속성**:

  - **value**: 선택한 체크박스나 라디오 버튼을 서버에게 알려 줄 때 넘겨줄 값을 지정. 이 값은 영문이거나 숫자이어야 하며, 필수임.
  - **checked**: 기본으로 선택해 놓고 싶은 항목에 대해서 지정

- **radio 속성**:
  - 여러 개의 라디오 버튼에서 하나의 버튼만 선택할 수 있게 하려면 모든 라디오 버튼의 `name` 값을 똑같이 지정

### 4.6 Select 태그

- **Drop Down List**:
  - **속성**:
    - `value`: 해당 항목을 선택할 때 서버로 전달할 값을 지정 (Back End와 연동)
    - `selected`: 기본적으로 선택해서 보여줄 항목을 지정

### 4.7 Button 태그

- **type 속성**:
  - `submit`: form tag의 입력된 데이터를 서버로 전송 (Back End와 연동), `<input type="submit">`와 같이 사용
  - `reset`: 폼에 입력된 데이터를 초기화, `<input type="reset">`와 같이 사용
  - `button`: 버튼 형태만 만들 뿐 자체 기능은 없음. 기능을 구현하려면 JavaScript로 구현, `<input type="button">`와 같이 사용
  - `button`의 click event 발생을 모니터링 해서 동작 및 기능을 구현 (onClick과 같은 event 활용, JavaScript)
