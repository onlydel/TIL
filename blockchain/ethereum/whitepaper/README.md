---
title: 이더리움 백서 정리 및 요약
tags: ["이더리움", "블록체인"]
---
# 이더리움 백서 정리 및 요약

## 비트코인과 기존 개념들에 대한 소개

### 역사

생략.

### 상태변환시스템으로서의 비트코인

> 기술적인 관점에서 보았을 때, 비트코인과 같은 암호화 화폐의 장부는 하나의 상태변환시스템(state transition system)으로 생각해볼 수 있다.

> ... 이러한 상태변환을 비트코인 장부에서는 다음과 같이 정의할 수 있다. APPLY(S,TX) -> S' or ERROR

```
APPLY({ Alice: 50만원, Bob: 50만원}, "엘리스가 밥에게 20만원을 보내") = { Alice: 30만원, Bob: 70만원}

APPLY({ Alice: 40만원, Bob: 30만원}, "엘리스가 밥에게 70만원을 보내") = ERROR
```

> 비트 코인에서 "상태(state)"는 생성되었지만 아직 사용되지 않은 모든 코인들의 집합(기술적표현 으로는 '소비되지 않은 트랜잭션 출력', UTXO)이다

UTXO는 간단히 말하면, Alice가 John으로 부터 100만원짜리 '수표'를 입금 받았고, 아직 이 100만원짜리 '수표'를 사용하지 않고 있다면 이 '수표'를 UTXO라고 말함.

현실세계에서의 은행 시스템이라면 John이 Alice에게 100만원을 보내기 위해서는 단순히 John의 계좌에서 100만원이라는 잔액을 산술적으로 빼고, Alice의 계좌의 잔액에 100만원을 산술적으로 더하기만 하면 됨.

하지만, 비트 코인은 다소 특이한 방법을 사용함. 거래는 수표 거래와 비슷한 방식임. 또한 UTXO가 수표 개념과 비슷하다고 보면됨.

<br>
UTXO를 설명해보자면 다음과 같다.

Alice는 20만원짜리 수표, 4만원짜리 수표, 30만원짜 수표를 가지고 있다고 가정해보자. 그리고 John에게 23만원을 보낼려고 한다. 이때 비트 코인의 규칙에 의한 거래는 다음과 같은 방식으로 이루어진다. 먼저 총합이 23만원이상의 수표들이 선택된다. 그러면 20만원 수표와 4만원인 수표가 선택되고, 이 수표들은 거래(TX,  즉 트랜잭션)의 입력 값으로 들어간다. 그리고 두개의 출력값이 생성된다. 첫번째 출력값은 John에게 보내질 23만원짜리 새로운 수표이다. 두번째 출력 값은 잔돈이며, 1만원 짜리 새로운 수표이다.거래가 완료되면, John의 지갑에는 19만원 짜리 수표가 생기게 되며 Alice의 지갑에는 1만원짜리 수표, 4만원짜리 수표, 30만원짜리 수표가 남게 된다.

### (생략)채굴

.

### (생략)머클트리

.

### (생략)블록체인 기술을 이용한 다른 응용 사례

.

### 스크립팅

비트코인의 한계 및 이더리움을 제안하는 챕터.

- 튜링 불완전성: 비트코인으로 모든 경우의 프로그래밍을 할수없다. 특히 반복문 명령 불가능함.

- 가치 무지하다: UTXO 스크립트만으로는 인출 액수를 세밀하게 통제할 방법이 없다

- 다양한 상태를 표현할 수 없다: UTXO가 표현할 수 있는 상태는 사용되었거나 안 되거나 둘 뿐이다.

- 블록체인을 해독할 방법이 없다.

> 정리하자면, 발전된 어플리케이션을 만드는 데 3가지 접근법이 있다. 첫번째는 독립적인 블록체인을 만드는 것이고 두번째는 비트코인에 이미 내재된 스크립트를 이용하는 것이며, 세번째는 비트코인 상에서 작동되는 메타-규약을 건설하는 것이다. 독립적인 블록체인을 쓰면 무한히 자유로운 프로그램을 짤 수 있지만 개발 기간, 초기 셋업 작업, 보안 등의 비용을 치뤄야 한다. 비트코인에 내재된 스크립트를 이용하면 실행이 간단하고 표준화된다는 장점이 있지만, **이용범위가 제한적이다.** 메타규약을 쓰는 것은 간단하긴 하지만, **확장성의 결함을 감수해야 한다.**

> 이더리움을 통해 우리는 개발하기도 쉽고 더 강력한 라이트 클라이언트 기능을 가지는 동시에 경제적인 개발 환경과 블록체인 보안을 공유하는 어플리케이션을 만들 수 있는, **대안 프레임워크(alternative framework)** 를 건설하려고 한다.

## 이더리움

