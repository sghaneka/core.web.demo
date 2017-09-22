"use strict";

import ReactToastr from 'react-toastr';

export class ToasterService {

    success(message, title) {
        toastr.success(message, title);
    }

}