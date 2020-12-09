<script>
export let currentRoute;

</script>



<main>
  <div class="font-mono text-gray-800 ">
    <div class="text-center py-6">
      <h1 class="text-2xl">To Do List</h1>
      <h1 class="pt-4 text-red-500  font-bold text-lg">Create</h1>
    </div>
    
  
    <div class="text-center">
      <div class="">
        <label class="text-xl"> Name </label>
        <input class="border-b-2 outline-none" type="text" />
      </div>
      <div class="my-2">
        <label class="text-xl"> Priority </label>
        <input class="border-b-2 outline-none" type="text" />
      </div>
      <div class="my-2">
        <label class="text-xl"> Description </label>
        <input class="border-b-2 outline-none" type="text" />
      </div>
      <div class="py-6">
        <button class="bg-blue-300 text-white rounded-md shadow-md p-2 mx-2 my-4 focus:outline-none focus:ring focus:border-blue-600">Create</button>
      </div>
    </div>
  
    <!-- LIST  -->
    <div class="bg-gray-300 h-1/2 py-12 ">
      <h1 class="text-center text-red-500 pb-6 text-lg font-bold">Delete</h1>
      <div class="m-6 flex justify-center">
        <div class="">
          <label class="text-lg text-white"> Search </label>
          <input class="border-b-2 outline-none rounded-md" type="text" />
        </div>
        <button class="bg-blue-300 text-white text-lg rounded-md shadow-md px-4 mb-2 mx-4 focus:outline-none focus:ring focus:border-blue-600 ">Delete</button>
  
        <!-- <ul>
          <li>Testing</li>
        </ul> -->
      </div>
    </div>
  
    <div class="bg-red-300 h-1/2 py-12">
      <h1 class="text-center text-red-500 pb-6 text-lg font-bold">List</h1>
      <div class="text-center">
      <ul>
        <li> Data </li>
        </ul>
      </div>
    </div>
  </div>
  

  </main>