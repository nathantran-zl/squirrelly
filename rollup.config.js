import { uglify } from "rollup-plugin-uglify"

// rollup.config.js (building more than one bundle)

export default [{
    input: 'src/index.js',
    output: {
      file: 'dist/squirrelly-rollup.js',
      format: 'umd',
      name: 'Sqrl',
    },
    plugins: [
        uglify()
    ]
  }
//   , {
//     input: 'main-b.js',
//     output: [
//       {
//         file: 'dist/bundle-b1.js',
//         format: 'cjs'
//       },
//       {
//         file: 'dist/bundle-b2.js',
//         format: 'esm'
//       }
// ]
//}
];