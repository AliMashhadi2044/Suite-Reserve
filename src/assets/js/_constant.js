const cities = [
  'آذربایجان شرقی',
  'آذربایجان غربی',
  'اردبیل',
  'اصفهان',
  'البرز',
  'ایلام',
  'بوشهر',
  'تهران',
  'چهارمحال وبختیاری',
  'خراسان جنوبی',
  'خراسان رضوی',
  'خراسان شمالی',
  'خوزستان',
  'زنجان',
  'سمنان',
  'سیستان وبلوچستان',
  'فارس',
  'قزوین',
  'قم',
  'کردستان',
  'کرمان',
  'کرمانشاه',
  'کهگیلویه وبویراحمد',
  'گیلان',
  'گلستان',
  'لرستان',
  'مازندران',
  'مرکزی',
  'هرمزگان',
  'همدان',
  'یزد'
]
const organizationalPositions = ['معلم', 'مدیر', 'کارمند', 'نامشخص']

const responeCodes = {
  OK: {
    msgCode: 200,
    mes: 'عملیات موفقیت آمیز بود',
    status: 200
  },
  CREATED: {
    msgCode: 201,
    mes: 'عملیات موفقیت آمیز بود',
    status: 201
  },
  SUCCESS_NO_CONTENT: {
    msgCode: 204,
    mes: 'عملیات موفقیت آمیز بود',
    status: 204
  },
  JSON_SYNTAX_ERROR: {
    msgCode: 40001,
    mes: 'خطای نحوی در فرمت JSON',
    devMes: 'JSON syntax error',
    status: 400
  },
  INVALID_ID: {
    msgCode: 40002,
    mes: 'آیدی نامعتبر است',
    devMes: 'invalid ObjectId',
    status: 400
  },
  EMPTY_INPUT_BODY: {
    msgCode: 40003,
    mes: 'دیتای ورودی معتبر نیست',
    devMes: 'Input body is empty',
    status: 400
  },
  INVALID_NATIONAL_CODE: {
    msgCode: 40004,
    mes: 'کد ملی نامعتبر است',
    devMes: 'nationalCode is not valid',
    status: 400
  },
  UNAUTHORIZED: {
    msgCode: 40101,
    mes: 'عدم دسترسی',
    status: 401
  },
  REFRESH_TOKEN_EXPIRED: {
    msgCode: 40102,
    mes: 'عدم احراز هویت',
    devMes: 'refresh token is expired',
    status: 401
  },
  ACCESS_TOKEN_NOT_SET: {
    msgCode: 40103,
    mes: 'عدم احراز هویت',
    devMes: 'access token is not set',
    status: 401
  },
  ACCESS_TOKEN_INVALID: {
    msgCode: 40104,
    mes: 'عدم احراز هویت',
    devMes: 'access token is invalid',
    status: 401
  },
  ACCESS_TOKEN_EXPIRED: {
    msgCode: 40104,
    mes: 'عدم احراز هویت',
    devMes: 'access token is expired',
    status: 401
  },
  LOGIN_FAILED: {
    msgCode: 40104,
    mes: 'ورود ناموفق',
    devMes: 'login failed',
    status: 401
  },
  FORBIDDEN: {
    msgCode: 40301,
    mes: 'عدم دسترسی',
    status: 403
  },
  ADMIN_IS_NOT_ACTIVE: {
    msgCode: 40302,
    mes: 'کاربر غیر فعال است',
    devMes: 'admin is not active',
    status: 403
  },
  NOT_FOUND: {
    msgCode: 40401,
    mes: 'آیتم مورد نظر یافت نشد',
    status: 404
  },

  REFRESH_TOKEN_NOT_FOUND: {
    msgCode: 40901,
    mes: 'توکن معتبر نیست',
    devMes: 'refresh token not found',
    status: 409
  },
  PHONE_NUMBER_ALREADY_EXISTS: {
    msgCode: 40902,
    mes: 'شماره تلفن قبلا ثبت شده است',
    devMes: 'phone number already exists',
    status: 409
  },
  EMAIL_ALREADY_EXISTS: {
    msgCode: 40903,
    mes: 'ایمیل قبلا ثبت شده است',
    devMes: 'email already exists',
    status: 409
  },
  ITEM_ALREADY_EQUIPPED: {
    msgCode: 40904,
    mes: 'این آیتم قبلا فعال شده است',
    devMes: 'item already equipped',
    status: 409
  },
  UNEXIST_ITEM_REMOVAL: {
    msgCode: 40905,
    mes: 'این آیتم قابل حذف نیست',
    devMes: 'item can not be removed',
    status: 409
  },
  UNEXIST_ITEM_ADDITION: {
    msgCode: 40906,
    mes: 'این آیتم قابل اضافه شدن نیست',
    devMes: 'item can not be added',
    status: 409
  },
  ITEMS_ARE_THE_SAME: {
    msgCode: 40907,
    mes: 'آیتم های ورودی یکسان هستند',
    devMes: 'items are the same',
    status: 409
  },
  ITEM_TYPES_ARE_NOT_EQUAL: {
    msgCode: 40908,
    mes: 'نوع آیتم ها یکسان نیست',
    devMes: 'item types are not equal',
    status: 409
  },
  ALREADY_USED_POWER_UP: {
    msgCode: 40909,
    mes: 'این پاورآپ استفاده شده است',
    devMes: 'power up type is already used',
    status: 409
  },
  ALREADY_USED_QUESTION_POWER_UP: {
    msgCode: 40910,
    mes: 'یک پاورآپ قبلا در این سوال استفاده شده است',
    devMes: 'user already used powerUp in this question',
    status: 409
  },
  NOT_ENOUGH_COINS: {
    msgCode: 40911,
    mes: 'سکه کافی نیست',
    devMes: 'not enough coins',
    status: 409
  },
  ALL_QUESTIONS_ANSWERED: {
    msgCode: 40912,
    mes: 'تمامی سوالات پاسخ داده شده است',
    devMes: 'all questions answered',
    status: 409
  },
  MATCH_IS_NOT_ACTIVE: {
    msgCode: 40913,
    mes: 'بازی فعال نیست',
    devMes: 'match is not active',
    status: 409
  },
  NOT_IN_GAME_STATUS: {
    msgCode: 40914,
    mes: 'Not in game phase',
    devMes: "user is not 'in game' status",
    status: 409
  },
  OTP_CODE_EXPIRED: {
    msgCode: 41001,
    mes: 'کد ارسالی منقضی شده است',
    status: 410
  },
  OTP_CODE_INVALID: {
    msgCode: 41002,
    mes: 'کد ارسالی نامعتبر است',
    status: 410
  },
  PAYLOAD_TOO_LARGE: {
    msgCode: 41301,
    mes: 'Request entity too large',
    devMes: 'Request entity too large',
    status: 413
  },
  DUPLICATE_PHONE_NUMBER: {
    msgCode: 40901,
    mes: 'شماره تلفن تکراری است',
    status: 409
  },
  DUPLICATE_EMAIL: {
    msgCode: 40902,
    mes: 'ایمیل تکراری است',
    status: 409
  },
  DUPLICATE_USERNAME: {
    msgCode: 40903,
    mes: 'نام کاربری تکراری است',
    status: 409
  },
  DUPLICATE_NATIONAL_CODE: {
    msgCode: 40904,
    mes: 'کد ملی تکراری است',
    status: 409
  },
  SUITE_ALREADY_RESERVED: {
    msgCode: 40905,
    mes: 'سوئیت قبلا رزرو شده است',
    status: 409
  },
  SUITE_NOT_AVAILABLE: {
    msgCode: 40906,
    mes: 'سوئیت در دسترس نیست',
    status: 409
  },
  INPUT_DATA_INVALID: {
    msgCode: 42201,
    mes: 'دیتای ورودی معتبر نیست',
    status: 422
  },
  TRAVEL_COMPANION_INVALID: {
    msgCode: 42202,
    mes: 'همراه سفر معتبر نیست',
    status: 422
  },
  SERVER_ERROR: {
    msgCode: 50001,
    mes: 'خطایی در سرور رخ داده است',
    status: 500
  },
  ROUTE_NOT_FOUND: {
    msgCode: 50101,
    mes: 'مسیر مورد نظر پیدا نشد',
    devMes: 'api endpoint not found, route address is invalid',
    status: 501
  }
}

const chNumber = [
  'صفر',
  'یک',
  'دو',
  'سه',
  'چهار',
  'پنج',
  'شش',
  'هفت',
  'هشت',
  'نه',
  'ده',
  'یازده',
  'دوازده',
  'سیزده',
  'چهارده',
  'پانزده'
]

let familyRelationship = ['همسر', 'فرزند', 'مادر', 'پدر', 'خواهر', 'برادر', 'سایر']
export { cities, organizationalPositions, responeCodes, chNumber, familyRelationship }
