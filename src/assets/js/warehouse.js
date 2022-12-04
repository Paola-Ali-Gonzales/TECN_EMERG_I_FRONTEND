$('#btn-addWarehouse').click(()=>{
    $('#modalWarehouse').modal('show')
})

$('#btnCloseModal').click(()=>{
    $('#modalWarehouse').modal('toggle')

})

$('#modalWarehouse').modal({backdrop:'static',keyboard:false})