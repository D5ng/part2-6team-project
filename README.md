<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=240&section=header&text=Part2-6팀%20Rolling%20Project%20&fontSize=50&fontAlignY=40" />

- 개발기간 : 24년 2월 26일 ~ 24월 3월 12일
- 개발인원 : 5명



 🛫[사이트 바로가기](https://part2-6team-project.vercel.app/)

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fpart2-6team-project.vercel.app&count_bg=%23B000FF&title_bg=%23CD9CFB&icon=airbnb.svg&icon_color=%23B300FF&title=%EB%B0%A9%EB%AC%B8%EC%9E%90+%EC%88%98&edge_flat=false)](https://hits.seeyoufarm.com)

# 목차
1. [프로젝트 소개](#-프로젝트-소개)
2. [멤버 소개](#-멤버)
3. [사용 스킬 소개](#-사용-스킬라이브러리)
4. [폴더 구조](#%EF%B8%8F-폴더-구조)
5. [브랜치 전략](#-사용-브랜치-전략)

<br/>

# 📖 프로젝트 소개

<p> Rolling 프로젝트는 추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 플랫폼을 제공하기 위한 프로젝트 입니다.  </p>

<img src='https://ifh.cc/g/FPq4fR.png' border='0'/>

<br/>


# 🧑‍🤝‍🧑 멤버
<br/>

<table>
  <tr>
    <td height="160px" align="center"><a href="https://github.com/D5ng"><img src="https://avatars.githubusercontent.com/u/121039744?v=4" width="160px"/><br/>FE_이동현</a></td> 
    <td height="160px" align="center"><a href="https://github.com/dali1999"><img src="https://avatars.githubusercontent.com/u/75316998?v=4" width="160px"/><br/>FE_황경수</a></td> 
    <td height="160px" align="center"><a href="https://github.com/juniorcoma"><img src="https://avatars.githubusercontent.com/u/143431179?v=4" width="160px"/><br/>FE_박현우</a></td> 
    <td height="160px" align="center"><a href="https://github.com/hanjinhe"><img src="https://avatars.githubusercontent.com/u/155597214?v=4" width="160px"/><br/>FE_한진희</a></td> 
    <td height="160px" align="center"><a href="https://github.com/Lv1GoM"><img src="https://avatars.githubusercontent.com/u/143579803?v=4" width="160px"/><br/>FE_장연준</a></td> 
  </tr>
</table>
<br/>


# ✨ 사용 스킬&라이브러리

</br>

### 스킬

<p align='center'>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=ffffff"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=ffffff"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=ffffff"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=ffffff"> 
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=ffffff"> </p>
<p align='center'>
  <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=ffffff"> <img src="https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=eslint&logoColor=ffffff"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=ffffff">
</p>

### 라이브러리
1. React-Quill : textEditor를 페이지에 쉽게 추가하고 입력 내용을 얻을 수 있는 기능을 제공하는 라이브러리
2. Swiper : 슬라이드를 쉽게 구현해주는 라이브러리
3. React-Emoji-Picker : 완성된 이모지창을 제공하는 라이브러리
4. React-Google-Recaptcha : 비정상적인 사용자 여부를 판단해주는 라이브러리
5. React-Helmet-Async : 


# 🗂️ 폴더 구조
<br/>


+ public폴더
   + images : 페이지에 고정적인 이미지들을 담는 폴더
   + font :  페이지에 사용되는 폰트 정보를 담는 폴더
<br/>

+ src폴더
   + components : 각 페이지에 사용된 공통된 컴포넌트를 담는 폴더
   + hooks : 각 페이지에 사용된 커스텀 훅을 담는 폴더
   + pages : 각 페이지를 담는 폴더
   + reducer : 데이터를 전역적으로 관리하기 위한 폴더
   + service :
   + styles : 전역적인 styled가 담긴 폴더
   + utils : 자주 사용되는 로직을 담는 폴더
  
  

<br/>




# 🔎 사용 브랜치 전략
<br/>

### 'Rolling Project'에서는 3개의 브랜치를 관리하는 Github Flow 브랜치 전략을 사용합니다.

### Main Branch
- 항상 Stable 한 상태인 Branch입니다.
- 모든 커밋은 언제든 배포할 수 있는 상태여야하며 언제든 Branch를 새로 만들어도 문제가 없어야 합니다. 또한 Main Branch의 모든 커밋은 빌드가 되고 테스트를 통과해야합니다.
<br/>

### Develop Branch
- 개발을 위한 코드가 담긴 Branch입니다.
- 개발이 모두 완료가 되면 Main Branch로 merge 됩니다.
<br/>

### Topic Branch
- 새로운 기능을 개발할 때에는  Topic Branch를 Develop Branch로부터 생성합니다.
- 별도로 Hotfix 브랜치를 관리하지 않으며, 버그 수정도 Topic 브랜치에서 진행합니다.
- Topic Branch의 이름은 기능을 설명하는 명확한 이름으로 네이밍 해야합니다.
  ex ) user_content_cache_topic
- Topic Branch의 커밋은 기능이 완성되지 않았더라도 팀원들간 원할한 소통을 위해 꾸준히 Push합니다.
- 새로운 기능을 개발하기 위해 Topic Branch를 생성하기전 Develop Branch에서 Pull을 해야합니다. 






