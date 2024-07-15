import React from 'react'
import { Button } from "@/components/ui/button"
import Image  from 'next/image'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MdEmojiEmotions } from 'react-icons/md'
import { EmojiArray } from '@/lib/Emoji/emoji'
const EmojiPopover = () => {
  return (
    <>
    <div className=''>
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} className='rounded-full' variant="outline">
            <MdEmojiEmotions size={"24px"}/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className='flex gap-4 flex-wrap items-center'>
          {
            EmojiArray.map((emoji,index)=>{
              return(
                <div key={index} className='cursor-pointer scale-90 hover:scale-110 transition-transform duration-100'>
                  <Image
                 src={emoji.src}
                 alt={emoji.alt}
                  width={35}
                  height={35}
                  />
                </div>
              )
            })
          }
          
          </div>    
      </PopoverContent>
    </Popover>
    </div>
    
    </>
  )
}

export default EmojiPopover