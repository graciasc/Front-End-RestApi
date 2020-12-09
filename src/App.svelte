<script>
  // import { Router } from "svelete-router-spa";
import { Router } from 'svelte-router-spa'
  import { routes } from './routes'
  export let currentRoute;
  let options = { gaPageviews: true}
  export let name;
</script>

<style global>
  @import "tailwindcss/base";

  @import "tailwindcss/components";

  @import "tailwindcss/utilities";

  #menu-toggle:checked + #menu {
    display: block;
  }
</style>

<main class="text-center  m-4 max-w-xs mx-auto sm:max-w-none">
  <div class="font-mono">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    <div class="bg-text-hue">
      <div class="lg:px-6 lg:py-2 py-2 px-4 border-b-2 border-white relative">
        <div class="lg:hidden float-right ">
          <label for="menu-toggle">
            <i class="fa fa-bars fa-2x cursor-pointer" />
          </label>
        </div>
        <input
          type="checkbox"
          id="menu-toggle"
          class="float-right mt-4 hidden" />
        <div class="hidden" id="menu">
          <nav class="cursor-pointer">
            <ul>
              <li class="hover:text-teal-400 font-mono font-thin"><a href="/Gracias">Gracias </a></li>
              <li class="hover:text-teal-400 font-mono font-thin"><a href="/Connor">Connor </a></li>
            </ul>
          </nav>
        </div>
        <div class="lg:inline lg:float-right hidden lg:text-xl -my-10">
          <button
            class="px-2 lg:font-thin lg:mt-3 border-transparent border-b-2
            hover:border-teal-600 focus:outline-none outline-none font-mono font-thin">
           <a href="/gracias">Gracias </a> 
          </button>
          <button
            class="px-2 border-transparent lg:mt-3 lg:font-thin border-b-2
            hover:border-teal-600 focus:outline-none outline-none font-mono font-thin" >
             <a href="/connor">Connor </a> 
          </button>
        </div>
      </div>
    </div>
  </div>
<Router {routes} {options} />

</main>
