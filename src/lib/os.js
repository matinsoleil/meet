import Cookies from 'js-cookie';

class Os{

  constructor () {
    this.COOKIE_OS_NAME = 'PORTAL_OS';
    this.COOKIE_REDIRECT_NAME = 'PORTAL_REDIRECT';
    this.OS_DEFAULT = 'web'
  }

  getOs(){
    let os = null;
    try{
      let searchParameters = new URLSearchParams(window.location.search);
      os = searchParameters.get('os');
    }catch(error){
      os = window.navigator.platform;
    }
    
    if(!!os){
      this.determinateOs(os);
    }else {
      os = Cookies.get(this.COOKIE_OS_NAME);
      if(!!os === false){
        return this.OS_DEFAULT;
      }
    }
    return this.os;
  }


  /**
  * En caso de que el sistema operativo no sea android, ios, desktopWin o desktopMac,
  * este debe permanecer como 'web'.
  **/
  determinateOs(os){
     switch (os){
      case 'ios':
      case 'android':
      case 'desktopWin':
      case 'desktopMac':
        this.hideSearchs();
        break;
      default:
        os = this.OS_DEFAULT;
    }
    Cookies.set(this.COOKIE_OS_NAME, os, { expires: 30 }); //The epiration time is set in days, ex. in mins.. (1/24/60)
    this.os = os;
  }

  hideSearchs(){
    window.location.search = '';
  }

}

export const osInstance = new Os();
