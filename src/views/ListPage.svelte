<script>
  // import Swal from "sweetalert2/dist/sweetalert2.js";
  import Swal from "sweetalert2";
  import { onMount } from "svelte";

  const mobileApiUri = "https://mobile-app-i.herokuapp.com";
  const localApi = "http://localhost:3000";
  let itemData = [];
  const list = {
    name: "",
    priority: "",
    description: "",
  };
  let deleteList = {
    name: "",
  };

  onMount(async () => {
    const res = await fetch(`${mobileApiUri}/list/list`);
    itemData = [...(await res.json())];
    console.log(itemData);
  });

  const handleAddItem = async () => {
    if (!(list.name && list.priority && list.description)) {
      Swal.fire({
        title: "Warning",
        text: "Must have fields filled out to CREATE.",
        buttonsStyling: true,
        confirmButtonClass: "btn btn-warning",
        icon: "warning",
      });
      return;
    }
    await fetch(`${mobileApiUri}/list/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...list}),
    });

    Swal.fire({
      title: "Success",
      text: "Item Saved",
      buttonsStyling: true,
      confirmButtonClass: "btn btn-success",
      icon: "success",
    });
  };

  const handleDeleteItem = async () => {
    if (!deleteList.name) {
      Swal.fire({
        title: "Warning",
        text: "Empty Deleted Field",
        buttonsStyling: true,
        confirmButtonClass: "btn btn-warning",
        icon: "warning",
      });
      return;
    }
    await fetch(`${mobileApiUri}/list/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...deleteList}),
    });
    Swal.fire({
      title: "Success",
      text: "Item Deleted",
      buttonsStyling: true,
      confirmButtonClass: "btn btn-success",
      icon: "success",
    });
  };
</script>

<main>
  <div class="font-mono text-gray-700 bg-teal-600 h-screen ">
    <div class="text-center py-6">
      <h1 class="text-2xl">TO DO List</h1>
      <h1 class="pt-4 text-white  font-bold text-lg">Create</h1>
    </div>

    <div class="text-center">
      <div class="">
        <label class="text-xl"> Name </label>
        <input
          class="border-b-2 outline-none"
          bind:value={list.name}
          type="text" />
      </div>
      <div class="my-2">
        <label class="text-xl"> Priority </label>
        <input
          class="border-b-2 outline-none"
          bind:value={list.priority}
          type="text" />
      </div>
      <div class="my-2">
        <label class="text-xl"> Description </label>
        <input
          class="border-b-2 outline-none"
          type="text"
          bind:value={list.description} />
      </div>
      <div class="py-6">
        <button
          class="bg-blue-300 hover:text-gray-500 text-white rounded-md shadow-md p-2 mx-2 my-4 focus:outline-none focus:ring focus:border-blue-600"
          on:click={handleAddItem}>Create</button>
      </div>
    </div>
    <!-- LIST  -->
    <div class="bg-gray-600 h-1/2 py-12 ">
      <h1 class="text-center text-white pb-6 text-lg font-bold " b>Delete</h1>
      <div class="m-6 flex justify-center">
        <div class="">
          <label class="text-lg text-white"> Search </label>
          <input
            class="border-b-2 outline-none rounded-md"
            bind:value={deleteList.name}
            type="text" />
        </div>
        <button
          class="bg-blue-300 hover:text-gray-500 text-white text-lg rounded-md shadow-md px-4 mb-2 mx-4 focus:outline-none focus:ring focus:border-blue-600 "
          on:click={handleDeleteItem}>Delete</button>
      </div>
    </div>

    <div class="bg-pink-800 h-1/2 py-12 text-white">
      <h1 class="text-center text-white pb-6 text-lg font-bold">List</h1>
      <div class="text-center">
        <ul>
          {#each itemData as itemD}
            <li class="my-2 text-md text-white">{JSON.stringify(itemD,  null, 2)}</li>
          {:else}
            <p>No Data today!</p>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</main>
