<script>
  import Select from "svelte-select";
  import "svelte-select/tailwind.css";

  let simple = ["one", "two", "three"];

  let collection = [
    { value: 1, label: "one" },
    { value: 2, label: "two" },
    { value: 3, label: "three" },
  ];
</script>

<div class="themed mt-8">
  <Select items={simple}>
    <slot name="item" slot="item" let:item let:index {item} {index}>
      <span class="font-medium text-paragraph-medium">
        {item[$$props.label || "label"]}
      </span>
    </slot>
  </Select>
</div>

<div class="themed mt-8">
  <Select items={collection} />
</div>

<style>
  .themed {
    --background: rgb(var(--color-surface0) / 1);
    --item-color: rgb(var(--color-primary) / 1);
    --list-background: rgb(var(--color-surface0) / 1);
    --item-hover-bg: rgb(var(--color-hover) / 1);
  }
</style>
