//import { parse } from 'qs'
import queryString from 'query-string'
export default function (props, callback = null) {
  if (window.is_weixn) {
    //console.log(props)
    const { location: { search } } = props
    const query = queryString.parse(search)
    if ("signin" in query) {
      props.dispatch({ type: "global/setPermision", payload: { permission: 'user' } })
        .then(() => {
          if (callback !== null) callback()
        })
    } else {
      if (callback !== null) callback()
    }
  }

}