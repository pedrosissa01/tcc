<script setup>
useHead({
    title: 'MetaVerso - Admin - Noticias',
})

definePageMeta({
    layout: "admin",
    name: "MetaVerso - Admin - Noticias",
})

const isOpenDelete = ref(false)
const key = ref(1)
</script>
<template>
    <div>
        <div class="bg-white p-2 rounded-lg flex justify-between">
            <form>   
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input class="block w-80 p-1 ps-10 text-sm text-black border border-slate-900 rounded-lg bg-gray-10 focus:ring-orange-500 focus:border-orange-500" placeholder="Pesquisar" required />
                </div>
            </form>
            <div class="flex justify-end">
                <NuxtLink to="/admin/novo">
                    <button type="button" class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm px-4 py-1.5 text-center">Cadastrar Projeto</button>
                </NuxtLink>
            </div>
        </div>
        <div class="mt-4 bg-white h-[calc(100vh-270px)] md:overflow-hidden md:hover:overflow-y-visible">
            <div>
                <div class="relative overflow-x-auto rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-black uppercase bg-gray-200">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Titulo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Categoria
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Autor
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white even:bg-gray-200 border-b">
                                <th scope="row" class="px-6 py-4 font-medium underline decoration-cyan-700 text-cyan-700 whitespace-nowrap cursor-pointer">
                                    Noticia 01
                                </th>
                                <td class="px-6 py-4">
                                    <span class="text-orange-500 bg-orange-300/20 text-xs font-medium me-2 px-2.5 py-0.5 rounded border mb-2 border-orange-500">
                                        Esportes 
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    Saul R. S. De Souza
                                </td>
                                <td class="px-6 py-4">
                                    07/09/2022
                                </td>
                                <td class="px-6 py-4">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2">
                                        <option>Em Análise</option>
                                        <option>Postado</option>
                                        <option selected>Reprovado</option>
                                    </select>
                                </td>
                                <td class="px-6 py-4 flex">
                                    <NuxtLink to="/admin/novo/10">
                                        <Icon name="material-symbols:edit-square" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    </NuxtLink>
                                    <Icon @click="isOpenDelete = true, key++" name="material-symbols:delete-rounded" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10" />
                                </td>
                            </tr>
                            <tr class="odd:bg-white even:bg-gray-50 border-b">
                                <th scope="row" class="px-6 py-4 font-medium underline decoration-cyan-700 text-cyan-700 whitespace-nowrap cursor-pointer">
                                    Noticia 02
                                </th>
                                <td class="px-6 py-4">
                                    <span class="text-sky-500 bg-sky-300/20 text-xs font-medium me-2 px-2.5 py-0.5 rounded border mb-2 border-sky-500">
                                        Futebol 
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    João A. P. da Costa
                                </td>
                                <td class="px-6 py-4">
                                    04/09/2022
                                </td>
                                <td class="px-6 py-4">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2">
                                        <option selected>Em Análise</option>
                                        <option>Postado</option>
                                        <option>Reprovado</option>
                                    </select>
                                </td>
                                <td class="px-6 py-4 flex">
                                    <NuxtLink to="/admin/novo/10">
                                        <Icon name="material-symbols:edit-square" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    </NuxtLink>
                                    <Icon @click="isOpenDelete = true, key++" name="material-symbols:delete-rounded" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10" />
                                </td>
                            </tr>
                            <tr class="odd:bg-white even:bg-gray-50 border-b">
                                <th scope="row" class="px-6 py-4 font-medium underline decoration-cyan-700 text-cyan-700 whitespace-nowrap cursor-pointer">
                                    Noticia 03
                                </th>
                                <td class="px-6 py-4">
                                    <span class="text-emerald-500 bg-emerald-300/20 text-xs font-medium me-2 px-2.5 py-0.5 rounded border mb-2 border-emerald-500">
                                        Educação 
                                    </span>
                                </td>
                                <td class="px-6 py-4">
                                    Silvio Pedro Augusto
                                </td>
                                <td class="px-6 py-4">
                                    04/09/2022
                                </td>
                                <td class="px-6 py-4">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2">
                                        <option>Em Análise</option>
                                        <option selected>Postado</option>
                                        <option>Reprovado</option>
                                    </select>
                                </td>
                                <td class="px-6 py-4 flex">
                                    <NuxtLink to="/admin/novo/10">
                                        <Icon name="material-symbols:edit-square" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    </NuxtLink>
                                    <Icon @click="isOpenDelete = true, key++" name="material-symbols:delete-rounded" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <ModalDeleteNoticia :isOpen="isOpenDelete" :key="key" @closed="isOpenDelete = false, key++"/>
</template>