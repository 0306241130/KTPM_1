const VALID_USERNAME = "admin";
const VALID_PASSWORD = "admin123";

const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");
const privatePage = document.getElementById("privatePage");

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const loginMessage = document.getElementById("loginMessage");

const welcomeUser = document.getElementById("welcomeUser");

function showPage(page) {
    loginPage.classList.add("hidden");
    homePage.classList.add("hidden");
    privatePage.classList.add("hidden");

    page.classList.remove("hidden");
}

function isLoggedIn() {
    return sessionStorage.getItem("isLoggedIn") === "true";
}

function clearErrors() {
    usernameError.textContent = "";
    passwordError.textContent = "";
    loginMessage.textContent = "";
    loginMessage.className = "message";
}

function validateInput(username, password) {
    let valid = true;

    if (username === "") {
        usernameError.textContent = "Vui lòng nhập Username.";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Vui lòng nhập Password.";
        valid = false;
    }

    // Username không được chứa khoảng trắng ở đầu/cuối
    if (username !== username.trim()) {
        usernameError.textContent = "Username không được có khoảng trắng ở đầu hoặc cuối.";
        valid = false;
    }

    // Username chỉ cho phép chữ, số và dấu gạch dưới
    if (username !== "" && !/^[a-zA-Z0-9_]+$/.test(username)) {
        usernameError.textContent = "Username chứa ký tự không hợp lệ.";
        valid = false;
    }

    // Giới hạn độ dài
    if (username.length > 30) {
        usernameError.textContent = "Username không được vượt quá 30 ký tự.";
        valid = false;
    }

    if (password.length > 50) {
        passwordError.textContent = "Password không được vượt quá 50 ký tự.";
        valid = false;
    }

    return valid;
}

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!validateInput(username, password)) {
        loginMessage.textContent = "Dữ liệu không hợp lệ.";
        return;
    }

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("username", username);

        loginMessage.textContent = "Đăng nhập thành công!";
        loginMessage.classList.add("success");

        welcomeUser.textContent = username;

        setTimeout(() => {
            showPage(homePage);
        }, 300);
    } else {
        loginMessage.textContent = "Username hoặc Password không đúng.";
    }
});

function logout() {
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("username");

    usernameInput.value = "";
    passwordInput.value = "";
    clearErrors();

    showPage(loginPage);
}

// document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("privateLogoutBtn").addEventListener("click", logout);

document.getElementById("privateBtn").addEventListener("click", function () {
    if (!isLoggedIn()) {
        alert("Bạn chưa đăng nhập. Không được phép truy cập.");
        showPage(loginPage);
        return;
    }

    showPage(privatePage);
});

document.getElementById("backHomeBtn").addEventListener("click", function () {
    if (isLoggedIn()) {
        showPage(homePage);
    } else {
        showPage(loginPage);
    }
});

// Kiểm tra trạng thái khi Refresh
window.addEventListener("load", function () {
    if (isLoggedIn()) {
        welcomeUser.textContent = sessionStorage.getItem("username") || VALID_USERNAME;
        showPage(homePage);
    } else {
        showPage(loginPage);
    }
});

// Chặn thao tác Back về trang bảo mật sau Logout.
// pageshow được dùng vì trình duyệt có thể lấy trang từ BFCache.
window.addEventListener("pageshow", function () {
    if (!isLoggedIn() && !loginPage.classList.contains("hidden")) {
        showPage(loginPage);
    }
});
