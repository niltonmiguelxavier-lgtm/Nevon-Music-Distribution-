// script.js

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;

    // Função para redirecionar utilizadores não autenticados
    const protectPage = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session && (currentPath.includes("dashboard.html") || currentPath.includes("admin.html"))) {
            window.location.href = "login.html";
        }
        if (session && (currentPath.includes("login.html") || currentPath.includes("register.html"))) {
            window.location.href = "dashboard.html";
        }
    };

    protectPage();

    // Lógica de Login
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = loginForm.querySelector("#email").value;
            const password = loginForm.querySelector("#password").value;
            const errorMessage = document.getElementById("login-error");

            const { error } = await supabase.auth.signInWithPassword({ email, password });

            if (error) {
                errorMessage.textContent = error.message;
            } else {
                window.location.href = "dashboard.html";
            }
        });
    }

    // Lógica de Registo
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const email = registerForm.querySelector("#email").value;
            const password = registerForm.querySelector("#password").value;
            const errorMessage = document.getElementById("register-error");

            const { error } = await supabase.auth.signUp({ email, password });

            if (error) {
                errorMessage.textContent = error.message;
            } else {
                alert("Verifique o seu email para confirmar o registo!");
                window.location.href = "login.html";
            }
        });
    }

    // Lógica de Logout (adicionar a um botão de logout no dashboard/admin)
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
        logoutButton.addEventListener("click", async () => {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error("Erro ao fazer logout:", error.message);
            } else {
                window.location.href = "index.html";
            }
        });
    }

    // Exemplo de como obter a sessão do utilizador (pode ser usado no dashboard)
    const getUserSession = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            console.log("Utilizador autenticado:", session.user);
            // Aqui pode-se carregar dados específicos do utilizador
        } else {
            console.log("Nenhum utilizador autenticado.");
        }
    };

    // Chamar getUserSession se estiver numa página protegida (ex: dashboard)
    if (currentPath.includes("dashboard.html") || currentPath.includes("admin.html")) {
        getUserSession();
    }
});
