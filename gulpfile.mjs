import gulp from "gulp";

import * as packs from "./utils/packs.mjs";

export default gulp.series(
	gulp.parallel(packs.compile),
);

export const build = gulp.parallel(packs.compile);

export const clean = gulp.parallel(packs.clean);
