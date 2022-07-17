import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/historico",
    name: "historico",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HistoricoView.vue"),
  },
  {
    path: "/especialidade",
    name: "especialidade",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EspecialidadeView.vue"),
  },
  {
    path: "/especialidade/cadastrar",
    name: "especialidade-cadastrar",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Cadastros/EspecialidadeCad.vue"
      ),
  },
  {
    path: "/especialidade/formulario/:model/:id",
    name: "especialidade-detalhar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "form" */ "../views/Detail/DetailEspecialidade.vue"
      ),
  },
  {
    path: "/especialidade/formulario/:model/:id",
    name: "especialidade-editar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "form" */ "../views/Editar/EditarEspecialidade.vue"
      ),
  },
  {
    path: "/convenio",
    name: "convenio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ConvenioView.vue"),
  },
  {
    path: "/convenio/cadastrar",
    name: "convenio-cadastro",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Cadastros/ConvenioCad.vue"
      ),
  },
  {
    path: "/convenio/formulario/:model/:id",
    name: "convenio-detalhar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "form" */ "../views/Detail/DetailConvenio.vue"
      ),
  },
  {
    path: "/convenio/formulario/:model/:id",
    name: "convenio-editar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "form" */ "../views/Editar/EditarConvenio.vue"
      ),
  },
  {
    path: "/paciente",
    name: "paciente",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PacienteView.vue"),
  },
  {
    path: "/paciente/cadastrar",
    name: "paciente-cadastrar",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Cadastros/PacienteCad.vue"
      ),
  },
  {
    path: "/paciente/formulario/:model/:id",
    name: "paciente-editar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Editar/EditarPaciente.vue"
      ),
  },
  {
    path: "/paciente/formulario/:model/:id",
    name: "paciente-detalhar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "form" */ "../views/Detail/DetailPaciente.vue"
      ),
  },
  {
    path: "/secretaria",
    name: "secretaria",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SecretariaView.vue"),
  },
  {
    path: "/secretaria/cadastrar",
    name: "secretaria-cadastrar",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Cadastros/SecretariaCad.vue"
      ),
  },
  {
    path: "/secretaria/formulario/:model/:id",
    name: "secretaria-editar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Editar/EditarSecretaria.vue"
      ),
  },
  {
    path: "/secretaria/formulario/:model/:id",
    name: "secretaria-detalhar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "form" */ "../views/Detail/DetailSecretaria.vue"
      ),
  },
  {
    path: "/medico",
    name: "medico",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MedicoView.vue"),
  },
  {
    path: "/medico/cadastrar",
    name: "medico-cadastrar",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Cadastros/MedicoCad.vue"
      ),
  },
  {
    path: "/medico/formulario/:model/:id",
    name: "medico-detalhar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(/* webpackChunkName: "form" */ "../views/Detail/DetailMedico.vue"),
  },
  {
    path: "/medico/formulario/:model/:id",
    name: "medico-editar",
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Editar/EditarMedico.vue"
      ),
  },
  {
    path: "/agenda",
    name: "agenda",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AgendaView.vue"),
  },
  {
    path: "/agenda/cadastrar",
    name: "agenda-cadastrar",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/Cadastros/AgendaCad.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
