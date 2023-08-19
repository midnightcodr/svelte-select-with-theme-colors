<script>
  import { browser } from "$app/environment";
  import "../app.css";
  $: checked = browser && localStorage.getItem("theme") === "dark";
  function handleClick(event) {
    checked = !checked;
    if (browser) {
      browser && localStorage.setItem("theme", checked ? "dark" : "light");
      setTimeout(() => (event.target.checked = checked), 0);
    }
  }

  $: if (browser) {
    const { classList } = document.documentElement;
    classList.toggle("dark", checked);
    classList.toggle("[color-scheme:dark]", checked);
    classList.toggle("[color-scheme:light]", !checked);
  }
</script>

<div class="text-primary bg-surface0 w-3/4 m-auto pt-4">
  <label for="theme"
    >Dark Mode
    <input type="checkbox" {checked} on:click|preventDefault={handleClick} />
  </label>
  <slot />
</div>
