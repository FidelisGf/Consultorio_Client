<template>
    <h1 class="title is-1">Editar Especialidade</h1>
    <div class="field">
        <div class="columns" v-if="notification.ativo">
            <div class="column is-12">
                <div :class="notification.classe">
                    <button @click="onClickFecharNotificacao()" class="delete" ></button>
                    {{ notification.mensagem }}
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-12 is-size-3">
                <label class="label">
                    <input v-model="especialidade.ativo" checked type="checkbox">
                    Ativar Especialidade
                </label>
            </div>
        </div>
        <div class="control">
            <input class="input nome" type="text" placeholder="Nome" v-model="especialidade.nome">
        </div>
        <div class="control">
            <input class="button is-link is-light" type="submit" value="Editar Especialidade" @click="onClickEditar()">
        </div>
        <div class="control">
            <router-link to="/especialidade"><input class="button is-link" type="submit" value="Voltar"></router-link>
        </div>   
    </div>
</template>

<script lang="ts">
    import { Vue } from 'vue-class-component';
    import { Especialidade } from '@/model/especialidade.entity.model'
    import { Notification } from '@/model/notification'
    import { EspecialidadeClient } from '@/client/especialdiade.client'
    import {Prop} from "vue-property-decorator";
    export default class EspecialidadeFormEditar extends Vue {
        private especialidadeClient!: EspecialidadeClient
        private especialidade : Especialidade = new Especialidade()
        private notification : Notification = new Notification()
        @Prop({type: Number, required: false})
        private readonly id!: number
        @Prop({type: String, default: false})
        private readonly model!: string
        public mounted(): void {
            this.especialidadeClient = new EspecialidadeClient()
            this.getEspecialidade()
        }
        private getEspecialidade(): void {
            this.especialidadeClient.findById(this.id)
                .then(
                    sucess => {
                    this.especialidade.id = sucess.id
                    this.especialidade.nome = sucess.nome
                    this.especialidade.ativo = sucess.ativo
                    this.especialidade.cadastro = sucess.cadastro
                    this.especialidade.atualizado = sucess.atualizado
                    },
                    error => console.log(error)
                )
        }
        private onClickEditar(): void {
            this.especialidadeClient.editar(this.especialidade)
                .then(
                    success => {
                    this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Editada com sucesso!!!')
                    this.onClickLimpar()
                    }, error => {
                    this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
                    this.onClickLimpar()
                    })
        }
        private onClickFecharNotificacao(): void {
            this.notification = new Notification()
        }
        private onClickLimpar(): void {
            this.especialidade = new Especialidade()
        }
    }
</script>
<style scoped>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    .control{
        margin-top: 10px;
    }
    .input{
        width: 50%;
        border-radius: 20px;
    }
    .button{
        border-radius: 20px;
    }
</style>