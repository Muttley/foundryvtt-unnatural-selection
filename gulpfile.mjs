import gulp from "gulp";

import * as packs from "./utils/packs.mjs";

export default gulp.series(
	packs.clean,
	packs.compile
);

export const build = gulp.series(packs.compile);

export const clean = gulp.series(packs.clean);
