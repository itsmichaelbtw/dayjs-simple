import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import terser from "rollup-plugin-terser";

import packageJson from "./package.json";

const extensions = [".ts"];

export default [
    {
        input: "lib/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true
            }
        ],
        plugins: [
            resolve({ extensions }),
            babel({
                babelHelpers: "bundled",
                include: ["lib/**/*.ts"],
                extensions: extensions,
                exclude: "node_modules/**"
            }),
            commonjs(),
            typescript({
                tsconfig: "tsconfig.json",
                declaration: false,
                declarationDir: null,
                sourceMap: true
            }),
            terser.terser()
        ],
        external: ["dayjs"]
    }
];
