
var callAjax = function(){
    $.ajax({
        url:"https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=68f4245b2e8c4c6d81828596e6ef2a79",
        method:"GET",
        success: function(data){
        console.log(data);
        $('.img1').attr('src',data.articles[0].urlToImage);
        $('.title1').text(data.articles[0].title);
        $('.desc1').text(data.articles[0].description);
        $('.link1').attr('href',data.articles[0].url );

        $('.img2').attr('src',data.articles[1].urlToImage);
        $('.title2').text(data.articles[1].title);
        $('.desc2').text(data.articles[1].description);
        $('.link2').attr('href',data.articles[1].url );

        $('.img3').attr('src',data.articles[2].urlToImage);
        $('.title3').text(data.articles[2].title);
        $('.desc3').text(data.articles[2].description);
        $('.link3').attr('href',data.articles[2].url );

        $('.img4').attr('src',data.articles[3].urlToImage);
        $('.title4').text(data.articles[3].title);
        $('.desc4').text(data.articles[3].description);
        $('.link4').attr('href',data.articles[3].url );

        $('.img5').attr('src',data.articles[4].urlToImage);
        $('.title5').text(data.articles[4].title);
        $('.desc5').text(data.articles[4].description);
        $('.link5').attr('href',data.articles[4].url );

        $('.img6').attr('src',data.articles[5].urlToImage);
        $('.title6').text(data.articles[5].title);
        $('.desc6').text(data.articles[5].description);
        $('.link6').attr('href',data.articles[5].url );

     }
  })
}
callAjax();


$('.bttn_sum').on('click', function(){
  var total_income = Number($('input')[0].value) + Number($('input')[1].value) + Number($('input')[2].value)+ Number($('input')[3].value)+ Number($('input')[4].value)+ Number($('input')[5].value)+ Number($('input')[6].value)+ Number($('input')[7].value)+Number($('input')[8].value);
  var total_expenses = Number($('input')[9].value) + Number($('input')[10].value) + Number($('input')[11].value)+ Number($('input')[12].value)+ Number($('input')[13].value)+ Number($('input')[14].value)+ Number($('input')[15].value)+ Number($('input')[16].value)+Number($('input')[17].value);
  var savings = total_income - total_expenses ;
  var ten_perc = savings*10/100;
  console.log(ten_perc);
  console.log(total_income);
  console.log(total_expenses);
  console.log(savings);
  $('#income_form').text("");
  $('#expenses_form').text("");
  $('.bttn_sum').remove();
  $('.income').text("Total-Income: $"+total_income);
  $('.expenses').text("Total-Expenses: $"+total_expenses)
  $('.saving').text("Savings: $"+savings);
  if(savings <= 0){
    $('#big').text("Alert!!");
    $('#message').text("Looks like your expenses exceed your annual income.Time to consider revising your budget.")
  }
  else if(savings < ten_perc){
   $('#big').text("Oops!!");
    $('#message').text("Looks like your savings are less than the 10% of your income. Reducing some of the expenses could increase this amount.")
  }
  else if(savings > ten_perc){
    $('#big').text("Congratulations!");
    $('#message').text("Your numbers show income in excess of expenses. This surplus equals: $"+savings+" per month.")
  }
})







