<script>
  // import Swal from "sweetalert2/dist/sweetalert2.js";
  import Swal from "sweetalert2";
  import { onMount } from "svelte";

  const mobileApiUri = "https://mobile-app-i.herokuapp.com";
  const localApi = "http://localhost:3000";
  let contactData = [];
  const contact = {
    name: "",
    age: "",
    relatedHow: "",
  };
  let deleteContact = {
    name: "",
  };

  onMount(async () => {
    const res = await fetch(`${mobileApiUri}/contact/list`);
    contactData = [...(await res.json())];
    console.log(contactData);
  });

  const handleAddContact = async () => {
    if (!(contact.name && contact.age && contact.relatedHow)) {
      Swal.fire({
        title: "Warning",
        text: "Must have fields filled out to CREATE.",
        buttonsStyling: true,
        confirmButtonClass: "btn btn-warning",
        icon: "warning",
      });
      return;
    }
    await fetch(`${mobileApiUri}/contact/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...contact}),
    });

    Swal.fire({
      title: "Success",
      text: "Contact Saved",
      buttonsStyling: true,
      confirmButtonClass: "btn btn-success",
      icon: "success",
    });
  };

  const handleDeleteContact = async () => {
    if (!deleteContact.name) {
      Swal.fire({
        title: "Warning",
        text: "Empty Deleted Field",
        buttonsStyling: true,
        confirmButtonClass: "btn btn-warning",
        icon: "warning",
      });
      return;
    }
    await fetch(`${mobileApiUri}/contact/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...deleteContact }),
    });
    Swal.fire({
      title: "Success",
      text: "Contact Deleted",
      buttonsStyling: true,
      confirmButtonClass: "btn btn-success",
      icon: "success",
    });
  };
</script>

<main>
  <div class="font-mono text-gray-800 bg-purple-700 ">
    <div class="text-center py-6">
      <h1 class="text-2xl">Contact List</h1>
      <h1 class="pt-4 text-white font-bold text-lg">Create</h1>
    </div>

    <div class="text-center">
      <div class="">
        <label class="text-xl"> Name </label>
        <input
          class="border-b-2 outline-none"
          bind:value={contact.name}
          type="text" />
      </div>
      <div class="my-2">
        <label class="text-xl"> Age </label>
        <input
          class="border-b-2 outline-none"
          bind:value={contact.age}
          type="text" />
      </div>
      <div class="my-2">
        <label class="text-xl"> RelatedHow </label>
        <input
          class="border-b-2 outline-none"
          type="text"
          bind:value={contact.relatedHow} />
      </div>
      <div class="py-6">
        <button
          class="bg-blue-300 hover:text-gray-500 text-white rounded-md shadow-md p-2 mx-2 my-4 focus:outline-none focus:ring focus:border-blue-600"
          on:click={handleAddContact}>Create</button>
      </div>
    </div>
    <!-- LIST  -->
    <div class="bg-blue-500 h-1/2 py-12 ">
      <h1 class="text-center text-white pb-6 text-lg font-bold " b>Delete</h1>
      <div class="m-6 flex justify-center">
        <div class="">
          <label class="text-lg text-white"> Search </label>
          <input
            class="border-b-2 outline-none rounded-md"
            bind:value={deleteContact.name}
            type="text" />
        </div>
        <button
          class="bg-blue-300 hover:text-gray-500 text-white text-lg rounded-md shadow-md px-4 mb-2 mx-4 focus:outline-none focus:ring focus:border-blue-600 "
          on:click={handleDeleteContact}>Delete</button>
      </div>
    </div>

    <div class="bg-green-400 h-1/2 py-12">
      <h1 class="text-center text-white pb-6 text-lg font-bold">List</h1>
      <div class="text-center">
        <ul>
          {#each contactData as cd}
            <li class="my-2 text-md text-gray-800">{JSON.stringify(cd,  null, 2)}</li>
          {:else}
            <p>No Data today!</p>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</main>
