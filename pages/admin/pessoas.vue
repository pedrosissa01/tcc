<script setup>
useHead({
    title: 'MetaVerso - Admin - Pessoas',
})

definePageMeta({
    layout: "admin",
    name: "MetaVerso - Admin - Pessoas",
})

const isOpenDelete = ref(false)
const isOpen = ref(false)
const isOpenPassword = ref(false)
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
                <button type="button" @click="isOpen = true, key++" class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-400 font-medium rounded-lg text-sm px-4 py-1.5 text-center">Cadastrar Usuário</button>
            </div>
        </div>
        <div class="mt-4 bg-white h-[calc(100vh-270px)] md:overflow-hidden md:hover:overflow-y-visible">
            <div>
                <div class="relative overflow-x-auto rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-black uppercase bg-gray-200">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Data
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Função
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white even:bg-gray-200 border-b">
                                <td class="px-6 py-4">
                                    Saul R. S. De Souza
                                </td>
                                <td class="px-6 py-4">
                                    07/09/2022
                                </td>
                                <td class="px-6 py-4">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2">
                                        <option selected>Admin</option>
                                        <option>Editor</option>
                                        <option>Usuário</option>
                                    </select>
                                </td>
                                <td class="px-6 py-4 flex">
                                    <Icon name="material-symbols:edit-square" @click="isOpen = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    <Icon name="material-symbols:delete-rounded" @click="isOpenDelete = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    <Icon name="solar:lock-password-bold" @click="isOpenPassword = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10" />
                                </td>
                            </tr>
                            <tr class="odd:bg-white even:bg-gray-50 border-b">
                                <td class="px-6 py-4">
                                    João A. P. da Costa
                                </td>
                                <td class="px-6 py-4">
                                    04/09/2022
                                </td>
                                <td class="px-6 py-4">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2">
                                        <option>Admin</option>
                                        <option selected>Editor</option>
                                        <option>Usuário</option>
                                    </select>
                                </td>
                                <td class="px-6 py-4 flex">
                                    <Icon name="material-symbols:edit-square" @click="isOpen = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    <Icon name="material-symbols:delete-rounded" @click="isOpenDelete = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    <Icon name="solar:lock-password-bold" @click="isOpenPassword = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10" />
                                </td>
                            </tr>
                            <tr class="odd:bg-white even:bg-gray-50 border-b">
                                <td class="px-6 py-4">
                                    Silvio Pedro Augusto
                                </td>
                                <td class="px-6 py-4">
                                    04/09/2022
                                </td>
                                <td class="px-6 py-4">
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2">
                                        <option>Admin</option>
                                        <option selected>Editor</option>
                                        <option>Usuário</option>
                                    </select>
                                </td>
                                <td class="px-6 py-4 flex">
                                    <Icon name="material-symbols:edit-square" @click="isOpen = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    <Icon name="material-symbols:delete-rounded" @click="isOpenDelete = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10 mr-2" />
                                    <Icon name="solar:lock-password-bold" @click="isOpenPassword = true, key++" class="text-gray-500 cursor-pointer hover:text-orange-500 h-10" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <ModalDeletePessoa :isOpen="isOpenDelete" :key="key" @closed="isOpenDelete = false, key++"/>
    <ModalCreateUpdatePessoa :isOpen="isOpen" :key="key" @closed="isOpen = false, key++"/>
    <ModalUpdatePassword :isOpen="isOpenPassword" :key="key" @closed="isOpenPassword = false, key++"/>
</template>