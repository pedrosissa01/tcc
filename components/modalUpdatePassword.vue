<script setup>
const props = defineProps({
  isOpen: Boolean
})

const isOpen = ref(props.isOpen)

const deleteStatus = ref(false)

const closedModal = () => {
  props.isOpen = false
  isOpen.value = false
  emit('closed')
}
</script>
<template>
    <UModal v-model="isOpen" class="bg-slate-900">
        <UCard :ui="{ ring: '', divide: 'divide-y divide-slate-900', overlay: {background: 'bg-slate-800'} }" class="bg-slate-800">
            <template #header>
                <div class="flex justify-between">
                    <h3 class="font-bold text-white">
                        Atualizar Senha
                    </h3>
                    <div class="flex justify-end items-center">
                        <Icon name="material-symbols:cancel-rounded" class="mr-1 text-orange-500 cursor-pointer" @click="closedModal()"/>
                    </div>
                </div>
                
            </template>

            <form class="space-y-4" action="#">
                
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-white">Nova Senha</label>
                    <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required />
                </div>
                <div>
                    <label for="password_confirmar" class="block mb-2 text-sm font-medium text-white">Confirmação da Senha</label>
                    <input type="password" name="password_confirmar" id="password_confirmar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="••••••••" required />
                </div>
                <button type="submit" class="w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Atualizar Senha</button>
            </form>
            <!-- <template #footer>
            <Placeholder class="h-8" />
            </template> -->
        </UCard>
    </UModal>
</template>