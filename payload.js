// FIT5003 B.2 — DevBank local test account
fetch("/profile", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
        email: "alice-xss-test@example.com"
    }).toString(),
    credentials: "same-origin"
})
.then(response => {
    console.log("Profile update status:", response.status);
})
.catch(error => {
    console.error("Profile update failed:", error);
});
