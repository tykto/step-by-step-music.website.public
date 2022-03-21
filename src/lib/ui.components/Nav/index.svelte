<script type="ts">
  export let active = null;
  let showMenu = false;

  const handleMenuClick = () => (showMenu = !showMenu);
</script>

<nav class="fixed w-full bg-mineshaft md:bg-guitar bg-no-repeat md:bg-guitarpos1 xl:bg-guitarpos2 z-10">
  <div class="flex xl:justify-center h-21 md:h-25">
    <div class="flex items-center w-full xl:w-4/5 2xl:w-3/5 pl-1 md:pl-3 xl:pl-0">
      <a class="w-48 h-20 text-0 bg-logo bg-no-repeat" href="/">Step by Step Music</a>
      <div class="hidden md:flex self-end font-chantroman text-xl text-white space-x-8 mb-2 ml-5">
        <a class="hover:text-brightred" class:text-brightred={active === 'schools'} href="schools">SCHOOLS</a>
        <a class="hover:text-brightred" class:text-brightred={active === 'parents'} href="parents">PARENTS</a>
        <a class="hover:text-brightred" class:text-brightred={active === 'contact'} href="contact">CONTACT</a>
      </div>
    </div>
    <div class="absolute right-0 flex items-center md:hidden">
      {#if showMenu === true}
        <button
          type="button"
          class="inline-flex items-center justify-center m-4 p-2 text-brightred hover:text-white hover:bg-mineshaft-100 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={handleMenuClick}
        >
          <i class="fa-solid fa-xmark fa-2xl" />
          <span class="sr-only">Open main menu</span>
        </button>
      {:else}
        <button
          type="button"
          class="inline-flex items-center justify-center m-4 p-2 text-brightred hover:text-white hover:bg-mineshaft-100 focus:outline-none"
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={handleMenuClick}
        >
          <i class="fa-solid fa-bars fa-2xl" />
          <span class="sr-only">Open main menu</span>
        </button>
      {/if}
    </div>
  </div>
  <div id="mobile-menu" class:hidden={!showMenu} class="md:hidden font-chantroman text-xl text-white space-y-2 ml-5 mt-5">
    <a class="block hover:text-brightred" class:text-brightred={active === 'schools'} href="schools">SCHOOLS</a>
    <a class="block hover:text-brightred" class:text-brightred={active === 'parents'} href="parents">PARENTS</a>
    <a class="block hover:text-brightred" class:text-brightred={active === 'contact'} href="contact">CONTACT</a>
  </div>
</nav>
