<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

const route = useRouter()

const options = ref({
  theme: "snow",
  modules: {
    toolbar: '#toolbar'
  },
})
</script>
<template>
    <div class="h-[calc(100vh-270px)] md:overflow-hidden md:hover:overflow-y-visible">
        <form class="space-y-4" action="#">
            <div>
                <label for="Titulo" class="block mb-2 text-sm font-medium text-gray-800">Titulo</label>
                <input name="titulo" id="titulo" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500" required />
            </div>
            <div>
                <label for="descricao" class="block mb-2 text-sm font-medium text-gray-800">Descrição</label>
                <textarea id="descricao" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black"></textarea>
            </div>
            <div class="grid grid-cols-4 gap-6">
                <div class="col-span-1">
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Clique para carregar</span> ou arraste e solte</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div> 
                </div>
                <div class="col-span-3 grid grid-cols-6 gap-4">
                    <div class="h-32 w-32 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">Imagem 01</div>
                    <div class="h-32 w-32 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">Imagem 02</div>
                    <div class="h-32 w-32 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">Imagem 03</div>
                    <div class="h-32 w-32 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">Imagem 04</div>
                    <div class="h-32 w-32 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">Imagem 05</div>
                    <div class="h-32 w-32 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">Imagem 06</div>
                    <div class="h-32 w-32 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">Imagem 07</div>
                    <div class="h-32 w-32 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">Imagem 08</div>
                </div>
            </div>
            <div>
                <label for="Categorias" class="block mb-2 text-sm font-medium text-gray-800">Categorias</label>
                <select id="Categorias" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
                    <option selected>Politica</option>
                    <option>Economia</option>
                    <option>Esportes</option>
                    <option>Tecnologia</option>
                    <option>Entreterimento</option>
                    <option>Ciência</option>
                    <option>Internacional</option>
                    <option>Policial</option>
                    <option>Eventos</option>
                </select>
            </div>
            <div>
                <label for="Conteudo" class="block mb-2 text-sm font-medium text-gray-800">Conteudo</label>
                <div class="w-full mb-4">
                    <div id="toolbar" class="flex border border-gray-200 rounded-t-lg bg-ed-gray-100">

                        <button class="ql-bold text-black"></button>
                        <button class="ql-italic text-black"></button>
                        <button class="ql-underline text-black"></button>

                        <button class="ql-code-block text-black"></button>

                        <button class="ql-image text-black"></button>
                        <button class="ql-video text-black"></button>
                        <button class="ql-link text-black"></button>
                    </div>
                    <QuillEditor 
                        :options="options"
                        contentType="html"
                        class="rounded-b-lg"/>
                </div>
            </div>
        </form>
    </div>
    <div class="flex items-center justify-end gap-2">
        <button type="button" class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm px-4 py-1.5 text-center">{{ route?.currentRoute?.value?.params?.id ? 'Editar' : ' Publicar' }}</button>
    </div>
</template>