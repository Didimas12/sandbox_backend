exports.success = (response) => {
    return {
        success: true,
        // jika response message ada pesan maka proses response.message sebelum tanda ?
        // tapi jika tidak ada maka tampilkan respon.message dengan nilai/iso "success"
        message: response.message ? response.message : "success.",
        data: response.data,
    };
};

exports.failed = (response) => {
    return {
        success: false,
        message: response.message ? response.message : "failed.",
        data: response.data,
    };
};