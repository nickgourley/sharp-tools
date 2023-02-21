import sharp from "sharp";
import { Namespace } from "argparse";

const processImages = async (args: Namespace) => {
    const {
      file,
      output,
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

    const filename = file.split("/").pop().split(".")[0];
    const size_arr = sizes.split(",").map((s: string) => parseInt(s));
    const extensions = ext.split(",");
    
    const metadata = await sharp(file).metadata();
    const originalWidth = metadata.width;
    const resize = async (size: number) => {
      extensions.map((ext: string) =>
      {
        if(originalWidth && size <= originalWidth) {
          sharp(file).resize(size)
          .toFile(`${output}/${filename}-${size}.${ext}`);
        }
      })
      
      // const resize = (size: number) => sharp(`./image-originals/galaxy.jpg`)
      //   .resize(size)
      //   .toFile(`./image-processed/galaxy-${size}.jpg`);
    }
    Promise
      .all(size_arr.map(resize))
      .then(() => {
        console.log('complete');
      });

      extensions.map((ext: string) => {
        sharp(file).resize(originalWidth)
        .toFile(`${output}/${filename}.${ext}`);
      })
}

export { processImages}

