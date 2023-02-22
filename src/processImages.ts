import sharp from "sharp";
import { Namespace } from "argparse";
import fs from "fs";

const processImages = async (args: Namespace) => {
    const {
      file,
      output,
      dir,
      ext,
      sizes,
      width,
      height,
      quality,
      progressive,
      tile,
      compression,
      blur,
      rotate,
      version
    } = args;

    let files = [];

    if(dir)
    {
      files = await fs.readdirSync(dir);
      files = files.map((file: string) => `${dir}/${file}`)
    }
    else
    {
      files.push(file);
    }

    files.map(async (fileItem: string) => {
      {
        console.log(fileItem)
        const filename = fileItem.split("/").pop().split(".")[0];
        const size_arr = sizes.split(",").map((s: string) => parseInt(s));
        const extensions = ext.split(",");
        
        const metadata = await sharp(fileItem).metadata();
        const originalWidth = metadata.width;
        const resize = async (size: number) => {
          extensions.map((ext: string) =>
          {
            if(originalWidth && size <= originalWidth) {
              sharp(fileItem).resize(size)
              .toFile(`${output}/${filename}-${size}.${ext}`);
            }
          })
        }
        Promise.all(size_arr.map(resize)).then(() => {
            console.log('complete');
        });
  
        extensions.map((ext: string) => {
          sharp(fileItem).resize(originalWidth)
          .toFile(`${output}/${filename}.${ext}`);
        })
      }
    })
}

export { processImages}

