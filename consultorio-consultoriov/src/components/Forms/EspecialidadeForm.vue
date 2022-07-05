<template>
    <h1 class="title is-1">Cadastro de Especialidade</h1>
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
            <input class="button is-link is-light" type="submit" value="Cadastrar Especialidade" @click="onClickCadastrar()">
        </div>
        <div class="control">
            <router-link to="/especialidade"><input class="button is-link" type="submit" value="Voltar"></router-link>
        </div>   
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {Especialidade} from '@/model/especialidade.entity.model'
import {Notification} from '@/model/notification'
import {EspecialidadeClient} from '@/client/especialdiade.client'

export default class EspecialidaeForm extends Vue {
    private especialidadeClient !: EspecialidadeClient
    private especialidade : Especialidade = new Especialidade();
    private notification : Notification = new Notification();


    private readonly id!: number

    private readonly model!: string

    public mounted() :void{
        this.especialidadeClient = new EspecialidadeClient()
        console.log(this.id)
        console.log(this.model)
    }


    private onClickCadastrar(){
        this.especialidadeClient.cadastrar(this.especialidade).then(
            sucess =>{
                this.notification = this.notification.new(true, 'notification is-sucess', 'Especialidade Cadastrada com sucesso !!')
                this.onClickLimpar()
            }, error =>{
                this.notification = this.notification.new(true, 'notification is-danger', 'Error' + error)
                this.onClickLimpar()
            }
        )
    }
    private onClickLimpar(){
        this.especialidade = new Especialidade()
    }

    private onClickFecharNotificacao(){
        this.notification = new Notification()
    }


  
}
</script>
<style lang="scss">
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
