//import * as toastr from '../../../../wwwroot/lib/toastr/toastr.js';

"use strict";



export class ToasterService {

    success(message, title) {
        toastr.success(message, title);
    }

}