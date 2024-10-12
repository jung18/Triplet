<img src="https://github.com/user-attachments/assets/bafa1bf2-4199-4a07-b93b-53538f8796e0" alt="image" width="400"/>

---

## 목차
1. 서비스 소개
2. 기획 배경
3. 기술 스택
4. 기능 소개
5. 프로젝트 산출물

## 서비스 소개
### 개요 
- **설명**: 여행 경비 관리 및 공유 서비스

- **타겟층**: 여행 경비를 체계적으로 관리하고 싶은 사람들 및 경비 설정에 어려움을 느끼는 사람들

- **진행기간**: 2024.08.19 ~ 2024.10.11 (8주)

## 기획 배경

1. **여행 준비 시 예상 비용 파악의 어려움**  
   많은 여행자들이 예상 비용을 파악하는 데 많은 시간을 소모합니다. 인터넷에 다양한 정보가 존재하지만, 최신 정보와 신뢰성 있는 자료를 찾기 어려운 경우가 많습니다.

2. **여행 중 실시간 예산 관리의 어려움**  
   여행 중에는 실제로 예산에 맞게 돈을 사용하고 있는지 실시간으로 파악하기가 힘들고, 자주 예산을 초과하는 문제가 발생합니다.

3. **여행 후 가계부 작성의 불편함**  
   여행이 끝난 후에는 어디에 돈을 썼는지 기억하지 못하거나, 가계부를 작성하는 것이 귀찮고 불편하여 여행 기록 작성에 어려움을 겪는 경우가 많습니다.

- **목표**
    - **카테고리별 예산 설정 및 환율 자동 계산**  
    사용자가 여행의 예상 비용을 쉽고 빠르게 설정할 수 있도록 돕고, 환율 변동에 대응해 정확한 예산을 유지할 수 있도록 지원합니다.

    - **결제 내역 카테고리별 자동 분류 및 저장**  
    여행 중 어디에 돈을 썼는지 실시간으로 파악할 수 있게 하여, 지출 관리에 대한 부담을 줄이고 예산 초과를 방지합니다.

    - **다른 사용자들의 예산 정보를 통한 예산 설정 도움**  
    유사한 여행을 다녀온 다른 사용자들의 데이터를 참고하여, 보다 신뢰성 있는 예산 설정이 가능하도록 지원합니다. 이를 통해 시간 소모를 줄이고, 보다 정확한 예산을 계획할 수 있습니다.

    - **여행 기록과 결제 내역 저장 및 공유**  
    여행이 끝난 후에도 기록과 결제 내역을 쉽게 확인하고 공유할 수 있도록 하여, 여행 후 가계부 작성이나 기록 작성에 불편함을 덜어줍니다.

