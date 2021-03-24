export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;

// export const initialState = {
//   user: null,
//   playlists: [],
//   playing: false,
//   item: null,
//   token:
//     // * only for debugging purposes
//     "BQAQozHRDV1lbgKjNuKtNJSBerzjg0Fn6G2MuyueiKJnjwQvc-Ex74WVVXwFbaLb6qzbSU_X94J1tb5ZNq_aCKS6YFRnCz7kH6eAeSC2FFh68aEaYKVOKHLj1Vj-vBM3hVQPTtwXgeGQRusZUxV-wWsN9nKY7QPfW-QnxFtK9xg1ang4",
// };

// const reducer = (state, action) => {
//   console.log(action);

//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.user,
//       };
//     case "SET_TOKEN":
//       return {
//         ...state,
//         token: action.token,
//       };
//     case "SET_PLAYLISTS":
//       return {
//         ...state,
//         playlists: action.playlists,
//       };
//     case "SET_DISCOVER_WEEKLY":
//       return {
//         ...state,
//         discover_weekly: action.discover_weekly,
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;
