$('#btn-addType').click(()=>{
    $('#modalJournalType').modal('show')
})

$('#btnCloseModal').click(()=>{
    $('#modalJournalType').modal('toggle')

})

$('#modalJournalType').modal({backdrop:'static',keyboard:false})