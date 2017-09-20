"use strict";

export class ToasterService {

    success(message, title) {
        toastr.success(message, title);
    }

}