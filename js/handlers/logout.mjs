function logout() {
    const logoutBtn = document.querySelector("#logout");
  
    logoutBtn.addEventListener("click" , () => {
        console.log("click")
  
        localStorage.clear()
    
        window.location.replace("/profile/logout/index.html")
    })
  }
  
  logout()