jQuery(document).ready(function($) {

    $("#wc_emails_custom_form").on("submit", function(e) {
      e.preventDefault();
      
      var toEmail = $('#toEmail').val();

        $.ajax({
            url: um_ajax_email.wc_ajax_url.toString(),
            type: 'POST',
            data: {
              'toEmail': toEmail
            },
            beforeSend: function() {
              jQuery(".email_sent_button").prop("disabled", true);
              jQuery(".email_sent_button").text("Processing...");
              jQuery(".loader").show();
            },
        })
        .done(function(data) {
            jQuery(".email_sent_button").prop("disabled", false);
            jQuery(".email_sent_button").text("Submit").hide();
            jQuery(".email_sent_button").after("<p class='msg_success' style='color:green'>Successfully sent email. Please check your inbox.</p>");
            jQuery(".loader").hide(); 
            setTimeout(function() {
                window.location.reload();
            }, 2000);
        });

    });


});