function calculate() {

    var amount = $('#amount').val(); /* dollar '$' sign signifies the jquery library */ 
    var percentage = $('#percentage').val();
    var tip = amount * (percentage/100);
    var total = Number(amount) + tip;

    $('#tip').val( tip.toFixed(2) );
        $('#total').val( total.toFixed(2) );
        return false;
    }
    $('#calculator').submit( calculate );

