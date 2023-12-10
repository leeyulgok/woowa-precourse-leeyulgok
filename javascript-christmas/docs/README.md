# 크리스마스 프로모션

## 실행 예시
```md
안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
3
주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1
12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!
 
<주문 메뉴>
티본스테이크 1개
바비큐립 1개
초코케이크 2개
제로콜라 1개
 
<할인 전 총주문 금액>
142,000원
 
<증정 메뉴>
샴페인 1개
 
<혜택 내역>
크리스마스 디데이 할인: -1,200원
평일 할인: -4,046원
특별 할인: -1,000원
증정 이벤트: -25,000원
 
<총혜택 금액>
-31,246원
 
<할인 후 예상 결제 금액>
135,754원
 
<12월 이벤트 배지>
산타
```

## 구현할 기능목록
1. 인터페이스
    (1) 입력
        - 날짜 : number
        - 메뉴 : str-number
    (2) 출력
        - 주문메뉴
        - 할인 전 총 주문 금액
        - 증정 메뉴
        - 해택 내역
        - 총혜택 금액
        - 할인 후 예상 결제 금액
        - 12월 이벤트 배지

2. 객체
    (1) 주문한 메뉴
        - 주문 메뉴: 메뉴-개수 Object
        - 총 가격: number
    (2) 할인 이벤트
        - 날짜: Date를 포맷한 string
        - 증정 메뉴 : string || Object(메뉴-개수)
        - 헤택 내역
            - 크리스마스 디데이 할인 : number
            - 평일/주말 할인 : number
            - 특별 할인 : number
            - 증정 이벤트 : number
        - 배지 : string

3. 구현할 기능
    - 할인 이벤트 객체에 다 포함
    - 메뉴판
        - 메뉴
        - 가격
        - 카테고리

4. 예외처리
    - 날짜
        - 숫자만 입력 가능
        - 1~31 사이의 숫자만만 가능
    - 메뉴
        - ','로 메뉴간 구분
        - '-'로 메뉴와 개수 구분
        - 메뉴판에 없으면 에러
        - 개수는 1 이상의 숫자만 입력가능
        - 중복 메뉴 입력 안됨.

    - 함수
        (1) 메뉴
            - ',' 메뉴간 구분, '-'로 메뉴와 개수 구분
                - 메뉴판에 없으면 에러
                - 개수가 옳바르지 않으면 에러
                - 중복되는 메뉴가 있으면 에러
                - 음료만 있으면 에러
                - 총 수량이 20을 넘으면 에러
            
        (2) 일반(날짜)
            - 숫자만 입력 가능
            - 1~31 사이의 숫자인지 파악
    
5. 추가 고려사항
    - 크리스마스 디데이 할인
        - 1일부터 25일까지. 26일부터는 적용안됨
        - 1000원으로 시작하여 100원씩 증가
    - 평일 할인(일~목)
        - 디저트 메뉴, 1개당 2023원 할인
    - 주말 할인(금~토)
        - 메인 메뉴, 1개당 2023원 할인
    - 특별 할인(매주 일요일 + 크리스마스)
        - 1000원 할인
    - 증정 이벤트
        - 할인 전 총주문 금액이 12만 원 이상일 때, 샴페인 증정
        - 증정 이벤트에 해당하지 않는 경우, 증정 메뉴 "없음"으로 보여줌
    - 이벤트 배지
        - 총 혜택 금액에 따른 배지 부여.
        - 5천 원 이상: 별
        - 1만 원 이상: 트리
        - 2만 원 이상: 산타
        - 이벤트 배지가 부여되지 않는 경우, "없음"으로 보여줌

    - 크리스마스 디데이 제외하고 다른 이벤트는 31일까지
    - 총주문 금액 10,000원 이상부터 이벤트가 적용
    - 음료만 주문 시, 주문할 수 없음
    - 메뉴는 한 번에 최대 20개까지만 주문가능
    - 해택 내역은 고객에게 적용된 이벤트 내역만 보여줌
        - 적용된 이벤트가 하나도 없다면 혜택 내역 "없음"으로 보여줌

6. 리팩토링