# 자동차 경주
- 초간단 자동차 경주 게임을 구현한다.

## 실행 예시
```md
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

## 구현할 기능
1. 인터페이스
    (1) 입력
        - 자동차 이름
        - 시도 횟수
    (2) 출력
        - 실행 결과
        - 최종 우승자

2. 객체
    (1) 자동차 객체
        - 이름
        - 현재 위치
        - 이름 유효성

3. 구현 기능
    (1) 전진 조건 : 0~9 사이 임의의 숫자 생성 후 4 이상인 경우 전진
    (2) 우승자 : 가장 멀리 간 자동차

4. 예외처리
    (1) 자동차 이름
        - 5글자 이하의 영어 이름 (숫자, 한글, 특수문자는 안됨)
        - ','로 구분, 꼭 2명 이상
        - 중복 이름을 가지면 안됨
    (2) 시도 횟수
        - 숫자만 입력 가능
        - 0 또는 음수는 입력 불가

5. 리팩토링