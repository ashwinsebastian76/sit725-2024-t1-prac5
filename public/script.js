document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
});

const submitForm = () => { 
    let formData = {};
     formData.first_name = $('#first_name').val(); 
    formData.family_name = $('#family_name').val(); 
    formData.phone = $('#phone').val();
    formData.bid = $('#bid').val();
     console.log("Form Data Submitted: ", formData);
     }

$(document).ready(function () {
    $("#formSubmit").click(() => {
      submitForm();
    });
  });