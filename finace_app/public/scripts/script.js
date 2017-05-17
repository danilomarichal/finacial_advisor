
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














