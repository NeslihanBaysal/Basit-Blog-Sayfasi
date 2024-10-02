import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
    input: 'blog-project/src/js/main.js',  
    output: {
        file: 'dist/bundle.js', 
        format: 'iife',  
        name: 'BlogBundle'  
    },
    plugins: [
        resolve(),  
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-env'] 
        })
    ]
};