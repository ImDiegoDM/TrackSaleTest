import { Action } from "redux";
export class IAction implements Action{
  type:string;
  payload:any;
}