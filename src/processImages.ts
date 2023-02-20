import sharp from "sharp";
import { Namespace } from "argparse";

export default (args: Namespace) => {
    const {
      file,
      output,
      ext,
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

    const resize = (size: number) =>
      sharp(file)
        .resize(size)
        .toFile(`${output}/${filename}-${size}.${ext}`);

    // const resize = (size: number) => sharp(`./image-originals/galaxy.jpg`)
    //   .resize(size)
    //   .toFile(`./image-processed/galaxy-${size}.jpg`);
    
    Promise
      .all([1440, 1080, 720, 480].map(resize))
      .then(() => {
        console.log('complete');
      });
}

