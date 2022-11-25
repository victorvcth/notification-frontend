const unReadMessages = document.querySelectorAll('.unread')
const unread = document.getElementById("notification")
const markAll = document.getElementById("mark_all")

unread.innerText = unReadMessages.length;

unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread")
        unread.innerText = newUnreadMessages.length
    })
})

markAll.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
        message.classList.remove("unread")
    })
    const newUnreadMessages = document.querySelector(".unread")
    unread.innerText = newUnreadMessages.length;
})