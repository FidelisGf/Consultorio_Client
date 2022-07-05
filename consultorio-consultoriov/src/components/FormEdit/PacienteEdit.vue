<template>
    <h1 class="title is-1">Edição de Paciente</h1>
    <div class="field">
        <div class="control">
            <input class="input nome is-success" type="text" placeholder="Nome" value="Gabriel Fidelis">
        </div>
         <div class="control">
            <input class="input telefone is-success" type="tel" placeholder="Telefone">
        </div>
        <div class="control">
            <input class="input celular is-success" type="tel" placeholder="Celular">
        </div>
        <div class="control">
            <input class="input nacionalidade is-success" type="text" placeholder="Nacionalidade">
        </div>
        <div class="control">
            <input class="input cpf is-success" type="text" placeholder="Cpf">
        </div>
         <div class="control">
            <input class="input rg is-success" type="text" placeholder="Rg">
        </div>
         <div class="control">
            <input class="input email is-success" type="email" placeholder="E-mail">
        </div>
         <div class="control">
            <input class="input login is-success" type="text" placeholder="Login">
        </div>
        <div class="control">
            <input class="input senha is-success" type="password" placeholder="Senha">
        </div>
        <div class="field">
            <div class="control">
                <label class="label">Sexo</label>
                <div class="select is-rounded is-primary">
                <select aria-placeholder="sexo">
                    <option>Masculino</option>
                    <option>Feminino</option>
                    <option>Outros</option>
                </select>
                </div>
            </div>
        </div>
        <div class="control">
            <input class="input nCartao is-success" type="text" placeholder="Nº do Cartão">
        </div>
        <div class="field">
            <div class="control">
                <label class="label">Tipo Atendimento</label>
                <div class="select is-rounded is-primary">
                <select aria-placeholder="sexo">
                    <option>Privado</option>
                    <option>Convenio</option>
                </select>
                </div>
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label class="label">Convenio</label>
                <div class="select is-rounded is-primary">
                <select aria-placeholder="sexo">
                    <option>Conv A</option>
                    <option>Nenhum</option>
                </select>
                </div>
            </div>
        </div>
        <div class="control">
            <input class="button is-primary is-link" type="submit" value="Editar Paciente">
        </div>
        <div class="control">
            <input class="button is-primary is-primary" type="submit" value="Voltar">
        </div>
        
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';


export default class PacienteEdit extends Vue {
  
}
</script>
<style>
    @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
    .control{
        margin-top: 10px;
    }
    .input{
        width: 25%;
        border-radius: 20px;
    }
    .dp{
        width: 25%;
        border-radius: 20px;
    }
    .button{
        border-radius: 20px;
    }
</style>