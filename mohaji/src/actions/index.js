export const SET_SPOTLIST = 'SET_SPOTLIST';
export const SET_CURRSPOT = 'SET_CURRSPOT';
export const SET_COMMENTLIST = 'SET_COMMENTLIST';
export const LOAD_COMMENTLIST = 'LOAD_COMMENTLIST'
export const SET_ISMOREREAD = 'SET_ISMOREREAD';


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
})

