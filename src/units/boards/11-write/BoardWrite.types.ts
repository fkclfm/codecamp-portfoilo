import { ChangeEvent, MouseEvent } from "react"
import { IMutation, IQuery } from "../../../commons/type/generated/types"

export interface IBoardWriteProps {
  isEdit : boolean
  data?: Pick<IQuery, "fetchBoard"> 
}

export interface IupdateBoardInput {
  title?: string
  contents?: string
}

export interface IBoardWriteEditProps {
  onClickNew : (event: MouseEvent<HTMLButtonElement>) => void
  onClickEdit : (event: MouseEvent<HTMLButtonElement>) => void
  PwCheck : (event : ChangeEvent<HTMLInputElement>) => void
  WriterCheck : (event : ChangeEvent<HTMLInputElement>) => void
  TitleCheck : (event : ChangeEvent<HTMLInputElement>) => void
  ContentCheck : (event : ChangeEvent<HTMLTextAreaElement>) => void
  writerError : string
  pwError : string
  titleError : string
  contentsError : string
  isTrue : boolean
  data?: Pick<IQuery, "fetchBoard">  
  isEdit : boolean
}