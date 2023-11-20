if (!sessionStorage.ID_USUARIO) {
    if (document.getElementById('container_cadastro')) {
        container_cadastro.innerHTML = `
        <button class="btn btn-conectar px-corner" onclick="pagConectar()">
            <span>Conectar</span>
        </button>
        <button class="btn btn-cadastrar px-corner" onclick="pagCadastrar()">
            <span>Criar Conta</span>
        </button>`;
    }

    account_ul.innerHTML = `
        <li class="acc-link-item">
            <span><a href="login.html">faça login</a> ou <br><a href="cadastrar.html">cadastre-se!</a></span>
        </li>
    `;
} else {
    if (document.getElementById('container_cadastro')) {
        container_cadastro.innerHTML = `
            <div onclick="pagUsuario()" class="profile-wrap-upbar px-corner">
                <img class="profile-img px-circle" src="assets/img/icon/default.png" alt="">
                <span class="user-name">${sessionStorage.NOME_USUARIO}</span>
                <img class="down-arrow-white" src="assets/img/icon/down-arrow-white.png" alt="">
            </div>
        `;
    }

    account_ul.innerHTML = `
    <li onclick="pagUsuario()" class="account-item account-item-logged">
        <img class="profile-img px-circle" src="assets/img/icon/default.png" alt="">
        <span class="user-name">${sessionStorage.NOME_USUARIO}</span>
        </li>
    <li onclick="sair()" class="account-item account-item-logged"><img src="assets/img/icon/logout.png" alt="">Sair</li>
    `;
}