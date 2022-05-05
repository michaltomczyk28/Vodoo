<script setup>
    const props = defineProps({
        editor: Object
    })
</script>

<template>
    <div class="editor-buttons">
        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            H1
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
            H2
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
            H3
        </button>
        <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            <span class="fa-solid fa-bold"></span>
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
            <span class="fa-solid fa-italic"></span>
        </button>
        <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
            <span class="fa-solid fa-strikethrough"></span>
        </button>
        <button @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
            <span class="fa-solid fa-code"></span>
        </button>
        <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
            <span class="fa-solid fa-list-ul"></span>
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
            <span class="fa-solid fa-list-ol"></span>
        </button>
        <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
            <span class="fa-solid fa-file-code"></span>
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
            <span class="fa-solid fa-quote-left"></span>
        </button>
        <button @click="editor.chain().focus().undo().run()">
            <span class="fa-solid fa-rotate-left"></span>
        </button>
        <button @click="editor.chain().focus().redo().run()">
            <span class="fa-solid fa-rotate-right"></span>
        </button>
    </div>
</template>

<style scoped lang="scss">
    button{
        background: inherit;
        border: none;
        font-size: 1em;
        font-weight: 500;
        padding: .7rem 1.2rem;

        &:hover, &.is-active{
            background-color: var(--hover);
            color: white;
        }
    }

    .editor-buttons{
        margin-top: 3rem;
        border-bottom: 1px solid var(--black);
    }
</style>
