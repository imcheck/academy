# Template Components
기본 컴포넌트들을 가지고 템플릿을 만듬.
스타일은 커스터마이징이 가능하게 기본 기능 단위로 쪼개어 다룸.

## How to use
```javascript
import { 
  Input,
  _Input,
  File,
  Table } from '@components';
```
## Input
- 기본적인 input 컴포넌트에 스타일링 한 컴포넌트.
```javascript
// 기본
<Input type="text" />
// 밑줄만 있는 Input
<_Input type="number" />
// InputForm
<InputForm name="" />
// InputForm인데 readonly 전용
<InputForm name="" disabled>Hello World</InputForm>
// 검색용 Input ( 검색 버튼 클릭시 onSearchClick 함수 실행, 나머진 Input 과 같음 )
<SearchForm onSearchClick={} .../>
// options, optionIndex, onOptionChange 만 select 관련, 나머진 Input에 대응됨 )
<SearchFilter options={[]} value={} onOptionChange={} ... /> 
```

## File
- Input 컴포넌트에서도 다룰 수 있으나 사용하기 쉽고 스타일링한 File 컴포넌트
- onChange 핸들러에 해당 file 객체를 넘김
- multi select는 아직 미구현 (`Files` 로 다시 만들 생각이 있음)
```javascript
<File onChange={(file) => console.log(file.name)}>
```

## Table
- React Table
```javascript
<Table
  data={[{
    name: "Smith",
    age: 41,
  }, {
    name: "Matthew",
    age: 27,
  }, {
    name: "Alex",
    age: 34,
  }}
  columns={[
    {
      header: <input type="checkbox" />,
      component: ({rowData, row, col}) => <span>({row}, {col})</span>
    },
    {
      header: "header1",
      component: ({rowData, row, col}) => <span>({row}, {col})</span>
    },
  ]}
/>
```
- Table Props
  - data (`required`)
    - 테이블에서 보여주려고 하는 데이터 필드
    - 내부적으로 각 Row에 data.map을 해서 `rowData`를 매핑시켜주는 방식
    - array
  - columns (`required`)
    - 테이블의 각 컬럼을 어떻게 표현할지 정의 하는 필드
    - object array
      - header: `component` / `string`
      - component: `function ({rowData, row, col})`
  - headerStyle
    - 테이블 Header의 스타일을 정의하는 곳
    - object (`default`)
      - height: `50px`
      - lineHeight: `50px`
      - textAlign: `center`
  - rowStyle
    - 테이블 Row의 스타일을 정의하는 곳
    - object (`default`)
      - height: `50px`
      - lineHeight: `50px`
      - textAlign: `center`
  - paginationStyle
    - 테이블 Pagination의 타입을 정의하는 곳
    - object
      - `type`: (option) Pagination을 나타내는 방식이 여러가지가 존재
        - `none`: (default) Pagination을 나타내지 않음
        - `more`: More 버튼을 끝에 나타냄
        - `pagination`: 전형적인 페이지네이션 기능
      - `onMoreClick`: (`option`) 타입이 `more` 일 때 More 버튼의 Click Handler  
        `true`, `false` 를 반드시 return 해줘야하고 `true`를 return 해야 다음 `pageSize` 만큼 렌더링이 된다.
        - `pagination`: 전형적인 Pagination
      - `position`: (`option`) Pagination 테이블의 상단, 하단 또는 상하단에 위치시키는 설정
        - `top`: Pagination을 상단에 위치
        - `bottom`: (default) Pagination을 하단에 위치
        - `both`: Pagination 을 상하단에 위치
      - `pageSizes`: (option) 페이지의 크기를 배열로 정의할 수 있는 속성
        - `array`: (default) [10, 20, 50, 100]

- Notification
  - Method
    - `open`
    ```js
    Notification.open({
      title: "Hello World!",
      message: "Message for you",
      duration: 3
    })
    ```
    - `title`
    - `message`
    - `duration` (option)
    
- Modal
  - Handler
    - `onBackgroundClick`: 백그라운드 클릭 했을 때 실행되는 함수
  - Member
    - `visible`
    - `width`
    - `height`
    - `title`
    - `footer`: (array) 모달의 하단 오른쪽에 배치되는 컴포넌트들을 정의할 수 있음