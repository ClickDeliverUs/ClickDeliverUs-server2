# Click DeliverUs 서버사이드 클라이언트

## 구현할 내용

- WebSocket에서 생성된 채팅방에 접근하는 API 경로 또는 함수를 만들어야함

> **11.29 UPDATE**
> 결제에서 배달리스트로 자동으로 넘어가게 하는 부분은 `eventEmitter2`로 처리하고 리스너를 `delivery` 모듈에서 리스너를 정의하여 처리하려고 작업중.<br>
> 그러나 위의 4 파라미터를 어떻게 처리할지 막혀서 고민이 좀더 필요함.

---

> **11.30 12:30 UPDATE**
> delivery모듈의 로직은 얼추 완성. createDelivery 메서드 로직도 맞춰서 리팩토링.<br>
> deliveryService 버그잡아야함.<br>
> orderEntity도 파라미터 맞춰서 수정필요.<br>
> 또한 추가로 작업한 파라미터에서 원래 있던거랑 중복되는거 있어서 이거도 맞춰서 노션에 반영함.<br>

---

> **12.1 11:02 UPDATE**
> delivery, payment는 완성,<br>Auth쪽에서 원인 불명의 오류 발생. 확인중
