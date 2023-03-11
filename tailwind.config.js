const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
                bebas: "Bebas Neue",
                lobster: "Lobster",
            },
            boxShadow: {
                // sm: `0px 1px 1px rgba(0,0,0,0.11),
                // 0px 2px 2px rgba(0,0,0,0.11)`,
                //
                // md: `0px 1px 1px rgba(0,0,0,0.11),
                // 0px 2px 2px rgba(0,0,0,0.11),
                // 0px 4px 4px rgba(0,0,0,0.11),
                // 0px 8px 8px rgba(0,0,0,0.11)`,
                //
                // lg: `0px 1px 1px rgba(0,0,0,0.11),
                // 0px 2px 2px rgba(0,0,0,0.11),
                // 0px 4px 4px rgba(0,0,0,0.11),
                // 0px 8px 8px rgba(0,0,0,0.11),
                // 0px 16px 16px rgba(0,0,0,0.11)`,
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
