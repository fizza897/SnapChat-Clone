import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const readFileAsDataURL=(file:File | Blob):Promise<string> =>{
  return new Promise((resolve)=>{
    const reader=new FileReader();
    reader.onload=()=>{
      if(typeof reader.result === "string") resolve(reader.result)
    }
  reader.readAsDataURL(file)
  })
}