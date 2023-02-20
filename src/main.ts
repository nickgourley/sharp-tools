

import processImages from "./processImages";
import {parseArgs, validateArgs} from "./argParser";

const args = parseArgs();

validateArgs(args);

processImages(args);