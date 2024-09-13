<template>
    <div>
        <div class="grid grid-cols-4 gap-6 mb-3">
            <div class="col-span-3">
                <MainCard />
            </div>
            <div>
                <div class="flex justify-between mb-3 ">
                    <h2 class="text-sm font-semibold text-black uppercase">
                        <span class="-mr-1 underline underline-offset-4 decoration-2 decoration-orange-500">
                            PO
                        </span>PULAR
                    </h2>
                    <div class="flex justify-end items-center hover:text-orange-500 text-sm hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-orange-500 cursor-pointer">
                        Ver mais
                    </div>
                </div>
                
                <CardLeftImage class="mb-1" />
                <CardLeftImage class="mb-1" />
                <CardLeftImage class="mb-1" />
                <CardLeftImage class="mb-1" />
            </div>
        </div>
        <div class="grid grid-cols-4 gap-3 mb-3">
            <div class="col-span-3">
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                    <span class="absolute px-5 font-medium text-gray-900 text-center bg-[#F9F9F9]">Últimas notícias</span>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <CardMainSecund />
                    <CardMainSecund />
                    <CardMainSecund />
                    <CardMainSecund />
                </div>
                <div class="mt-6">
                    <div class="bg-gray-500 font-bold text-white h-16 grid content-center justify-items-center rounded-lg">
                        ADS
                    </div>
                    <div class="grid grid-cols-2 gap-3 mt-6">
                        <div>
                            <h2 class="text-sm font-semibold text-black uppercase mb-3 mt-2">
                                <span class="-mr-1 underline underline-offset-4 decoration-2 decoration-orange-500">
                                    Lor
                                </span>em Ipsum
                            </h2>
                            <ol class="space-y-2 list-decimal list-inside">
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #HTML5
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #CSS3
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #JavaScript
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #jQuery
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #Bootstrap
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #Responsive
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #Autelrure
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #Volupetate
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #Veit
                                </li>
                                <li class="cursor-pointer hover:text-orange-500 hover:underline hover:underline-offset-4">
                                    #Reprehenderite
                                </li>
                            </ol>

                        </div>
                        <div>
                            <h2 class="text-sm font-semibold text-black uppercase mb-3 mt-2">
                                <span class="-mr-1 underline underline-offset-4 decoration-2 decoration-orange-500">
                                    Lor
                                </span>em Ipsum
                            </h2>
                            <CardLeftImage class="mb-2" />
                            <CardLeftImage class="mb-2" />
                            <CardLeftImage class="mb-2" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Destaque class="mb-2"/>
                <CardVideo class="mb-2"/>
                <Patrocinados />
            </div>
        </div>
        <div>
            <div class="inline-flex items-center justify-center w-full">
                <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <span class="absolute px-5 font-medium text-gray-900 text-center bg-[#F9F9F9]">Mais uma novidade</span>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <CardLeftImage class="mb-1" />
                <CardLeftImage class="mb-1" />
                <CardLeftImage class="mb-1" />
                <CardLeftImage class="mb-1" />
                <CardLeftImage class="mb-1" />
                <CardLeftImage class="mb-1" />
            </div>
        </div>
        <div>
            <div class="inline-flex items-center w-full">
                <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
                <span class="absolute pr-5 font-medium text-gray-900 bg-[#F9F9F9]">Mais uma novidade</span>
            </div>
            <div class="grid grid-cols-5 gap-3">
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
                <CardSmall />
            </div>
        </div>
    </div>
    
</template>