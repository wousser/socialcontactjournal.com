export default {
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                terms: './terms.html',
                privacy: './privacy.html',
                // ...
                // List all files you want in your build
            }
        }
    }
}