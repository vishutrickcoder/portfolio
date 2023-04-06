document.addEventListener("DOMContentLoaded" , ()=>{

    const themePreferenceDark =  window.matchMedia("(prefers-color-scheme : dark)")
    
    const getOSThemePref = () => window.matchMedia("(prefers-color-scheme : dark)").matches? "dark" : "light"
    

    const getThemeFromLocalStorage = () =>{
        return localStorage.getItem("theme");

    }


    const checkThemePreference = () =>{
        const defaultTheme = getOSThemePref();
        const currentTheme = getThemeFromLocalStorage();
        if(currentTheme === "dark"){
            document.body.classList.toggle("dark-theme")
        }else if(currentTheme ==="light"){
            document.body.classList.toggle("light-theme")

        }

        setButtonText(currentTheme?? defaultTheme)
    }

    const setButtonText = (theme) => {
        themeSwitcher.textContent = theme === "dark" ? "Light" : "Dark";
    }

    const switchTheme = ()=>{
        let theme;
        if(themePreferenceDark.matches){
            document.body.classList.toggle("light-theme")
            theme = document.body.classList.contains("light-theme") ? "light" : "dark"
        }else{
            document.body.classList.toggle("dark-theme");
            theme = document.body.classList.contains("dark-theme") ? "dark" : "light"
        }
        localStorage.setItem("theme" , theme)
        setButtonText(theme)
    }

    const themeSwitcher = document.getElementById("theme-switcher");
    
    themeSwitcher.addEventListener("click",switchTheme)
    
checkThemePreference();    
})