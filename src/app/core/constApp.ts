import {Injectable} from '@angular/core';

@Injectable()
export class ConstApp {

  DEVELOP = true;
  ACCESS_CONTROL_ALLOW_ORIGIN = 'http://localhost:4211';    // HTTP PROTOCOL - CORS

  URL = {
    PROTOCOL: 'http://',
    BASE: 'localhost:3000',
    FULL_BASE: 'http://localhost:3000',

    LOGIN: '/auth/login',

    ADMIN: {
      GET_CATEGORIES: '/api/admin/getcategories',
      GET_DASHBOARD_STATISTIC: '/api/admin/getstatistic',
    },

  };

  EXPLORER = {
    PATH_MEDIA_STORAGE: 'storage_media',
    PATH_DOCS_STORAGE: 'storage_docs',
  };

  // --------------------------------------------------------------------------------------------
  KEY = {
    FILE_UPLOAD_PATH: 'file_upload_path',
  };

  // --------------------------------------------------------------------------------------------
  ERROR = {
    GENERAL: 'There was an error!',
    NO_ACCESS_TO_SERVER: 'Error. No access to the server.',
    UPLOAD_FAILED: 'Upload failed!',
    NOTHING_TO_UPLOAD: 'Nothing to upload',
  };

  // SCREEN TEXTS
  // --------------------------------------------------------------------------------------------
  USER_MANAGEMENT = {
    TITLE_NEW_USER: 'CREATE NEW USER',
    TITLE_EDIT_USER: 'EDIT USER DATA',
  };


}
