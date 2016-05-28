
$(document).ready(function(){

    console.log("ready");
    var cancal_input = $('.cancal').find('input');
    var cancal_label = $('.cancal').find('label');

    var countChecked = function (){
        /*Find check inputs and add them*/
        var input = $('.cancal').find('form').find('input');
        var totalPoints = 0;

        input.each(function(){
            // console.log($(this));
            if ($(this).is(':checked')) {
                totalPoints = parseInt($(this).attr('data-value')) + totalPoints;
            }

            $('.cancal_total_point').text("Candidate's total point: " + totalPoints);
        });

        /*Display Candidate pass or fail based on points*/
        if (totalPoints >= 5) {
            $('.cancal_result').text("Candidate Passed");
        } else {
            $('.cancal_result').text("Candidate Failed");
        }
    };

    var toggleInputBox = function (){
        /*Toggle New input box*/
        $(this).next('.cancal_addnew_input').toggleClass("active");
    }

    var createCheckbox = function (){

        var c_input = $(this).siblings('.cancal_criteria_input');
        var v_input = $(this).siblings('.cancal_value_input');

        var c_container = $(this).parent();
        var criteria = c_input.val();
        var value = v_input.val();

        var newLabel = 
            $('<form/>', {'class': 'cancal_point_check'})
            .append(
                $('<div/>')
                .append(
                    $('<span/>', {text: criteria})
                )
            )
            .append(
                $('<div/>')
                .append(
                    $('<label/>')
                    .append (
                        $('<input/>', {'type': 'checkbox', 'data-value':value})
                    )
                )
            )

        // Generate checkbox close button
        var newLabelClose =
            $('<i/>', {'class':'close-label', text: "x"})

        /*Delete Checkbox*/
        var deleteCheckbox = function(elem){
            // console.log("clicked");
            $(elem).remove();
        }

        /*Generate Checkbox with X if there is input*/
        if (criteria == null || criteria =="") {
            alert("Please input");
        } else {
            $('.cancal_addpoint_list').append( $(newLabel).append(newLabelClose));

        /*remove input container and input value once submmited*/
            c_container.removeClass('active');
            c_input.val('');
            v_input.val('');
        }

        $('label').on('click', countChecked);

        $('.close-label').on('click', function(){
            event.stopPropagation();
            deleteCheckbox($(this).parent());
            countChecked();
        });
    }

    var printLog = function (){
        
        var str_temp = '';

        $('.cancal_list').children().each(function() {

            if ($(this).is('form')) {
                if ($(this).find('input').is(':checked')){
                    str_temp = str_temp.concat( $(this).find('span').text() + " = " + $(this).find('input:checked').attr('data-value') +"<br>" );
                }
            } else if ($(this).is('h1')){
                str_temp = str_temp.concat("<br>" + '<b style="color:red; text-transform:uppercase; font-family: Arial">' + $(this).text() + '</b>' + "<br>");
            }
        });

        str_temp = str_temp.concat( $('.cancal_total_point').text() +"<br>");
        str_temp = str_temp.concat( $('.cancal_result').text() +"<br>" );

        var x=window.open();
        x.document.open();
        x.document.write(str_temp);
        x.document.close();
    }

    countChecked();
    cancal_label.on('click', countChecked);
    cancal_input.on('click', countChecked);

    $('.cancal_addnew_button').on('click', toggleInputBox);
    $('.cancal_addnew_input').find('button').on('click', createCheckbox) 
    $('.cancal_print_button').on('click', printLog);

});


/*
Run count check on click
If I use ('.cancal').find('label'), it's going to apply only to existing labels, later added labels won't get the event listener

The below technique will apply on a target's closest label. We're doing this because clicking on the labels sometimes will result in clicking on span or the input.

Hence, on clicking on the closest label, run countChecked
*/

/*
$('.cancal').on('click', function(e){
    if( $(e.target).closest('label').length ) {
        countChecked();
    }
});

$('.cancal').on('click', function(e){
    if( $(e.target).closest('.close-label').length ) {
        deleteCheckbox();
        countChecked();
    }
});
*/


/*
$('.cancal_highpoint')
    .append(
    $('<label/>', {'class': 'wrapper'}).append(
        $('<div/>', {'class': 'inner'}).append(
            $('<span/>', {text: 'Some text'})
        )
    )
    .append(
        $('<div/>', {'class': 'inner'}).append(
            $('<span/>', {text: 'Other text'})
        )
    )
);
*/

/*
Functions
- Calculate 1 point and 2 point system
- Calculate total point and determine if candidate pass or not
- Add in own opinion to add point or minus point
- Print Out result (Copy and Paste Result)

*/