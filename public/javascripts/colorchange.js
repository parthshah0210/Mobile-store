$(document).ready(function() {
    var rbtn = document.getElementsByName('color');
    rbtn[0].setAttribute("checked","");

    $('.color-choose input').on('click', function() {
      var color = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + color + ']').addClass('active');
      $('.right-column span[data-price = ' + color + ']').addClass('active');
      $('.right-column .stock-config span[data-stock = ' + color + ']').addClass('active');
      $(this).addClass('active');

  });

  var ramcheckbox = document.querySelectorAll('.ram');
  var romcheckbox = document.querySelectorAll('.rom');

  ramcheckbox.forEach(function(checkbox) {
    checkbox.addEventListener('change', function(){
      var ramString = '';
      for(var i =0;i<ramcheckbox.length;i++){
        if(ramcheckbox[i].checked == true){
          ramString = ramString + ramcheckbox[i].value + ',';
        }  
      }
      document.getElementById('ram').value = ramString.slice(0, -1);
    });
  });

  romcheckbox.forEach(function(checkbox) {
    checkbox.addEventListener('change', function(){
      var romString = '';
      for(var i =0;i<romcheckbox.length;i++){
        if(romcheckbox[i].checked == true){
          romString = romString + romcheckbox[i].value + ',';
        }  
      }
      document.getElementById('rom').value = romString.slice(0, -1);
    });
  });

  $('#btnsubmit').click(function() {
    
    if(document.getElementById('ram').value == ''){
      document.getElementById('ramerror').innerHTML = "Please Select a RAM";
    }
    
    if(document.getElementById('rom').value == ''){
      document.getElementById('romerror').innerHTML = "Please Selet a Stroage Capacity";
    }
    
    colors = document.getElementById('colors').value.split(',');
    stocks = document.getElementById('stocks').value.split(',');
    prices = document.getElementById('prices').value.split(',');
    images = document.getElementById('images').value.split(',');

    if(colors.length != stocks.length){
      document.getElementById('stockerror').innerHTML = "Please Enter a number of available stocks for all colors";
    }
    if(colors.length != prices.length){
      document.getElementById('priceerror').innerHTML = "Please Enter price for all colors";
    }
    if(colors.length != images.length){
      document.getElementById('imageerror').innerHTML = "Please Enter image name for all colors";
    }

  });
});