## 기술 스택
![erd2](https://github.com/user-attachments/assets/addf62fd-72fa-4d7f-a2ed-66ae105b7529)

### 아키텍처 설계도
![erd1](https://github.com/user-attachments/assets/495b13cf-f66f-4d89-b9af-e099bf17e56b)

## 화면
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/11335f24-9506-4236-a8b5-26337989f10c" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/06426a0e-d391-46fa-806a-8bc2e715a3f5" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/2640e911-faeb-4973-87f0-3a05f52a4250" width="400"></td>
    <td></td>
  </tr>
  <tr>
    <td>회원가입</td>
    <td>간편 비밀번호 설정</td>
    <td>로그인</td>
    <td></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/d44e82e1-1a2a-45ba-b941-d28b516a845c" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/736ab78d-28a6-480e-ab58-7aa187f43b9c" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/ff6400e1-72e7-4eed-a34f-3f70b4df7ed3" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/71b2b209-af73-4e33-b149-d2d74c1d315b" width="400"></td>
  </tr>
  <tr>
    <td>메인 페이지(여행 없음)</td>
    <td>메인 페이지(여행 있음)</td>
    <td>계좌 페이지</td>
    <td>외화지갑 페이지</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/3a948e97-d1a3-43ca-8ac2-a460fa15a55b" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/2d1ce127-6734-4d6f-a0b5-4dbe11411b2d" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/8e70e695-35b5-42c2-887a-5c5ed7ddc8b7" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/107f90e2-d8ff-45a3-95f6-653f59d28c2d" width="400"></td>
  </tr>
  <tr>
    <td>원화 계좌 상세 페이지</td>
    <td>외화 지갑 상세 페이지</td>
    <td>실시간 환율</td>
    <td>환전 페이지(원화 -> 외화)</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/4991fac9-5f83-4ff2-81e6-837300ee4d9e" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/b5b48737-c7f7-47d3-9647-d05b37446669" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/7fa19f4a-39fd-4372-9a25-906d199d739f" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/ebd9885f-6a6f-4def-bfe4-6ef6b619951a" width="400"></td>
  </tr>
  <tr>
    <td>환전 페이지(외화 -> 원화)</td>
    <td>계좌 송금</td>
    <td>QR코드 스캔</td>
    <td>QR 간편결제 페이지</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/9c8b03a0-d10c-437e-a5f2-a2c164d2cb09" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/08b31d3d-e34b-42ff-90f1-e69b4d0db73e" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/94d9fbb3-c45d-43e8-962d-10a8d696fe84" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/f6439657-7192-43c7-8951-6a15f936e4ac" width="400"></td>
  </tr>
  <tr>
    <td>여행 피드</td>
    <td>피드 검색</td>
    <td>내 여행 목록</td>
    <td>여행 상세 페이지</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/8788cfaf-e775-4e82-9250-ea863a9b5163" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/b71ef07d-b480-423b-9a46-45fdbc49eb9e" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/10f22bf0-e317-4c75-b7e2-4aa7b8ab7bcb" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/a523184a-6fee-4803-9671-667cf9dc5fcf" width="400"></td>
  </tr>
  <tr>
    <td>여행 상세 페이지</td>
    <td>여행 지갑</td>
    <td>공유된 여행 거래내역</td>
    <td>여행 초대코드 입력</td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/1c7bc944-77b4-4a48-aa3a-541ed32a6a46" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/31ee508d-0f84-4df3-b981-014ff1263066" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/bf3c6237-d5d5-4ad6-870b-44e95b8822bd" width="400"></td>
    <td><img src="https://github.com/user-attachments/assets/14f07af4-8e04-4e20-9cb0-2e7f1eaf4634" width="400"></td>
  </tr>
  <tr>
    <td>여행지갑 충전</td>
    <td>여행 만들기</td>
    <td>여행 만들기</td>
    <td>여행 만들기</td>
  </tr>
</table>


## 프로젝트 산출물
### 화면정의서
![figma'](https://github.com/user-attachments/assets/f4e89074-2b9a-49bd-afe9-9cd17bf252c9)

### API 명세서
<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/443e4ebd-8601-44e7-89b7-7ce117930de4" alt="image1"/></td>
    <td><img src="https://github.com/user-attachments/assets/d928f5c7-0e15-44dd-9b4d-bcc5956db8fe" alt="image5"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/8092fd07-cb57-4e3c-804d-bfbe821ccb3c" alt="image2"/></td>
    <td><img src="https://github.com/user-attachments/assets/9d2e7aa6-d909-4456-8cd5-b966db83f3a5" alt="image6"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/f414ba33-a73c-47bf-8e4e-395e64d8ec47" alt="image3"/></td>
    <td><img src="https://github.com/user-attachments/assets/143ca6e8-28d8-4f9a-a806-cd38e3df5563" alt="image7"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/30242433-eb62-46a6-87e5-4c08a0e742f0" alt="image4"/></td>
    <td><img src="https://github.com/user-attachments/assets/e54d1763-c64b-481d-aff6-806dcd0b1d92" alt="image8"/></td>
  </tr>
</table>

### ERD
![TravelBank](https://github.com/user-attachments/assets/dd56c790-cd83-4c02-b9e2-f3896ee12531)
