$(function(){
  $("[data-toggle='tooltip']").tooltip();
  //$("[data-toggle='popover']").popover();
  $('#carouselId').carousel({
    interval: 2000
  });

  $('#modelId').on('show.bs.modal', function (e) {
    console.log('Comenzando a abrirse');
    $('#areaBtn').removeClass('btn-outline-primary');
    $('#areaBtn').addClass('btn-success');
    $('#areaBtn').prop('disabled', true);
  })
  $('#modelId').on('shown.bs.modal', function (e) {
    console.log('Termino de abrirse');
  })
  $('#modelId').on('hide.bs.modal', function (e) {
    console.log('comienza a ocultarse')
  })
  $('#modelId').on('hidden.bs.modal', function (e) {
    console.log('terminó de ocultar');
    $('#areaBtn').removeClass('btn-success');
    $('#areaBtn').addClass('btn-outline-primary');
    $('#areaBtn').prop('disabled', false);
  })
});
