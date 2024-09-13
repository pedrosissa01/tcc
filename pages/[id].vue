<script setup>
useHead({
    title: 'MetaVerso - Noticia',
})

definePageMeta({
    layout: "default",
    name: "MetaVerso - Noticia",
})
</script>
<template>
    <div class="grid grid-cols-4 gap-3">
        <div>
            <div class="w-full mb-4 h-40 bg-gray-500 font-bold text-white grid content-center justify-items-center rounded-lg">
                ADS
            </div>
            <Destaque class="mb-3"/>
            <Patrocinados />
        </div>
        <div class="col-span-3">
            <h3 class="font-semibold text-4xl">
                Pellentesque Elementum Tellus Id Mauris Faucibus
            </h3>
            <div class="flex text-gray-500 text-xs mt-1">
                <p class="mr-2">
                    Postado em 3 de dezembro de 2024
                </p>
                •
                <p class="mx-2">
                    <span class="text-white text-xs font-medium px-2 py-0.5 rounded-md mb-2 bg-green-500">
                        Categoria 01
                    </span>
                </p>
                •
                <p class="ml-2">
                    Por <span class="text-orange-500">John Doe</span>
                </p>
            </div>
            <div class="mt-4 text-md">
                Pellentesque elementum tellus id mauris faucibus, id sagittis mauris rhoncus. Donec ac iaculis dui, id convallis mauris. Fusce faucibus purus eu risus pulvinar, vel rutrum velit hendrerit. Sed urna nunc, efficitur faucibus sollicitudin non.
            </div>
            <div class="mt-4 text-md inline-flex items-end w-full">
                <img class="rounded-lg w-full h-80 object-cover" src="~/assets/img/image-1.jpg" alt="" />
                <div class="absolute h-20 bg-black/40 w-[58.313rem] object-cover rounded-b-lg p-2 text-white">
                    <div class="font-bold">
                        Phasellus laculis quam sed Est Elementum Vel Ornare Ligula Venenatis
                    </div>
                    <div class="mt-2 text-xs">
                        10/10/2024 10:40
                    </div>
                </div>
            </div>
            <p class="leading-7 break-words whitespace-pre-wrap">
                Nulla facilisi. Aenean pharetra fringilla nunc a finibus. Nulla vitae pretium nunc. Pellentesque sagittis sollicitudin turpis id aliquam. Cras lobortis diam in nunc posuere, et malesuada sem gravida. Curabitur ornare massa id orci faucibus elementum. Phasellus pharetra, velit in egestas rutrum, metus dolor maximus massa, feugiat molestie eros mauris sit amet massa. Maecenas blandit diam lacus, in luctus nulla efficitur nec. Sed sit amet quam sit amet odio scelerisque vestibulum vel sit amet ante. Cras fringilla efficitur lacinia. Cras posuere, arcu id consequat ultrices, urna urna cursus massa, at sollicitudin elit lacus quis dui. In laoreet nulla a turpis blandit sollicitudin. Donec in risus eu lorem volutpat hendrerit quis non lorem. Nulla in metus ipsum. 
            </p>
            <p class="leading-7 break-words whitespace-pre-wrap mt-2">
                Etiam sit amet augue non velit aliquet consectetur. Proin gravida, odio in facilisis pharetra, neque enim aliquam eros, vitae gravida orci elit vel magna. Integer viverra a purus id gravida. Donec laoreet mi ac auctor ultricies. Pellentesque ullamcorper est et erat ullamcorper gravida. In hac habitasse platea dictumst. Pellentesque justo mauris, mollis at tortor ut, commodo venenatis elit. Curabitur suscipit pellentesque nunc, id tempus mi facilisis sed. Curabitur molestie eu odio vitae condimentum. Donec placerat tristique neque a blandit. Nullam commodo massa ut eros elementum, in suscipit libero aliquam.
            </p>
            <h3 class="mt-4 font-semibold text-black text-lg">
                Sed id sodales sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi.
            </h3>
            <p class="leading-7 break-words whitespace-pre-wrap mt-2">
                Nulla facilisi. Duis auctor fringilla sagittis. Fusce ornare, dui id consequat volutpat, nibh metus viverra nibh, vitae bibendum diam velit in libero. Sed dignissim quam sit amet nibh porttitor, non pellentesque metus tincidunt. Maecenas non velit sapien.
            </p>
            <p class="leading-7 break-words whitespace-pre-wrap mt-2 mb-2">
                Maecenas vel dolor sit amet ligula interdum tempor id eu ipsum. Suspendisse pharetra risus ut metus elementum pulvinar. Mauris eget varius tellus. Cras et lorem vel nunc gravida porttitor.
            </p>
            <i class="text-gray-500 pl-8">
                Free Responsive HTML5 & CSS3 Magazine Template
            </i>
            <p class="leading-7 break-words whitespace-pre-wrap mt-2">
                Ut est elit, vehicula tempus volutpat ut, sodales eget odio. Nunc placerat, orci ac iaculis feugiat, sem tellus efficitur tortor, mollis iaculis lacus ante nec risus. Sed consequat vehicula pretium.    
            </p>
            <div class="inline-flex items-center justify-center w-full my-3">
                <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <span class="absolute px-5 font-medium text-gray-900 text-center bg-[#F9F9F9]">Autor</span>
            </div>
            <div class="grid grid-cols-4 gap-3">
                <div class="grid content-center justify-items-center">
                    <img src="~/assets/img/12161348.jpg" class="object-cover h-32 w-32 rounded-full" alt="">
                </div>
                <div class="col-span-3">
                    <p class="text-xs text-gray-500">
                        WEB DEVELOPER
                    </p>
                    <p class="text-2xl">
                        John Doe
                    </p>
                    <p class="mt-3">
                        Nulla sagittis rhoncus nisi, vel gravida ante. Nunc lobortis condimentum elit, quis porta ipsum rhoncus vitae. Curabitur magna leo, porta vel fringilla gravida, consectetur in libero. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                    </p>
                </div>
            </div>
            <div class="inline-flex items-center justify-center w-full my-3">
                <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <span class="absolute px-5 font-medium text-gray-900 text-center bg-[#F9F9F9]">Ultimas Noticias</span>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <MainCard />
                <MainCard />
            </div>
        </div>

    </div>
</template>