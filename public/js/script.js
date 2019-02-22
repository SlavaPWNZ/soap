jQuery(document).ready(function () {
    jQuery.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        }
    });

    $(function() {
        $("#shorten_url" ).focus();
    });

    $('#result').focus(function(){
        input_temp=this.value;
        $(this).select();
    });

    $(document).on('click', '#modal_button',function(){
        var _city = $('#_city').val();
        var _name = $('#_name').val();
        var _date = $('#_date').val();
        $('.alert-danger').html('');
        $('.alert-danger').css('display','none');
        $('#result').val('');
        if(_city!='' && _name!='' && _date!='')
        {
            $('#customerModal').modal('show');
            $.ajax({
                url : "/ajax",
                method:"POST",
                data:{_city:_city,_name:_name,_date:_date},
                success:function(data){
                    if (data['have']){
                        jQuery('.alert-danger').show();
                        jQuery('.alert-danger').append('<p>Данная ссылка была сгенерирована ранее!</p>');
                    }
                    $('#result').val(data['link']);
                    document.getElementById("link").href=data['link'];
                }
            });
        }
        else
        {
            alert("Заполните все поля!");
        }
    });


});