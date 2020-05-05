export const isIE = () => {
  if (process.client) {
    debugger
    const userAgent = window.navigator.userAgent;
    console.log(userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1)
    return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
  }
}