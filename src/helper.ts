/**
 * Class for handle multiple tries to execute some code
 */
export class Debounce{
  timeWindow:number = 500;
  timeout:any;

  constructor(timewindow?:number){
    this.timeWindow = this.timeWindow;
  }

  call(func:()=>void){
    clearTimeout(this.timeout);
    this.timeout = setTimeout(func,this.timeWindow);
  }
}