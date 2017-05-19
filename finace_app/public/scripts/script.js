//API call News
var callAjax = function(){
    $.ajax({
        url:"https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=68f4245b2e8c4c6d81828596e6ef2a79",
        method:"GET",
        success: function(data){

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

//--------------------------------------------------------
//DOM Cash Flow

$('.bttn_sum').on('click', function(){
  var total_income = Number($('input')[0].value) + Number($('input')[1].value) + Number($('input')[2].value)+ Number($('input')[3].value)+ Number($('input')[4].value)+ Number($('input')[5].value)+ Number($('input')[6].value)+ Number($('input')[7].value)+Number($('input')[8].value);
  var total_expenses = Number($('input')[9].value) + Number($('input')[10].value) + Number($('input')[11].value)+ Number($('input')[12].value)+ Number($('input')[13].value)+ Number($('input')[14].value)+ Number($('input')[15].value)+ Number($('input')[16].value)+Number($('input')[17].value);
  var savings = total_income - total_expenses ;
  var ten_perc = total_income*10/100;
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

//--------------------------------------------------------


function investment(){

var values = [$('.a')[0].value = Number(0), $('.b')[0].value = Number(4), $('.c')[0].value = Number(7), $('.d')[0].value = Number(10), $('.e')[0].value = Number(13)];

console.log(values);
$('.a').on("click",function(){
console.log(values[0]+" was checked")
$('.b').attr("disabled", true);
$('.c').attr("disabled", true);
$('.d').attr("disabled", true);
$('.e').attr("disabled", true);
});
$('.b').on("click",function(){
console.log(values[1]+" was checked")
$('.c').attr("disabled", true);
$('.d').attr("disabled", true);
$('.e').attr("disabled", true);
$('.a').attr("disabled", true);

});
$('.c').on("click",function(){
console.log(values[2]+" was checked")
$('.b').attr("disabled", true);
$('.d').attr("disabled", true);
$('.e').attr("disabled", true);
$('.a').attr("disabled", true);
});
$('.d').on("click",function(){
console.log(values[3]+" was checked")
$('.c').attr("disabled", true);
$('.b').attr("disabled", true);
$('.e').attr("disabled", true);
$('.a').attr("disabled", true);
});
$('.e').on("click",function(){
console.log(values[4]+" was checked")
$('.c').attr("disabled", true);
$('.d').attr("disabled", true);
$('.b').attr("disabled", true);
$('.a').attr("disabled", true);
});

var secValues = [$('.f')[0].value = Number(0), $('.g')[0].value = Number(5), $('.h')[0].value = Number(9), $('.i')[0].value = Number(13)];

console.log(secValues);
$('.f').on("click",function(){
console.log(values[0]+" was checked")
$('.g').attr("disabled", true);
$('.h').attr("disabled", true);
$('.i').attr("disabled", true);
});
$('.g').on("click",function(){
console.log(values[1]+" was checked")
$('.f').attr("disabled", true);
$('.h').attr("disabled", true);
$('.i').attr("disabled", true);
});
$('.h').on("click",function(){
console.log(values[2]+" was checked")
$('.g').attr("disabled", true);
$('.f').attr("disabled", true);
$('.i').attr("disabled", true);
});
$('.i').on("click",function(e){
  e.preventDefault();
console.log(values[3]+" was checked")
$('.g').attr("disabled", true);
$('.h').attr("disabled", true);
$('.f').attr("disabled", true);
});

var thirdValues = [$('.j')[0].value = Number(12), $('.k')[0].value = Number(6), $('.l')[0].value = Number(0)];
console.log(thirdValues);

$('.j').on("click",function(){
console.log(thirdValues[0]+" was checked")
$('.k')[0].value = Number(0);
$('.l')[0].value = Number(0);
$('.k').attr("disabled", true);
$('.l').attr("disabled", true);
var totTh=0;
totTh+= Number($('.l')[0].value)+ Number($('.k')[0].value)+ Number($('.j')[0].value);
console.log(totTh);
});
$('.k').on("click",function(){
console.log(thirdValues[1]+" was checked")
$('.j')[0].value = Number(0);
$('.l')[0].value = Number(0);
$('.l').attr("disabled", true);
$('.j').attr("disabled", true);
var totTh=0;
totTh+= Number($('.l')[0].value)+ Number($('.k')[0].value)+ Number($('.j')[0].value);
console.log(totTh);
});
$('.l').on("click",function(){
  console.log(thirdValues[2]+" was checked")
$('.k')[0].value = Number(0);
$('.j')[0].value = Number(0);
$('.j').attr("disabled", true);
$('.k').attr("disabled", true);
var totTh=0;
totTh+= Number($('.l')[0].value)+ Number($('.k')[0].value)+ Number($('.j')[0].value);
console.log(totTh);
});

var fourthValues = [$('.m')[0].value = Number(0), $('.n')[0].value = Number(4), $('.o')[0].value = Number(8), $('.p')[0].value = Number(12)];
console.log(fourthValues);

$('.m').on("click",function(){
console.log(fourthValues[0]+" was checked")
$('.n')[0].value = Number(0);
$('.o')[0].value = Number(0);
$('.p')[0].value = Number(0);
$('.n').attr("disabled", true);
$('.o').attr("disabled", true);
$('.p').attr("disabled", true);
var totalFst=0;
totalFst+= Number($('.m')[0].value)+ Number($('.n')[0].value)+ Number($('.o')[0].value)+ Number($('.p')[0].value);

});
$('.n').on("click",function(){
 console.log(fourthValues[1]+" was checked")
$('.m')[0].value = Number(0);
$('.o')[0].value = Number(0);
$('.p')[0].value = Number(0);
$('.m').attr("disabled", true);
$('.o').attr("disabled", true);
$('.p').attr("disabled", true);
var totalSec=0;
totalSec+= Number($('.m')[0].value)+ Number($('.n')[0].value)+ Number($('.o')[0].value)+ Number($('.p')[0].value);

});

$('.o').on("click",function(){
console.log(fourthValues[2]+" was checked")
$('.m')[0].value = Number(0);
$('.n')[0].value = Number(0);
$('.p')[0].value = Number(0);
$('.m').attr("disabled", true);
$('.n').attr("disabled", true);
$('.p').attr("disabled", true);
var totalTh=0;
totalTh+= Number($('.m')[0].value)+ Number($('.n')[0].value)+ Number($('.o')[0].value)+ Number($('.p')[0].value);

});

$('.p').on("click",function(){
console.log(fourthValues[3]+" was checked")
$('.m')[0].value = Number(0);
$('.n')[0].value = Number(0);
$('.o')[0].value = Number(0);
$('.m').attr("disabled", true);
$('.n').attr("disabled", true);
$('.o').attr("disabled", true);
var totalFo=0;
totalFo+= Number($('.m')[0].value)+ Number($('.n')[0].value)+ Number($('.o')[0].value)+ Number($('.p')[0].value);

});
}

//---------------------------------------------------------

$('#submit_home').on("click",function(e){
  e.preventDefault();
var calcOne= Number($('.answ1')[0].value) - Number($('.answ2')[0].value);
var third = calcOne*4.22/100;
var finalThird = (third+calcOne)/360;
var four = calcOne*3.44/100;
var finalFour = (four+calcOne)/180;
var fif = calcOne*3.48/100;
var finalFif = (fif+calcOne)/360;
var jumbo = calcOne*4.16/100;
var finalJumbo = (jumbo+calcOne)/360;
$('.third').append("Including an interest of 4.22 (30-year fixed rate) for this amount, your monthly mortgage would be approximately $"+finalThird);
$('.fif').text("Including an interest of 3.44 (15-year fixed rate) for this amount, your monthly mortgage would be approximately $"+finalFour);
$('.arm').text("Including an interest of 3.48 (5/1 ARM rate) for this amount, your monthly mortgage would be approximately $"+finalFif);
$('.jumbo').text("Including an interest of 4.22 (30-year Jumbo rate) for this amount, your monthly mortgage would be approximately $"+finalJumbo);
})







