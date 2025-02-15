$(document).ready(function(){
    $('#regForm').on('submit', function(e){
      e.preventDefault();
      // Collect form data as a URL-encoded string
      var formData = $(this).serialize();
      // Replace with your actual Apps Script Web App URL
      var scriptURL = 'https://script.google.com/macros/s/AKfycbyw42d0Wkl-8O-5WTpdEo1_Qc_9nGxTIvCMml6tT56QAJSU9-8Lcj_K-v6UIP3IOAsE/exec';
      
      $.ajax({
        url: scriptURL,
        method: 'POST',
        data: formData,
        dataType: 'json',
        success: function(response) {
          if(response.result === "success"){
            $('#result').html('<div class="alert alert-success">Registration successful!</div>');
            $('#regForm')[0].reset();
          } else {
            $('#result').html('<div class="alert alert-danger">Error: ' + response.error + '</div>');
          }
        },
        error: function(){
          $('#result').html('<div class="alert alert-danger">An error occurred. Please try again.</div>');
        }
      });
    });
  });
  