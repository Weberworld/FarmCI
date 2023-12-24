<template>
    <!-- Nav Header -->
    <!-- <div class="sticky flex px-8 sm:px-24 top-0 text-white bg-inhert text-right items-center justify-between w-full"
        :class="AppColors.bg_success">

        <TopNavBarComponent />

    </div> -->

    <main class="h-auto w-screen space-y-12 sm:space-y-16">

        <!-- Hero Section -->
        <PaddedSectionComponent :sectionId="'hero'" class="h-auto w-screen m-auto">
            <!-- Background -->
            <div class="relative">
                <div class="group">

                    <div class="flex-col-reverse flex sm:flex-row space-x-7">
                        <!-- Left hero section -->
                        <div class="flex-col space-y-3 pb-8 animate-pulse text-center sm:text-left w-full">
                            <p
                                class="font-bold font-serif text-5xl sm:text-6xl text-white leading-snug max-w-sm sm:max-w-lg">
                                Easy
                                <span class="text-yellow-500 animate-pulse">Farming</span> with the simplest way
                            </p>

                            <div class="py-6 sm:max-w-md">
                                <p class="text-normal sm:text-md text-white">Agriculture Information, marketing,
                                    connect ,
                                    logistics and
                                    investment. Agricultural has startd developing to eradicate poverty be part of this !!!
                                </p>
                            </div>

                            <!-- Next Button -->
                            <div class="mt-10 text-center flex space-x-2 items-center justify-center">
                                <p class="font-semibold text-lg" :class="AppColors.text_white">Join Us</p>

                                <div
                                    class="w-12 rounded-full bg-yellow-500 shadow-lg shadow-white border border-solid p-2 text-center animate-bounce">
                                    <router-link :to="{ name: 'login' }">
                                        <MenuIconComponent :iconPath="AppIcons.arrow_left_icon"
                                            class="text-3xl items-center font-bold text-center m-auto animate-pulse" />

                                    </router-link>
                                </div>
                            </div>
                        </div>

                        <!-- Right hero Section.  -->
                        <div class="absolute opacity-50 w-full items-end m-auto sm:opacity-100 sm:relative ">
                            <div class="flex-row justify-between">

                                <ImageBuilderComponent :imgPath="'images/clean_leaf.png'" :height="'h-1/3'" :width="'w-2/3'"
                                    class="items-end justify-end self-end text-right" />
                                <ImageBuilderComponent :imgPath="'images/clean-network.png'" :height="'h-2/3'"
                                    :width="'w-full'" class="items-end justify-end self-end text-right " />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </PaddedSectionComponent>


        <!-- About Section -->
        <PaddedSectionComponent :sectionId="'about'" :bgColor="'light'">

            <div class="sm:grid sm:grid-cols-3 items-center text-center text-gray-700">
                <p class="text-lg font-serif font-semibold leading-10 sm:col-span-2">
                    We are <strong class="p-2 rounded-lg">Farm Central Intelligence</strong>. We help in increasing farmers
                    productivity by providing valueable and helpful input resources
                </p>

                <!-- Link to whatsapp -->
                <LinkToExternalServerComp :linkTo="'google.com'">
                    <div class="py-5 sm:py-0 animate-pulse">
                        <TextButtonComponent :text="'Get in Touch'" :type="'primary'" :padding="'py-3'" />
                    </div>
                </LinkToExternalServerComp>

            </div>

        </PaddedSectionComponent>


        <!-- Aims Section -->
        <PaddedSectionComponent :sectionId="'aims'" :headerText="'Our Aims'">

            <div class="space-y-2 animate-pulse">
                <p>
                    We aim to not just educate farmers on agricultural practices but to also provide them with necessary
                    tools and resources that will help them take action.
                </p>
                <p>
                    Furthermore, we are using smart tracking data powered by our pateneted IVR solutuons to track farmers
                    and communicate to them in the effective application and utilisation of these inputs to yield better
                    results.
                </p>
                <p>
                    Through the use of smart tracking data, we are able to gather valueale insights into the farming
                    process. By taking key metrics such as soil moisture levels, temperature and crop growth patterns. We
                    can provide farmers with personalized recommendations for optimal input application.
                </p>
            </div>
        </PaddedSectionComponent>



        <!-- Service Section -->
        <PaddedSectionComponent :headerText="'Our Services'" :sectionId="'services'" :bgColor="'light'">
            <ul class="space-y-12 sm:space-y-0 sm:grid  sm:grid-cols-3 sm:gap-7 mx-auto">
                <ServiceCardComponent :serviceImg="'images/bank.jpg'" :serviceName="'Farms Bank'"
                    :serviceDetails="'Farm Bank is the outreach part of FarmcCI that focused on engaging and educating farmer\'s on best agricultural practices and application through partnerships with differnt stakeholders like cooperative, government etc, through this we are able to aggregate farmers data to build an updated and tailor database accessible to our third party partners'" />

                <ServiceCardComponent :serviceImg="'images/wallet2.png'" :serviceName="'Pay CI'"
                    :serviceDetails="'PayCI is a resulting parternship between FarmCI and MoMo to provide voice enabled mobile wallet to farmers that helps them undertake financial transactions or enabled mobile wallet to farmers that helps them undertake financial transactions or savings / repaying their loan, it\'s our intiatives to help bank the unbanked rural farmers through a very simple IVR banking wallet'" />

                <ServiceCardComponent :serviceImg="'images/fertilizer.png'" :serviceName="'Inputs Bank'"
                    :serviceDetails="'Inputs bank is the largest collection and providers of improvised farm seeds, fertilizer and agrochemical product in Africa, we work with research institute and agricultural laboratory to source each inputs directly from our manufacturing partners, test them independently to vets it\'s standardised quality/effect and through our channel of distribution we are able to provide local farmers with them either at upfront payment or through input financing'" />
            </ul>

            <!-- View all button -->
            <div class="py-5">
                <TextButtonComponent :text="'View All ...'" :type="'yellow'" class="animate-pulse mx-auto"
                 :padding="'py-3'" />
            </div>
        </PaddedSectionComponent>



        <!-- Partners Sections -->
        <PaddedSectionComponent :sectionId="'partners'" :headerText="'Our Partners'">
            <div class="grid grid-cols-3 gap-4 sm:gap-8">
                <ClientDisplayCardComponent :clientImg="'images/Afex.png'" :clientName="'Afex'" />
                <ClientDisplayCardComponent :clientImg="'images/afrimash.png'" :clientName="'Afrimash'" />
                <ClientDisplayCardComponent :clientImg="'images/comx.png'" :clientName="'COMX'" />
                <ClientDisplayCardComponent :clientImg="'images/iita.png'" :clientName="'IITA'" />
                <ClientDisplayCardComponent :clientImg="'images/paystack.png'" :clientName="'Paystack'" />
                <ClientDisplayCardComponent :clientImg="'images/soilless.png'" :clientName="'Soilless FarmLab'" />
            </div>
        </PaddedSectionComponent>


        <div class="px-8 sm:px-12">
            <hr>
        </div>



        <!-- Features -->
        <PaddedSectionComponent :headerText="'Why Choose us?'" :sectionId="'features'" :bgColor="'light'">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <TestimonialCardComponent :text="'IVR Support'" :imgPath="'images/features/ivr_sys.jpg'"
                    :desText="'We provide an IVR support system which our clients can dial up and receive helpful farm inputs instructions in their desired language. '" />

                <TestimonialCardComponent :text="'Connect Farmers'" :imgPath="'images/features/connection.jpg'"
                    :desText="'We serve as an intermediary to connect our together our clients and local farmers around them'" />

                <TestimonialCardComponent :text="'Farmers Insurance'" :imgPath="'images/features/insurance.jpg'"
                    :desText="'Provision of farmers insurance in form of loan to support our farmers for input acqusition'" />

                <TestimonialCardComponent :text="'24/7 hours support'" :imgPath="'images/features/customer_support.jpg'"
                    :desText="'Our Customer sevice is available for full support 24 hours all day'" />


            </div>
        </PaddedSectionComponent>



        <!-- Footer Section -->
        <PaddedSectionComponent :class="[AppColors.bg_primary, AppColors.text_white]">
            <FooterComponent />
        </PaddedSectionComponent>
    </main>
</template>


<script setup>
import AppIcons from '@/appDependencies/appIcons';
import AppColors from '@/appDependencies/appColors';
// import TopNavBarComponent from '@/components/navigations/TopNavBarComponent.vue';
import MenuIconComponent from "@/components/utils/MenuIconComponent.vue"
// import ProductCardComponent from '@/components/cards/ProductCardComponent.vue';
// import HeaderTextComponent from '@/components/texts/HeaderTextComponent.vue';
import TextButtonComponent from "@/components/buttons/TextButtonComponent.vue"
import PaddedSectionComponent from "@/components/utils/PaddedSectionComponent.vue"
import TestimonialCardComponent from '@/components/cards/TestimonialCardComponent.vue';
import ServiceCardComponent from "@/components/cards/ServiceCardComponent.vue"
import FooterComponent from "@/components/utils/FooterComponent.vue"
import ImageBuilderComponent from "@/components/utils/ImageBuilderComponent.vue"
import LinkToExternalServerComp from "@/components/external_links/LinkToExternalServerComp.vue"
import ClientDisplayCardComponent from "@/components/cards/ClientDisplayCardComponent.vue"
</script>