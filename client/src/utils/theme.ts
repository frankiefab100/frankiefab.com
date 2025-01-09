

// import { useEffect, useState } from "react"

// let defaultTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

// const [theme, setTheme] = useLocalStorage(
//   "theme",
//   defaultTheme ? "dark" : "light",
// );

// const toggleTheme = () => {
//   const newTheme = theme === "dark" ? "light" : "dark";
//   setTheme(newTheme);
// };

// useEffect(() => {
//   document.documentElement.setAttribute("data-theme-color", theme);
// }, [theme]);


// export default function toggleTheme(){
//     const [theme, setTheme]= useState("light")

//     useEffect(() => {
//     const theme = localStorage.getItem("theme")

//     if (theme){
//       setTheme(theme)
//     } else if (window.matchMedia("(prefers-color-scheme: light)").matches){
//         setTheme("light")
//     }
//     }, [theme])
// }


// useEffect(() => {
// if (theme === "dark"){
//     localStorage.setItem("theme", "dark")
//     document.documentElement.classList("dark")??
// }
// }, [input])


// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// document.documentElement.classList.toggle(
//   'dark',
//   localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
// )

// // Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// // Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')


import { useEffect, useState } from "react";

export default function useDarkSide() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
