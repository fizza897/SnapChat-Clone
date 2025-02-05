import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";

import Image from "next/image";
import { Button } from "../ui/button";

const ImagePreviewDialog = ({
  selectedFile,
  close,
  imageChange,
  setFlag,
}: {
  selectedFile: string;
  close:()=> void;
  imageChange: any;
  setFlag: any;
}) => {
  return (
    <>
      <div>
        <Dialog open={!!selectedFile}>
          <DialogContent onInteractOutside={close} className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col">
            <DialogHeader>
              <div className="flex items-center realative h-3/4 my-auto">
                <Image
                  src={selectedFile}
                  alt="selected file"
                  width={400}
                  height={400}
                  className="rounded-md boder mx-auto border-gray-400 object-contain"
                />
              </div>
            </DialogHeader>
            <DialogFooter className="mx-auto flex items-center">
              <DialogClose asChild>
                <Button variant={"destructive"} onClick={close} size={"sm"}>Cancel</Button>
              </DialogClose>
              <Button className="rounded-full" onClick={imageChange}  size={"sm"}>Change</Button>
              <Button className="rounded-full px-4 bg-green-500 hover:bg-green-400" onClick={()=>setFlag && setFlag(true)}  size={"sm"}>Next</Button>

            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ImagePreviewDialog;
