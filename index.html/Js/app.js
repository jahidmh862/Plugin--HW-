$(function() {
// js for Blog filterizer
    $('.blog_filter').filterizr();

// js for filterizer control
    $('.filterizer_controler li').on('click',function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
// js for venobox
    // $('.my-image-links').function() {
    // numeration: true,
    // infinigall: true,
    // share: true,
    // spinner:'rotating-plane'
    // }

    // $('#venobox'),open('.my-image-links');
    // $('#venobox'),close('.my-image-links');
    // $('#venobox'),next('.my-image-links');
    // $('#venobox'),prev('.my-image-links');

    // $('#venobox').function ({
    //     spinner:'bounce'
    // }) 
    // new venobox(
    //     $('.#venobox').function ({
    //         spinner:'bounce'
    //     })
    // );

// magnific popup activation
    // $('.gallerys').magnificPopup({
    //     type:'image',
    //     delegate:'a',
    //     gallery:{
    //         enabled:true
    //       }
    // })
    
    
})

// $('.gallery-item').magnificPopup({
//     type: 'image',
//     gallery:{
//         enabled:true
//     }
//   });
    new venobox();