import { uglify } from "rollup-plugin-uglify";

// rollup.config.js (building more than one bundle)

export default [{
    input: 'src/index.js',
    output: {
        file: 'dist/squirrelly.min.js',
        format: 'umd',
        name: 'Sqrl',
        sourcemap: true
    },
    plugins: [
        uglify()
    ]
},
{
    input: 'src/index.js',
    output: {
        file: 'dist/squirrelly.dev.js',
        format: 'umd',
        name: 'Sqrl',
        sourcemap: true
    },
    plugins: [
    ]
},
{
    input: 'src/runtime.js',
    output: {
        file: 'dist/squirrelly.runtime.js',
        format: 'umd',
        name: 'Sqrl',
        sourcemap: true
    },
    plugins: [
        uglify()
    ]
},
{
    input: 'src/runtime.js',
    output: {
        file: 'dist/squirrelly.runtime.dev.js',
        format: 'umd',
        name: 'Sqrl',
        sourcemap: true
    },
    plugins: [
    ]
}];