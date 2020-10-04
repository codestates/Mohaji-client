export const SET_SPOTLIST = 'SET_SPOTLIST';
export const SET_CURRSPOT = 'SET_CURRSPOT';
export const SET_COMMENTLIST = 'SET_COMMENTLIST';
export const LOAD_COMMENTLIST = 'LOAD_COMMENTLIST'
export const SET_ISMOREREAD = 'SET_ISMOREREAD';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_SHOW = 'SET_SHOW';
export const SET_NAV = 'SET_NAV'
export const SET_SIGNUP = 'SET_SIGNUP';
export const SET_SOCIALLOGIN = 'SET_SOCIALLOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_SELECT_TAG = 'SET_SELECT_TAG';

export const setCommentList = commentList => ({
  type: SET_COMMENTLIST,
  commentList
});

export const loadCommentList = commentList => ({
  type: LOAD_COMMENTLIST,
  commentList
})

export const setSpotList = spotList => ({
  type: SET_SPOTLIST,
  spotList
});

export const setCurrSpot = spot => ({
  type: SET_CURRSPOT,
  spot
});

export const setIsMoreRead = bool => ({
  type: SET_ISMOREREAD,
  bool
});

export const setLogin = bool => ({
  type: SET_LOGIN,
  bool
});

export const setShowTrue = () => ({
  type: SET_SHOW,
  state: true
});

export const setShowFalse = () => ({
  type: SET_SHOW,
  state: false
});

export const setNavSpotList = () => ({
  type: SET_NAV,
  component: 'SpotList'
});

export const setNavMyPage = () => ({
  type: SET_NAV,
  component: 'MyPage'
});

export const setNavSignIn = () => ({
  type: SET_NAV,
  component: 'SignIn'
});

export const setNavNull = () => ({
  type: SET_NAV,
  component: 'Null'
})

export const setSignup = bool => ({
  type: SET_SIGNUP,
  bool
})

export const setSocialLogin = bool => ({
  type: SET_SOCIALLOGIN,
  bool
})

export const setToken = string => ({
  type: SET_TOKEN,
  string
})


export const setSelectTag = (obj) => ({
  type: SET_SELECT_TAG,
  obj
});
