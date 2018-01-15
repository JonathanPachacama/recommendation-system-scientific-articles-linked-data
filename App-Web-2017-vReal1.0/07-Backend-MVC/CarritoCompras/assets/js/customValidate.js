/**
 * Created by CEDIA on 07/09/2017.
 */
$(document).ready(function(){

  // Validate
  // http://bassistance.de/jquery-plugins/jquery-plugin-validation/
  // http://docs.jquery.com/Plugins/Validation/
  // http://docs.jquery.com/Plugins/Validation/validate#toptions

  $('#sign-up-form').validate({
    rules: {
      title: {

        required: true
      },
      country: {
        required: true
      },
      number: {
        required: true,

      },
      volume: {
        minlength: 6,
        required: true
      },
      year: {
        minlength: 4,

      },
      abstract: {
        minlength: 100000,

      },
      issns: {
        minlength: 30,

      },
      language: {
        minlength: 6,

      },
      keywords: {
        minlength: 500,

      },
      link: {
        minlength: 200,

      },
      author: {
        minlength: 4000,

      },
      category: {
        minlength: 100,

      },
      notas: {
        minlength: 10000,

      }
    },
    messages: {
      title: "Please enter the title",
      country: "Please enter the country",
      number: "Please enter number",
      year: {
        required: "Please provide a year",
        minlength: "Your year must be at least 4 characters long"
      },
      notas: {
        required: "Please provide a notas",
        minlength: "Your password must be at least 10000 characters long",

      }
    },
    success: function(element) {
      element.text('Success').addClass('valid')
    }
  });
});
