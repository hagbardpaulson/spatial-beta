import { pack } from "../config";

const version = process.env.VERSION || pack.version;
const banner = `/*!
 * spatial design v${version}
 * Made with <3 ${new Date().getFullYear()}
 * Released under the MIT License.
 */`;

export default banner;
