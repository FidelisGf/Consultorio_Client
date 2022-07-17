<template>
  <div class="columns">
    <div class="column menu-top is-3">Consultório - XZ</div>
  </div>
  <div class="columns">
    <div class="column is-3">
      <nav class="princ">
        <aside class="menu">
          <p class="menu-label">Agenda</p>
          <ul class="menu-list">
            <li><router-link to="/agenda">Agendamento</router-link></li>
            <li><router-link to="/historico">Históricos</router-link></li>
          </ul>

          <p class="menu-label">Pessoas</p>
          <ul class="menu-list">
            <li>
              <a><router-link to="/paciente">Paciente</router-link></a>
            </li>
            <a><router-link to="/medico">Medico</router-link></a>
            <li>
              <a><router-link to="/secretaria">Secretaria</router-link></a>
            </li>
          </ul>

          <p class="menu-label">Administração</p>
          <ul class="menu-list">
            <li>
              <a
                ><router-link to="/especialidade">Especialidade</router-link></a
              >
            </li>
            <li>
              <a><router-link to="/convenio">Convenio</router-link></a>
            </li>
          </ul>
        </aside>
      </nav>
    </div>
    <div class="column is-9 conteudo">
      <router-view> </router-view>
    </div>
  </div>
</template>

<style lang="scss">
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.menu {
  background-color: #dddfe0;
}
.princ {
  background-color: #dddfe0;
}
</style>
