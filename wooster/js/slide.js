$(function(){
    'use strict';
    // 롤링 배너 복제본 생성
    let roller = document.querySelector('.rolling-list1');
    roller.id = 'roller1'; // 아이디 부여
    let rollerR = document.querySelector('.rolling-list2');
    rollerR.id = 'roller1R'; // 아이디 부여

    let clone = roller.cloneNode(true)
    let cloneR = rollerR.cloneNode(true)
    // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
    clone.id = 'roller2';
    document.querySelector('.wrap1').appendChild(clone); // wrap 하위 자식으로 부착
    cloneR.id = 'roller2R';
    document.querySelector('.wrap2').appendChild(cloneR); // wrap 하위 자식으로 부착

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.rolling-list1 ul').offsetWidth + 'px';
    document.querySelector('#roller1R').style.left = '0px';
    document.querySelector('#roller2R').style.left = document.querySelector('.rolling-list2 ul').offsetWidth + 'px';
    // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

    roller.classList.add('original');
    clone.classList.add('clone');
    rollerR.classList.add('original');
    cloneR.classList.add('clone');
});