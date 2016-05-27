
$(document).ready(function(){

    console.log("ready");

    var countChecked = function (){
        /*Find check inputs and add them*/
        var highPoint = $('.cancal_highpoint_list').find('input:checked').length * 2;
        var bonusPoint = $('.cancal_bonuspoint_list').find('input:checked').length;
        var totalPoints = highPoint + bonusPoint;

        $('.cancal_point').text("Candidate's point: " + totalPoints);

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

        var c_input = $(this).prev('input');
        var c_container = $(this).parent();
        var reason = c_input.val();

        /*Generate new checkbox*/
        var newLabel = 
            $('<label/>')
            .append (
                $('<input/>', {'type': 'checkbox'})
            )
            .append(
                $('<span/>', {text: reason})
            )
        
        /*Generate checkbox close button*/
        var newLabelClose =
            $('<span/>', {'class':'close-label', text: "x"})

        /*Delete Checkbox*/
        var deleteCheckbox = function(elem){
            // console.log("clicked");
            $(elem).remove();
        }

        /*Generate Checkbox with X if there is input*/
        if (reason == null || reason =="") {
            alert("Please input");
        } else {
            if ($(this).attr('class')==='cancal_highpoint_submit') {
                $('.cancal_highpoint_list').append( $(newLabel).append(newLabelClose));
            } else {
                $('.cancal_bonuspoint_list').append( $(newLabel).append(newLabelClose));
            }

        /*remove input container and input value once submmited*/
            c_container.removeClass('active');
            c_input.val('');
        }

        $('label').on('click', function(){
            countChecked();
        });

        $('.close-label').on('click', function(){
            event.stopPropagation();
            deleteCheckbox($(this).parent());
            countChecked();
        });
    }

    countChecked();
    $('.cancal_addnew_button').on('click', toggleInputBox);
    $('.cancal_addnew_input').find('button').on('click', createCheckbox)
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