> 이더리움의 목적은 분산 어플리케이션 제작을 위한 대체 프로토콜을 만드는 것이다

> 특정한 조건들을 만족했을 때만 그 값을 얻을 수 있게 하는 일종의 암호 상자인 스마트 컨트랙트 또한 이 플랫폼 위에 만들 수 있다.

> 이것은 비트코인의 스크립팅(scripting)이 제공하는 것보다 훨씬 강력한 기능들이 제공되기 때문에 가능한 것으로, 튜링-완전(Turing-completeness), 가치 인지능력(value-awareness), 블록체인 인지능력(blockchain-awareness), 상태(state)개념 등이 포함된다.

### 이더리움 어카운트

> 이더리움에서, 상태(state)는 어카운트(account)라고 하는 오브젝트(object)들로 구성되어 있다.

이더리움 어카운트는 다음 네 개의 필드를 가지고 있다.

- 논스(nonce): 각 트랜잭션이 오직 한번만 처리되게 하는 일종의 카운터
- 어카운트의 현재 이더(ether) 잔고
- 어카운트의 계약 코드 (존재한다면)
- 어카운트의 저장 공간 (초기설정(default) 상에서는 비어있음)

### 메시지와 트랜잭션

> 이더리움에서 사용되는 트랜잭션(transaction)이란 용어는 외부 소유 어카운트가 보낼 메시지를 가지고 있는 서명된 데이터 패키지를 말한다. 

### (생략)메시지

.

### (생략)이더리움 상태 변환 함수

.

### 코드 실행

> **이더리움 컨트랙트를 구성하는 코드는 “이더리움 버추얼 머신 코드” 또는 “EVM 코드”로 불리는 로우-레벨, 스택 기반의 바이트코드 언어로 작성된다.** 이 코드는 연속된 바이트로 구성되어 있고, 각각의 바이트는 연산(operation)을 나타낸다. 보통, 코드 실행은 0부터 시작하는 현재 프로그램 카운터를 하나씩 증가시키면서 반복적으로 연산을 수행하도록 구성된 무한 루프이고, 코드의 마지막에 도달하거나 오류, STOP, RETURN 명령을 만나면 실행을 멈추게 된다. 연산을 수행하기 위해서는 데이터를 저장하는 세가지 타입의 공간에 접근할 수 있어야 한다.

### (생략)블록체인과 채굴

.

## 애플리케이션

> 기본적으로, 이더리움을 이용하여 총 세 가지 카테고리의 어플리케이션을 제작할 수 있다. **첫번째 카테고리는 돈과 직접적으로 연관된 컨트랙트를 계약참여자로 하여금 보다 강력하게 설정-관리하게끔 하는 금융 어플리케이션이다.** 이의 예는 하위화폐(=유로/달러 등의 상위화폐와 환율이 연동된 화폐를 지칭), 파생상품, 헷지컨트랙트, 예금용 전자지갑, 유언장, 그리고 최종적으로는 전면적인 고용계약 수준의 것들까지 포함한다. **두번째 카테고리는 준(準)금융 어플리케이션이다.** 금전이 관여되어 있지만, 상당부분 비(非)화폐적인 면이 존재하는 계약을 위한 어플리케이션이 이에 해당된다. 이의 좋은 예로는 어려운 연산 문제를 푸는 자에게 자동적으로 포상금이 지급되는 계약이다. 마지막으로, **온라인 투표와 분권형(分權形) 거버넌스(Governance)와 같이 금융과 관련성이 아예 없는 어플리케이션이 있다.**

- 금융 애플리케이션

- 준 금융 애플리케이션

- 온라인 투표 , 분권형 거버넌스와 같이 금융과 관련성이 없는 애플리케이션

### 토큰 시스템

- 모든 화폐 혹은 토큰시스템은 근본은 결국 한 가지 오퍼레이션만을 수행하는 데이터베이스이다.

- A라는 주체로부터 X 단위의 화폐/토큰을 차감하고, 차감한 X 단위의 화폐/토큰을 B에게 지급한다. 단, 거래 전, A는 최소 X단위를 보유하고 있었음

- A가 이 거래를 승인함

```
def send(to, value):
    if self.storage[msg.sender] >= value:
        self.storage[msg.sender] = self.storage[msg.sender] - value
        self.storage[to] = self.storage[to] + value
```
### (생략)파생상품과 가치안정통화

.

### (생략)신원조회 / 평판 시스템(Identity and Reputation Systems)

.

### (생략) 분산형 파일 저장소(Decentralized File Storage)

.

### (생략) 탈중앙화된 자율조직(Decentralized Autonomous Organizations)

.

### (생략) 추가적인 어플리케이션들(Further Applications)

.

## (생략)그 밖의 이슈들

.

## (생략)결론

.


## References

[이더리움 백서 한글판](https://github.com/ethereum/wiki/wiki/%5BKorean%5D-White-Paper)




