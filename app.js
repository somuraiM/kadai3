$(function(){

  $('.js-fortune-start').on('click', function() {

    $(".start-button").toggleClass("open");
    $(".result").fadeToggle("slow");


    let fortuneresult = {
      money:[
        {stars:"★★★", detail:"最高の金運です！いつの間にかお金が溜まっているかも・・・？"},
        {stars:"★★", detail:"まずまず金運です！使いすぎには注意しましょう！"},
        {stars:"★", detail:"悪い傾向が見られます！財布の紐は絞めておくと吉です！"},
      ],

      work:[
        {stars:"★★★", detail:"最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？"},
        {stars:"★★", detail:"まずまず仕事運です！普段通り仕事が進むでしょう！"},
        {stars:"★", detail:"悪い傾向が見られます！自信過剰にならないように注意しましょう"},
      ],

      health:[
        {stars:"★★★", detail:"最高の健康運です！ランニングの距離を伸ばしても良いですね！"},
        {stars:"★★", detail:"まずまず健康運です！無理せず体を動かしましょう！"},
        {stars:"★", detail:"悪い傾向が見られます！ケガにご注意を・・・"},
      ]

    }


    for ( let i in fortuneresult) {

      console.log(i);

      let fortune_num = Math.floor( Math.random() * 3 );

      if(fortune_num == 0){
        result_star = fortuneresult[i][0]['stars'];
        result_detail = fortuneresult[i][0]['detail'];
      }else if(fortune_num == 1){
        result_star = fortuneresult[i][1]['stars'];
        result_detail = fortuneresult[i][1]['detail'];
      }else if(fortune_num == 2){
        result_star = fortuneresult[i][2]['stars'];
        result_detail = fortuneresult[i][2]['detail'];
      }

      const $target = $('.' + i); 
      // $('.money')などの子要素から starsクラスがあるものを探し、そこへ値を適用する
      $target.find('.stars').text(result_star);

      // $('.money')などの子要素から detailクラスがあるものを探し、そこへ値を適用する
      $target.find('.detail').text(result_detail);




      
    };


  });

     
});


