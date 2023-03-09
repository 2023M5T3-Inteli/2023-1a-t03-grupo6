/** This file is executed before each e2e test suite */

import { rmSync } from "fs";
import { join } from "path";
//////////////////////////////////////////////////////////////////////////////////////

/** Delete the test database */
global.beforeEach(() => {
  rmSync(join(__dirname, "../db/test.sqlite"), { force: true });
});
