# 숫자 야구
- 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 맞추는 게임.

## 실행결과 예시
```jsx
숫자 야구 게임을 시작합니다.
숫자를 입력해주세요 : 123
1볼 1스트라이크
숫자를 입력해주세요 : 145
1볼
숫자를 입력해주세요 : 671
2볼
숫자를 입력해주세요 : 216
1스트라이크
숫자를 입력해주세요 : 713
3스트라이크
3개의 숫자를 모두 맞히셨습니다! 게임 종료
게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.
1
숫자를 입력해주세요 : 123
1볼
...
```

## 구현할 기능
1. 인터페이스
    (1) 입력
        - 숫자 3자리
        - 재시작여부
    (2) 출력
        - 스트라이크&볼 결과
        - 최종 결과

2. 구현할 기능
    (1) 컴퓨터의 3자리 숫자 만들기
    (2) 유저와 컴퓨터 숫자 비교

3. 구현순서
    (1) 사용자에게 입력받기
        - 비동기로 입력값 받기
        - 받은 값 유효성 검사하기
        - 재시작 여부에 따른 반복문
    (2) 기능 구현하기
        - 컴퓨터 3자리 숫자 만들기
        - 유저와 컴퓨터 숫자 비교하기
    (3) 결과 출력하기
        - 스트라이크&볼 결과
        - 최종 결과

4. 예외처리
    (1) 숫자 3자리
        - 0 이상의 숫자만 받을 수 있음(0 또는 음수 안됨)
        - 중복되지 않은 1~9 사이의 3자리 숫자
    (2) 재시작 여부
        - 숫자만 받을 수 있음
        - 1이면 재시작 2이면 종료

5. 리팩토링
