const throwAlert = (alert) => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: alert,
        focusConfirm: false,
        confirmButtonText: 'Ok',
        confirmButtonColor: '#af77d5'
    });
}

export { throwAlert };