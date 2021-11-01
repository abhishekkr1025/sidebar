const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const themeBtn = document.querySelector(".theme-btn");
const theme = document.querySelector(".theme");
const links = document.getElementsByClassName("links");
// const darkTheme = document.querySelectorAll(".dark-theme");
// console.log(darkTheme)
// const closeBtn = document.querySelector("")

sidebarToggle.addEventListener("click", () => {
    const styles = sidebar.classList;
    styles.toggle("show-sidebar");
})

closeBtn.addEventListener("click", () => {
    const styles = sidebar.classList;
    styles.remove("show-sidebar");
})

themeBtn.addEventListener("click",()=>{
  const styles = sidebar.classList;
  styles.toggle("dark-theme");
  const style = theme.classList;
  style.toggle("dark-theme");
  links.style.color = 'white'

})