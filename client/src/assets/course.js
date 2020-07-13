function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
 function remaining(){
    $(document).ready(function() {
    var text_max = 150;
    $('#textarea_feedback').html(text_max + ' characters remaining');

    $('#justificationForRequest').keyup(function() {
      //alert("sasatvik");
        var text_length = $('#justificationForRequest').val().length;
        //console.log(text_length);
        var text_remaining = text_max - text_length;
        //console.log(text_remaining);
        $('#textarea_feedback').html(text_remaining + ' characters remaining');
    });
});}


function dropdown(){
  $(document).ready(function(){
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();
});
}
function AddCourse() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function show1(){
  document.getElementById('div2').style.display ='block';
}
function show2(){
  document.getElementById('div1').style.display = 'block';
}

  // alert("satvik");
  // $(document).ready(function() {
  //   var max_fields      = 10; //maximum input boxes allowed
  //   var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
  //   var add_button      = $(".add_field_button"); //Add button ID
    
  //   var x = 1; //initlal text box count
  //   $(add_button).click(function(e){ //on add input button click
  //     e.preventDefault();
  //     if(x < max_fields){ //max input box allowed
  //       x++; //text box increment
  //       $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
  //     }
  //   });
    
  //   $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
  //     e.preventDefault(); $(this).parent('div').remove(); x--;
  //   })
  // });

  function add(){
    $(document).ready(function() {
      var max_fields      = 10; //maximum input boxes allowed
      var wrapper   		= $(".input_fields_wrap"); //Fields wrapper
      var add_button      = $(".add_field_button"); //Add button ID
      
      var x = 1; //initlal text box count
      $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
          x++; //text box increment
          $(wrapper).append('<div><input type="text" name="mytext[]"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
      });
      
      $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); $(this).parent('div').remove(); x--;
      })
    });}

