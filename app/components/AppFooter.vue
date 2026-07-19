
<template>
  	<UFooter class="bg-abyan-blue-500 px-16">
    	<template #left>
			<div class="flex h-6 w-auto gap-2">
            	<img
					src="/logos/abyan-logo-white-cropped.png"
					class="w-auto h-auto object-contain"
					alt="Abyan Logo"
			  	></img>
				<span class=" text-abyan-white text-xl font-bold">ABYAN</span>
            </div>
    	</template>

    	<template #right>
      		<p class="text-abyan-white text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    	</template>
	</UFooter>
</template>
