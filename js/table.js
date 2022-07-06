$(function(){

    // thead追加
    $('.btnList .addThead').click(function(){
      tableReset();
      $('table caption').after('<thead><tr><th></th><th>見出し●●</th><th>見出し××</th></tr></thead>');
      tableData() // パターン6：縦横切替
    });
  
    // thead削除
    $('.btnList .removeThead').click(function(){
      tableReset();
    });
    
    // テーブルリセット
    function tableReset(){
      $('table thead').remove();
      $('table td').each(function(){
        $(this).removeAttr('data-th');
      });
    }
    
    // デフォルトのテキストを配列に格納
    var defTextArr = new Array();
    $('table td').each(function(i){
        defTextArr[i] = $(this).text();
    });
    
    // テキスト増やす
    var count = 1;
    $('.btnList .increaseText').click(function(){
      count++;
      $('table td').each(function(e){
        $(this).text( $(this).text() + $(this).text()  );
      });
    });
  
    // テキスト減らす
    $('.btnList .cutBackText').click(function(){
      for(t=0; t<defTextArr.length; t++) {
        var txt = defTextArr[t];
        if(count >= 1) {
          $('table td').each(function(){
             $(this).text( $(this).text().replace(txt, '' ) );
          });
        }
      }
    });
    
      // パターン6：縦横切替のテーブルにdata属性を追加
      function tableData(){
          var index ='';
          var headTxt ='';
          $('.tableBlock.pattern06 table').each(function() {
              $(this).find('thead tr th').each(function() {
      
                  // theadの位置やテキストを取得
                  index = $(this).index()-1;
                  headTxt = $(this).text();
                          
                  // tbodyのセルにdata属性を追加
                  $(this).parents('table').find('tbody tr').each(function() {
                      $(this).find('td').eq(index).attr('data-th',headTxt);
                  });
              });
          });
      }
    tableData();
  
  });