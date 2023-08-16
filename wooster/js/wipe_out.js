'use strict';

let qnaScroll = 0;

// wipe
$('.wipe').click(function(){
    if($(this).hasClass('wipe_out')===false){
      console.log($(this).hasClass('wipe_out'));
      qnaScroll = $(document).scrollTop();
      $(this).addClass('wipe_out');
      $('.answer').addClass('wipe_out');
      $('.QnA').addClass('wipe_out');
      $('.wipe_out').delay(690).animate({
              width: '100%',
              height: '100%',
              opacity: '1',
          },1200
      );
      $('.QnA .exit').css('display','inline-block');
    }
});
//exit
$('.exit').click(function(){
    console.log('exit');
    $('.wipe').removeClass('wipe_out');
    $('.answer').removeClass('wipe_out');
    $('.answer').css('opacity',0);
    $('.QnA .exit').css('display','none');
    $('.QnA').removeClass('wipe_out');
    $('.QnA').animate({
            width: 'auto',
            height: 'auto',
        },100
    );
    let q_id = $(this).parent().attr('id');
    if(q_id!=null){
      console.log(q_id);
      // document.getElementById(`${q_id}`).scrollIntoView();
      // $(document).scrollTop(qnaScroll);
    }
});

// function qnaScroll(){
//   let q_id = $(this).parent().attr('id');
//   if(q_id!=null){
//     console.log(q_id);
//     document.getElementById(`${q_id}`).scrollIntoView();
//   }
// }

//box fixed size
function handleConsoleLog(log) {
    if (log === 'exit') {
      const questionElement = document.querySelectorAll('.question');
      questionElement.forEach((questionElement) => {
        questionElement.style.height = '170px';
      })
    }else if(log === false) {
        const questionElement = document.querySelectorAll('.question');
        questionElement.forEach((questionElement) => {
            questionElement.style.height = '100%';
        })
    }
  }

  const originalConsoleLog = console.log;

  console.log = function() {
    originalConsoleLog.apply(console, arguments);
    handleConsoleLog.apply(this, arguments);
  };
//even,odd color
const questionElements = document.querySelectorAll('.QnA .question');

questionElements.forEach((questionElement, index) => {
  if (index % 2 === 0) {
    questionElement.classList.add('even');
  } else {
    questionElement.classList.add('odd');
  }
});